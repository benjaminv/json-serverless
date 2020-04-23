import express from 'express';
import { LocalServer, DevServer, CloudServer, TestServer } from './coreserver';
import { CloudApp, CoreApp, AppConfig } from './app';
import {
  StorageAdapter,
  FileStorageAdapter,
  S3StorageAdapter,
} from './storage';
import { ApiSpecification, Swagger, SwaggerConfig } from './specifications';
import { CoreServer } from './coreserver/server';
import { Environment, DevEnvironment, CloudEnvironment } from './environment';
import { Logger } from './utils/logger';

export class ServerFactory {
  static createServer = async (
    type: string,
    server: express.Express,
    appConfig: AppConfig,
    packageJsonFilePath = './package.json'
  ): Promise<CoreServer> => {
    let coreserver = {} as CoreServer;

    switch (type) {
      case 'local': {
        coreserver = ServerFactory.create(
          LocalServer,
          CoreApp,
          Environment,
          new FileStorageAdapter(appConfig.jsonFile),
          appConfig,
          server,
          packageJsonFilePath
        );
        break;
      }
      case 'debug': {
        coreserver = ServerFactory.create(
          LocalServer,
          CoreApp,
          Environment,
          new FileStorageAdapter(appConfig.jsonFile),
          appConfig,
          server,
          packageJsonFilePath
        );
        break;
      }
      case 'development': {
        const environment = new DevEnvironment();
        coreserver = ServerFactory.create(
          DevServer,
          CloudApp,
          DevEnvironment,
          new S3StorageAdapter(environment.s3Bucket, environment.s3File),
          appConfig,
          server,
          packageJsonFilePath
        );
        break;
      }
      case 'offline': {
        const environment = new CloudEnvironment();
        coreserver = ServerFactory.create(
          CloudServer,
          CloudApp,
          DevEnvironment,
          new S3StorageAdapter(environment.s3Bucket, environment.s3File),
          appConfig,
          server,
          packageJsonFilePath
        );
        break;
      }
      case 'test': {
        coreserver = ServerFactory.create(
          TestServer,
          CoreApp,
          Environment,
          new FileStorageAdapter(appConfig.jsonFile),
          appConfig,
          server,
          packageJsonFilePath
        );
        break;
      }
      default: {
        const environment = new CloudEnvironment();
        coreserver = ServerFactory.create(
          CloudServer,
          CloudApp,
          CloudEnvironment,
          new S3StorageAdapter(environment.s3Bucket, environment.s3File),
          appConfig,
          server,
          packageJsonFilePath
        );
        break;
      }
    }
    await coreserver.init();
    return coreserver;
  };

  static create<
    C extends CoreServer,
    A extends CoreApp,
    E extends Environment,
    S extends StorageAdapter
  >(
    coreserver: { new (server: express.Express, app: A): C },
    app: {
      new (
        appConfig: AppConfig,
        server: express.Express,
        storage: S,
        specification: ApiSpecification,
        environment: Environment
      ): A;
    },
    environment: { new (): E },
    storage: S,
    appConfig: AppConfig,
    server: express.Express,
    packageJsonFilePath: string
  ): C {
    const env = new environment();
    const swagger = new Swagger(
      server,
      new SwaggerConfig(appConfig.readOnly, appConfig.enableApiKeyAuth),
      env.basePath,
      packageJsonFilePath
    );
    const core = new coreserver(
      server,
      new app(appConfig, server, storage, swagger, env)
    );
    return core;
  }
}
