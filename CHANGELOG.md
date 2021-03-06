# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.6.15](https://github.com/pharindoko/json-serverless/compare/v1.6.14...v1.6.15) (2021-01-17)


### Features

* **server:** add azure storage fileshare as new storage adapter ([037c65b](https://github.com/pharindoko/json-serverless/commit/037c65bca314896e5fb24ddd2d6f7fdffcdf13f4))





## [1.6.14](https://github.com/pharindoko/json-serverless/compare/v1.6.12...v1.6.14) (2021-01-03)


### Bug Fixes

* **cli:** remove loading of local aws config / credentials to avoid runtime issues ([858b4d2](https://github.com/pharindoko/json-serverless/commit/858b4d291b323b0c753521ee4e46e416f56dab55))


### Features

* **server:** add storage adapter for aws dynamodb ([7ecb26f](https://github.com/pharindoko/json-serverless/commit/7ecb26f8ba60fff4f265ac37756d5abc27a7fbad))
* **template:** prepare serverless.yml for changes introduced in sls version 3.0 ([b430e2d](https://github.com/pharindoko/json-serverless/commit/b430e2d2d15f9598ec50657acae57602b56b7ae4))


### Performance Improvements

* **template:** exclude aws-sdk from deployment files to reduce the package size ([8254b5e](https://github.com/pharindoko/json-serverless/commit/8254b5e589bab3513f11a391375e2bd0d54b7561))
* **template:** set webpack mode to production ([7d6d222](https://github.com/pharindoko/json-serverless/commit/7d6d222df31b9fe60e17f4a67351cfe32e3ec4cc))





## [1.6.13](https://github.com/pharindoko/json-serverless/compare/v1.6.12...v1.6.13) (2021-01-03)


### Bug Fixes

* **cli:** remove loading of local aws config / credentials to avoid runtime issues ([858b4d2](https://github.com/pharindoko/json-serverless/commit/858b4d291b323b0c753521ee4e46e416f56dab55))


### Features

* **server:** add storage adapter for aws dynamodb ([7ecb26f](https://github.com/pharindoko/json-serverless/commit/7ecb26f8ba60fff4f265ac37756d5abc27a7fbad))
* **template:** prepare serverless.yml for changes introduced in sls version 3.0 ([b430e2d](https://github.com/pharindoko/json-serverless/commit/b430e2d2d15f9598ec50657acae57602b56b7ae4))


### Performance Improvements

* **template:** exclude aws-sdk from deployment files to reduce the package size ([8254b5e](https://github.com/pharindoko/json-serverless/commit/8254b5e589bab3513f11a391375e2bd0d54b7561))
* **template:** set webpack mode to production ([7d6d222](https://github.com/pharindoko/json-serverless/commit/7d6d222df31b9fe60e17f4a67351cfe32e3ec4cc))





## [1.6.12](https://github.com/pharindoko/json-serverless/compare/v1.6.11...v1.6.12) (2020-12-16)


### Bug Fixes

* **deps:** update dependency ajv to v7 ([ccef389](https://github.com/pharindoko/json-serverless/commit/ccef389d9378a646842eb92570e715353da559e1))





## [1.6.11](https://github.com/pharindoko/json-serverless/compare/v1.6.10...v1.6.11) (2020-11-28)


### Bug Fixes

* fix version issue between npm and github ([db5e86a](https://github.com/pharindoko/json-serverless/commit/db5e86a1581a61244990b7bf7ba385ae8cc0a716))





## [1.6.10](https://github.com/pharindoko/json-serverless/compare/v1.6.9...v1.6.10) (2020-11-20)

**Note:** Version bump only for package json-serverless





## [1.6.9](https://github.com/pharindoko/json-serverless/compare/v1.6.8...v1.6.9) (2020-11-20)


### Bug Fixes

* **deps:** update dependency express-graphql to ^0.12.0 ([0fa680c](https://github.com/pharindoko/json-serverless/commit/0fa680c53f81d462c0e1ca8886cdca73a1a16cb3))





## [1.6.8](https://github.com/pharindoko/json-serverless/compare/v1.6.7...v1.6.8) (2020-10-27)


### Bug Fixes

* **deps:** update dependency terser-webpack-plugin to v5.0.2 ([c12f051](https://github.com/pharindoko/json-serverless/commit/c12f0510c7d82a4ffdc27cd16b686c9ddae352c8))





## [1.6.7](https://github.com/pharindoko/json-serverless/compare/v1.6.6...v1.6.7) (2020-10-24)


### Bug Fixes

* **server:** add missing package ajv for validation ([f023464](https://github.com/pharindoko/json-serverless/commit/f023464c4037ced25414cf9a1d8dcfd202e2c4cb))





## [1.6.6](https://github.com/pharindoko/json-serverless/compare/v1.6.5...v1.6.6) (2020-10-24)


### Bug Fixes

* **deps:** update dependency terser-webpack-plugin to v5.0.1 ([d071260](https://github.com/pharindoko/json-serverless/commit/d071260e7ffbd596d979bb3870ffefb8c154e755))





## [1.6.5](https://github.com/pharindoko/json-serverless/compare/v1.6.4...v1.6.5) (2020-10-15)


### Bug Fixes

* **deps:** update dependency terser-webpack-plugin to v5 ([6714a48](https://github.com/pharindoko/json-serverless/commit/6714a480d05c241abb0832083e33698758a507ab))





## [1.6.4](https://github.com/pharindoko/json-serverless/compare/v1.6.3...v1.6.4) (2020-10-07)


### Bug Fixes

* **deps:** update dependency terser-webpack-plugin to v4.2.3 ([e5a7bae](https://github.com/pharindoko/json-serverless/commit/e5a7bae5c2e8af06675909b1b19bb68c37fb1c1e))





## [1.6.3](https://github.com/pharindoko/json-serverless/compare/v1.6.2...v1.6.3) (2020-09-25)


### Bug Fixes

* **server:** repair non working graphiql page by modifying blocking csp rules ([11b1cb4](https://github.com/pharindoko/json-serverless/commit/11b1cb40b22380e94d816d4eaf5e15f39b4695fd))


### Performance Improvements

* **server:** remove unneeded packages and dependencies ([09e791c](https://github.com/pharindoko/json-serverless/commit/09e791c2d6c36ca6a14aa3f96bc6cd31eb9852f5))





## [1.6.2](https://github.com/pharindoko/json-serverless/compare/v1.6.1...v1.6.2) (2020-09-20)


### Bug Fixes

* **deps:** update dependency terser-webpack-plugin to v4.2.2 ([5acc4a7](https://github.com/pharindoko/json-serverless/commit/5acc4a79e0049743b4f79cc6ebc08bac77d6e2b0))





## [1.6.1](https://github.com/pharindoko/json-serverless/compare/v1.6.0...v1.6.1) (2020-09-19)


### Bug Fixes

* **deps:** update dependency node-fetch to v2.6.1 [security] ([b1ca1b0](https://github.com/pharindoko/json-serverless/commit/b1ca1b075fa5210c0abba179fc7c1d899db5d1c8))
* **deps:** update dependency table to v6 ([968b3ab](https://github.com/pharindoko/json-serverless/commit/968b3ab500e1ba58251417832710b25b8b83a2be))
* **deps:** update dependency terser-webpack-plugin to v4.2.0 ([62b6195](https://github.com/pharindoko/json-serverless/commit/62b61955752bc6726474c48984d49e6d4663aaad))
* update package dependencies ([7770493](https://github.com/pharindoko/json-serverless/commit/7770493a9cbf846cda2c58dce0da7f71aa4bc1aa))
* **template:** add property to fix non-working serverless offline for local testing ([5324852](https://github.com/pharindoko/json-serverless/commit/5324852bb96cab39138532ec6237bb7005c08e3a))





# [1.6.0](https://github.com/pharindoko/json-serverless/compare/v1.5.52...v1.6.0) (2020-08-14)


### Bug Fixes

* **server:** delete statement in body of graphql mutation does not delete the item ([43008f3](https://github.com/pharindoko/json-serverless/commit/43008f3e8f18cdc482932887141ffa4dfdae1551))


### Features

* redesign and integrate authentication via apikey into the json-serverless-lib ([d6e3b43](https://github.com/pharindoko/json-serverless/commit/d6e3b433a5209526615897fd406165166a924e83))





## [1.5.52](https://github.com/pharindoko/json-serverless/compare/v1.5.51...v1.5.52) (2020-08-10)


### Bug Fixes

* **deps:** update dependency terser-webpack-plugin to v4.1.0 ([57abe5b](https://github.com/pharindoko/json-serverless/commit/57abe5b4b4254c876b245ece230637cde39235eb))





## [1.5.51](https://github.com/pharindoko/json-serverless/compare/v1.5.50...v1.5.51) (2020-08-08)

**Note:** Version bump only for package json-serverless





## [1.5.50](https://github.com/pharindoko/json-serverless/compare/v1.5.49...v1.5.50) (2020-08-08)


### Bug Fixes

* **deps:** update dependency helmet to v4 ([695da9d](https://github.com/pharindoko/json-serverless/commit/695da9d8d62f71f71762798048195a348d48c784))
* **deps:** update dependency terser-webpack-plugin to v4 ([c00e191](https://github.com/pharindoko/json-serverless/commit/c00e1913c1df31eefa203e12c599a314e7ab30d9))





## [1.5.49](https://github.com/pharindoko/json-serverless/compare/v1.5.48...v1.5.49) (2020-08-03)


### Bug Fixes

* **deps:** update dependency terser-webpack-plugin to v3.1.0 ([65776b6](https://github.com/pharindoko/json-serverless/commit/65776b6738ca1afe71e0c1b6f72e7c755adbb7c2))





## [1.5.48](https://github.com/pharindoko/json-serverless/compare/v1.5.47...v1.5.48) (2020-08-01)


### Bug Fixes

* **template:** restrict lambdas permissions on s3 bucket ([8ad34dc](https://github.com/pharindoko/json-serverless/commit/8ad34dc5ed6300327dcf7c23299e2b033ff165aa))





## [1.5.47](https://github.com/pharindoko/json-serverless/compare/v1.5.46...v1.5.47) (2020-07-27)


### Bug Fixes

* **deps:** update dependency terser-webpack-plugin to v3.0.8 ([ec9112f](https://github.com/pharindoko/json-serverless/commit/ec9112f430fcb6bcc7b8d7c2cccb992e5f8bf4a6))





## [1.5.46](https://github.com/pharindoko/json-serverless/compare/v1.5.45...v1.5.46) (2020-07-22)


### Bug Fixes

* **deps:** update dependency @types/inquirer to v7 ([bd577e4](https://github.com/pharindoko/json-serverless/commit/bd577e4b1c63407e43a0084a69947400d05afcff))





## [1.5.45](https://github.com/pharindoko/json-serverless/compare/v1.5.44...v1.5.45) (2020-07-20)


### Bug Fixes

* **cli:** output urls are truncated when terminal size is too small ([e651ffd](https://github.com/pharindoko/json-serverless/commit/e651ffd832d37eb289c87871857bbcf0263015c3))





## [1.5.44](https://github.com/pharindoko/json-serverless/compare/v1.5.43...v1.5.44) (2020-06-23)


### Bug Fixes

* **server:** add missing types to fix build issues when using json-serverless-lib standalone ([1a0f333](https://github.com/pharindoko/json-serverless/commit/1a0f33350b98412c2410c456b151eaef83124e22))
* **server:** update broken graphql feature by adding request options in graphql queries ([4d6511b](https://github.com/pharindoko/json-serverless/commit/4d6511bbc35cec83a8020a166444e9a6955b374b))
* **server:** update broken graphql feature by adding request options in graphql queries ([fa9edf7](https://github.com/pharindoko/json-serverless/commit/fa9edf7188f46e6c56e2c03f143da111e63a8e4f))


### Features

* **cli:** add new flags to setup internal routes via cli and appconfig ([6d62fdd](https://github.com/pharindoko/json-serverless/commit/6d62fddd5321265c3b70a63da807900069b29618))
* **cli:** add new flags to setup internal routes via cli and appconfig ([6445406](https://github.com/pharindoko/json-serverless/commit/64454066a408f1936b7bca07592495e44703d892))
* **cli:** create-stack: print created s3 bucket name as output ([24d8fa0](https://github.com/pharindoko/json-serverless/commit/24d8fa0578d71fa3da707c90e4bf50d11c69e48f))
* **examples:** add example to show simple standalone usage of library ([8c5ac49](https://github.com/pharindoko/json-serverless/commit/8c5ac4992e817125672af09f870c292df2913d73))
* **server:** improved security by using helmet ([48468b4](https://github.com/pharindoko/json-serverless/commit/48468b42cd3fb8d1d7d17f7a6375d0f30de74d00))
* **server:** improved security by using helmet ([c33ce21](https://github.com/pharindoko/json-serverless/commit/c33ce218d7127c8cc0a32dbc0a7ec2cdeaebbeb4))





## [1.5.43](https://github.com/pharindoko/json-serverless/compare/v1.5.42...v1.5.43) (2020-06-20)


### Bug Fixes

* **server:** add ts-node to dev dependencies ([5f9f32d](https://github.com/pharindoko/json-serverless/commit/5f9f32db71e97da1915866dcc7df50582bce38a8))


### Features

* **server:** expose api base path in app.config ([9d0de45](https://github.com/pharindoko/json-serverless/commit/9d0de45e8def5528663e1ba4d02d701be3c3cf37))





## [1.5.42](https://github.com/pharindoko/json-serverless/compare/v1.5.41...v1.5.42) (2020-06-09)


### Features

* **cli:** add new command validate for direct validation of json files ([70c873f](https://github.com/pharindoko/json-serverless/commit/70c873fc3ead1e8285538317e2ad578ec47d5be2))
* **server:** add loglevels (info as default, debug) to have less unneeded output ([d482752](https://github.com/pharindoko/json-serverless/commit/d482752204b2743d275578f38cce1a3fff8baaeb))
* **server:** add new validation rule to check for empty arrays ([6e3da25](https://github.com/pharindoko/json-serverless/commit/6e3da2541c109ba3ae00631931ba3392ce9a9868))





## [1.5.41](https://github.com/pharindoko/json-serverless/compare/v1.5.40...v1.5.41) (2020-06-02)


### Features

* **cli:** extend cli options to deploy stack without any prompt ([7b86652](https://github.com/pharindoko/json-serverless/commit/7b8665200d923d5b2155001fa2340567e4131c68))





## [1.5.40](https://github.com/pharindoko/json-serverless/compare/v1.5.39...v1.5.40) (2020-06-02)

**Note:** Version bump only for package json-serverless





## [1.5.39](https://github.com/pharindoko/json-serverless/compare/v1.5.38...v1.5.39) (2020-06-02)


### Features

* **cli:** add userfriendly output for create-stack or update-stack ([ca27e09](https://github.com/pharindoko/json-serverless/commit/ca27e09ea82354e3e6f8f52ce219a948f10dfe53))
* **cli:** add userfriendly output for create-stack or update-stack ([71355e3](https://github.com/pharindoko/json-serverless/commit/71355e375b026fb28c985b8dd661776bed1d72ab))


### Performance Improvements

* **template:** reuse connection with keep-alive ([2e09d2e](https://github.com/pharindoko/json-serverless/commit/2e09d2e3e65484a4ec29c89f64766c17709b01e5))





## [1.5.38](https://github.com/pharindoko/json-serverless/compare/v1.5.37...v1.5.38) (2020-05-15)


### Bug Fixes

* **deps:** update dependency tslib to v2 ([dbaa3c4](https://github.com/pharindoko/json-serverless/commit/dbaa3c4c3eb58567bf503179886387dfea545243))





## [1.5.37](https://github.com/pharindoko/json-serverless/compare/v1.5.36...v1.5.37) (2020-05-12)


### Features

* **common:** add option to enable/disable swagger interface ([e38766e](https://github.com/pharindoko/json-serverless/commit/e38766e811977959983430f72de8dcff764946ea))





## [1.5.36](https://github.com/pharindoko/json-serverless/compare/v1.5.35...v1.5.36) (2020-05-05)


### Bug Fixes

* **server:** exception when json file contains float values ([14e735d](https://github.com/pharindoko/json-serverless/commit/14e735dddd4d3407ef82dcf38623be71e658a51f))





## [1.5.35](https://github.com/pharindoko/json-serverless/compare/v1.5.34...v1.5.35) (2020-05-04)


### Bug Fixes

* **cli:** update-stack: get current working directory correctly ([f511ac0](https://github.com/pharindoko/json-serverless/commit/f511ac0375351089904a2bf4461672708543f4b1))





## [1.5.34](https://github.com/pharindoko/json-serverless/compare/v1.5.33...v1.5.34) (2020-05-04)


### Bug Fixes

* **cli:** update-stack: adapth path and file references ([67a14a9](https://github.com/pharindoko/json-serverless/commit/67a14a9e0d41721fdee7a47cbcea3cba9e7fa30c))
* **cli:** update-stack: add missing build-step ([1e6ecd2](https://github.com/pharindoko/json-serverless/commit/1e6ecd24d0307fd4b6fefc92890756e78247526f))


### Features

* **cli:** add option to update-stack to use another current working directory ([fcbbba5](https://github.com/pharindoko/json-serverless/commit/fcbbba58b9522735919c31fd5d51c617d9146b76))





## [1.5.33](https://github.com/pharindoko/json-serverless/compare/v1.5.32...v1.5.33) (2020-05-04)


### Bug Fixes

* **template:** adapt jsonfilepath in webpack config ([fd95387](https://github.com/pharindoko/json-serverless/commit/fd95387f137978766173a5ed0d4bad3706c73abd))





## [1.5.32](https://github.com/pharindoko/json-serverless/compare/v1.5.31...v1.5.32) (2020-05-04)


### Bug Fixes

* **template:** set correct webpack config file for npm package ([870ec59](https://github.com/pharindoko/json-serverless/commit/870ec590ef3e23f13c30dfd693bc4f84a3b747b1))





## [1.5.31](https://github.com/pharindoko/json-serverless/compare/v1.5.30...v1.5.31) (2020-05-04)


### Bug Fixes

* **references:** update dependencies ([b1b5414](https://github.com/pharindoko/json-serverless/commit/b1b5414e5361be89ca6f15ddb52a4fedbc54a4b9))
* **server:** correct wrong swagger response types ([f4ce050](https://github.com/pharindoko/json-serverless/commit/f4ce0507adb1b84e004f811ea80c100f22bdd6a2))
* **server:** fail on first request to swagger ui solved by initial request ot middleware ([9cb764d](https://github.com/pharindoko/json-serverless/commit/9cb764d209c33f0c2dc2a6f7ef2ec8db46ac2ef5))


### Features

* **cli:** list all relevant urls as output ([c9a053e](https://github.com/pharindoko/json-serverless/commit/c9a053ee0974ce8b5de68f36980354247ed21bba))
* **server:** add example to start the library directly ([01ec1a9](https://github.com/pharindoko/json-serverless/commit/01ec1a958391bd908cc668df4c3f0ae0ba8457e0))
* **server:** add graphql interface ([51aae16](https://github.com/pharindoko/json-serverless/commit/51aae16642a3694aedadbd80df702a4d8724eac2))


### Reverts

* **server:** revert change of db.json back to basic sample ([fbb743c](https://github.com/pharindoko/json-serverless/commit/fbb743ce055c16e6a79a1a5465d7250c2f6a3021))





## [1.5.30](https://github.com/pharindoko/json-serverless/compare/v1.5.27...v1.5.30) (2020-04-12)


### Bug Fixes

* **cli:** update create-stack to install dependencies (needed) ([7ed2859](https://github.com/pharindoko/json-serverless/commit/7ed2859374d5c0a39e015bbf7eaa701c33a3284e))


### Features

* **cli:** remove additional install step to improve performance ([ea9a8ab](https://github.com/pharindoko/json-serverless/commit/ea9a8abb64fc82fab0da96804cd1d07d0b9dafd5))





## [1.5.28](https://github.com/pharindoko/json-serverless/compare/v1.5.27...v1.5.28) (2020-04-12)


### Features

* **cli:** remove additional install step to improve performance ([ea9a8ab](https://github.com/pharindoko/json-serverless/commit/ea9a8abb64fc82fab0da96804cd1d07d0b9dafd5))





## [1.5.27](https://github.com/pharindoko/json-serverless/compare/v1.5.26...v1.5.27) (2020-04-02)


### Bug Fixes

* **deps:** update dependency chalk to v4 ([ce27e00](https://github.com/pharindoko/json-serverless/commit/ce27e009db3f9eee2d9e1171faa0ccd09d9463b2))





## [1.5.26](https://github.com/pharindoko/json-serverless/compare/v1.5.25...v1.5.26) (2020-03-29)


### Bug Fixes

* **cli:** validate apiname to avoid issues in deployment with s3 or cloudformation stack ([f564f87](https://github.com/pharindoko/json-serverless/commit/f564f87a6f5a3b4dde4bbfb57fac4e658df2c05b))





## [1.5.25](https://github.com/pharindoko/json-serverless/compare/v1.5.24...v1.5.25) (2020-03-29)


### Bug Fixes

* **cli:** add missing aws-sdk reference and fix audited vulnerabilities ([a9f7328](https://github.com/pharindoko/json-serverless/commit/a9f73285dab4ff63c82e9bf83ed8fa63fe6d9b1d))
* **server:** fix security vulnerabilities detected by snyk ([1b653c7](https://github.com/pharindoko/json-serverless/commit/1b653c7126129c577737fbe620ab821e5d07b4c3))





## [1.5.24](https://github.com/pharindoko/json-serverless/compare/v1.5.23...v1.5.24) (2020-03-01)


### Bug Fixes

* **json-server:** update to v 0.16 and that fixes issue of 0.15 ([a02a4ba](https://github.com/pharindoko/json-serverless/commit/a02a4baba21deb26b7feb641093746d12a479a69))





## [1.5.23](https://github.com/pharindoko/json-serverless/compare/v1.5.22...v1.5.23) (2020-02-16)


### Bug Fixes

* **server:** fix vulnerabilities ([1591bbe](https://github.com/pharindoko/json-serverless/commit/1591bbee5cc3fe0d2b89aabcc7e8e793786b8fbf))
* **template:** fix cors settings in serverless.yml ([c860566](https://github.com/pharindoko/json-serverless/commit/c8605661a66f97cf57328e2fb99bc8689cdf34ea))





## [1.5.22](https://github.com/pharindoko/json-serverless/compare/v1.5.21...v1.5.22) (2020-01-27)


### Bug Fixes

* **server:** fix missing property initialization in swagger spec ([942a38a](https://github.com/pharindoko/json-serverless/commit/942a38ad956c3934f7df4446b05c399295e0df65))


### Features

* **cli:** add readonly mode for local run option ([a16c5ee](https://github.com/pharindoko/json-serverless/commit/a16c5ee1031b255e07b3367055efcde9562ce47d))





## [1.5.21](https://github.com/pharindoko/json-serverless/compare/v1.5.19...v1.5.21) (2020-01-25)


### Bug Fixes

* **server:** fix cors issue for post, put, patch events ([d15e331](https://github.com/pharindoko/json-serverless/commit/d15e3317d2ce9f0815a0b48c66d52cc5b88423ac))





## [1.5.20](https://github.com/pharindoko/json-serverless/compare/v1.5.19...v1.5.20) (2020-01-19)

**Note:** Version bump only for package json-serverless





## [1.5.19](https://github.com/pharindoko/json-serverless/compare/v1.5.18...v1.5.19) (2020-01-18)

**Note:** Version bump only for package json-serverless





## [1.5.18](https://github.com/pharindoko/json-serverless/compare/v1.5.17...v1.5.18) (2020-01-18)


### Bug Fixes

* **cli:** fix wrong reference to serverless binary in update function ([be25968](https://github.com/pharindoko/json-serverless/commit/be25968382e7919d379620d016755634aa934ec6))





## [1.5.17](https://github.com/pharindoko/json-serverless/compare/v1.5.14...v1.5.17) (2020-01-18)


### Bug Fixes

* **cli:** adapt reference to serverless binary in create stack ([7136b22](https://github.com/pharindoko/json-serverless/commit/7136b22740dee7c7e0cdc6f168b6949b0e629f01))
* **deps:** update dependency globby to v11 ([0e5950e](https://github.com/pharindoko/json-serverless/commit/0e5950e9c0995d052b0d7a0f05725eed11965d85))
* **server:** add cors origin headers ([b3b6f16](https://github.com/pharindoko/json-serverless/commit/b3b6f16918a1a2888a1e3c9f426cccb4fe544c1c))





## [1.5.16](https://github.com/pharindoko/json-serverless/compare/v1.5.14...v1.5.16) (2020-01-06)

**Note:** Version bump only for package json-serverless





## [1.5.15](https://github.com/pharindoko/json-serverless/compare/v1.5.14...v1.5.15) (2020-01-05)

**Note:** Version bump only for package json-serverless





## [1.5.14](https://github.com/pharindoko/json-serverless/compare/v1.5.13...v1.5.14) (2020-01-03)


### Bug Fixes

* **cli:** update colors to fit to white and black terminal ([b4e6f57](https://github.com/pharindoko/json-serverless/commit/b4e6f573e3372376a82b38b0aa9183daea531d42))





## [1.5.13](https://github.com/pharindoko/json-serverless/compare/v1.5.12...v1.5.13) (2020-01-03)

**Note:** Version bump only for package json-serverless





## [1.5.12](https://github.com/pharindoko/json-serverless/compare/v1.5.11...v1.5.12) (2019-12-31)


### Bug Fixes

* **cli:** add missing directory config before create config files ([b39d30f](https://github.com/pharindoko/json-serverless/commit/b39d30f8b8655b83d3c56abc20b41ebd93eda76f))





## [1.5.11](https://github.com/pharindoko/json-serverless/compare/v1.5.8...v1.5.11) (2019-12-31)


### Bug Fixes

* **deps:** update dependency nodemon to v2 ([c755eff](https://github.com/pharindoko/json-serverless/commit/c755effe6fca0a846fbcbd1752f2dfd2057fdcf2))
* **deps:** update dependency terser-webpack-plugin to v2 ([ef6d71c](https://github.com/pharindoko/json-serverless/commit/ef6d71c77550d3abd43cc952e6571028018d4e31))





## [1.5.10](https://github.com/pharindoko/json-serverless/compare/v1.5.9...v1.5.10) (2019-12-31)

**Note:** Version bump only for package json-serverless





## [1.5.9](https://github.com/pharindoko/json-serverless/compare/v1.5.8...v1.5.9) (2019-12-31)

**Note:** Version bump only for package json-serverless





## [1.5.8](https://github.com/pharindoko/json-serverless/compare/v1.5.3...v1.5.8) (2019-12-31)


### Features

* **cli:** add cli to json-serverless project ([bf1213a](https://github.com/pharindoko/json-serverless/commit/bf1213a1ad18c59ae3cafacd8a6cb3c737caf6cc))


### Reverts

* Revert "v0.1.0-alpha.0" ([ccc6a6d](https://github.com/pharindoko/json-serverless/commit/ccc6a6d3e6bb349d8c51b83375610f8db25a762f))
* Revert "v0.0.6-alpha.16" ([8a7f087](https://github.com/pharindoko/json-serverless/commit/8a7f08784289b7936c704caecfbb8f757719b876))
* Revert "v0.0.6-alpha.10" ([dfb59d2](https://github.com/pharindoko/json-serverless/commit/dfb59d2458dfa2fb3e1426f1749409abfa4dd37d))





## [1.5.7](https://github.com/pharindoko/json-serverless/compare/v1.5.6...v1.5.7) (2019-12-31)

**Note:** Version bump only for package json-serverless




## [1.5.6](https://github.com/pharindoko/json-serverless/compare/v1.5.3...v1.5.6) (2019-12-30)


### Features

* **cli:** add cli to json-serverless project ([bf1213a](https://github.com/pharindoko/json-serverless/commit/bf1213a1ad18c59ae3cafacd8a6cb3c737caf6cc))


### Reverts

* Revert "v0.1.0-alpha.0" ([ccc6a6d](https://github.com/pharindoko/json-serverless/commit/ccc6a6d3e6bb349d8c51b83375610f8db25a762f))
* Revert "v0.0.6-alpha.16" ([8a7f087](https://github.com/pharindoko/json-serverless/commit/8a7f08784289b7936c704caecfbb8f757719b876))
* Revert "v0.0.6-alpha.10" ([dfb59d2](https://github.com/pharindoko/json-serverless/commit/dfb59d2458dfa2fb3e1426f1749409abfa4dd37d))





## [1.5.5](https://github.com/pharindoko/json-serverless/compare/v1.5.4...v1.5.5) (2019-12-30)

**Note:** Version bump only for package json-serverless





## [0.0.6](https://github.com/pharindoko/json-serverless/compare/v1.5.3...v0.0.6) (2019-12-30)


### Features

* **cli:** add cli to json-serverless project ([bf1213a](https://github.com/pharindoko/json-serverless/commit/bf1213a1ad18c59ae3cafacd8a6cb3c737caf6cc))


### Reverts

* Revert "v0.1.0-alpha.0" ([ccc6a6d](https://github.com/pharindoko/json-serverless/commit/ccc6a6d3e6bb349d8c51b83375610f8db25a762f))
* Revert "v0.0.6-alpha.16" ([8a7f087](https://github.com/pharindoko/json-serverless/commit/8a7f08784289b7936c704caecfbb8f757719b876))
* Revert "v0.0.6-alpha.10" ([dfb59d2](https://github.com/pharindoko/json-serverless/commit/dfb59d2458dfa2fb3e1426f1749409abfa4dd37d))




## [1.5.3](https://github.com/pharindoko/json-serverless/compare/v1.5.2...v1.5.3) (2019-12-15)


### Bug Fixes

* **logging:** fix error when pino pretty is not found ([f698257](https://github.com/pharindoko/json-serverless/commit/f698257df9ea85419acc8562f63ec89d33a3cc60))

## [1.5.2](https://github.com/pharindoko/json-serverless/compare/v1.5.1...v1.5.2) (2019-12-08)


### Bug Fixes

* **dependencies:** update package-lock.json and old packages ([da5f815](https://github.com/pharindoko/json-serverless/commit/da5f815d0c01fd5ca786160cfdde7cbcfff9a039))

## [1.5.1](https://github.com/pharindoko/json-serverless/compare/v1.5.0...v1.5.1) (2019-10-04)


### Bug Fixes

* package.json, package-lock.json & .snyk to reduce vulnerabilities ([6104846](https://github.com/pharindoko/json-serverless/commit/6104846))

# [1.5.0](https://github.com/pharindoko/json-serverless/compare/v1.4.1...v1.5.0) (2019-09-02)


### Features

* **server:** added additional json validation ([ecc1581](https://github.com/pharindoko/json-serverless/commit/ecc1581))

## [1.4.1](https://github.com/pharindoko/json-serverless/compare/v1.4.0...v1.4.1) (2019-09-02)


### Bug Fixes

* **server:** fixed issues when starting local instances after refactoring code ([d590898](https://github.com/pharindoko/json-serverless/commit/d590898))

# [1.4.0](https://github.com/pharindoko/json-serverless/compare/v1.3.0...v1.4.0) (2019-08-25)


### Features

* **settings:** added possiblity to set path of json file which will be imported ([ce10b0b](https://github.com/pharindoko/json-serverless/commit/ce10b0b))

# [1.3.0](https://github.com/pharindoko/json-serverless/compare/v1.2.0...v1.3.0) (2019-08-24)


### Features

* **swagger:** add swagger ui and spec support ([cbd8c82](https://github.com/pharindoko/json-serverless/commit/cbd8c82))

# [1.2.0](https://github.com/pharindoko/json-serverless/compare/v1.1.0...v1.2.0) (2019-08-16)


### Features

* **debugging:** enabled local debugging in vscode using webpack and sourcemaps ([1a004e1](https://github.com/pharindoko/json-serverless/commit/1a004e1))

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.1 (2019-08-08)


### Bug Fixes

* **deps:** update dependency serverless-http to v2 ([c406652](https://github.com/pharindoko/ngx-chartboard-backend/commit/c406652))
* .snyk, package.json & package-lock.json to reduce vulnerabilities ([a05a6b7](https://github.com/pharindoko/ngx-chartboard-backend/commit/a05a6b7))
* .snyk, package.json & package-lock.json to reduce vulnerabilities ([9e14350](https://github.com/pharindoko/ngx-chartboard-backend/commit/9e14350))
* current serverless framework version has issue with stage parameters ([897cb9f](https://github.com/pharindoko/ngx-chartboard-backend/commit/897cb9f))


### Features

* **change management:** added version and changelog support ([46933e3](https://github.com/pharindoko/ngx-chartboard-backend/commit/46933e3))
