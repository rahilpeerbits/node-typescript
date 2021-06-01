# Node Typescript and MongoDB Structure

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/rahilpeerbits/node-typescript/master)
[![GitHub issues](https://img.shields.io/github/issues/rahilpeerbits/node-typescript)](https://github.com/rahilpeerbits/node-typescript/issues)
[![GitHub forks](https://img.shields.io/github/forks/rahilpeerbits/node-typescript)](https://github.com/rahilpeerbits/node-typescript/network)
[![GitHub stars](https://img.shields.io/github/stars/rahilpeerbits/node-typescript)](https://github.com/rahilpeerbits/node-typescript/stargazers)
[![GitHub license](https://img.shields.io/github/license/rahilpeerbits/node-typescript)](https://github.com/rahilpeerbits/node-typescript/blob/master/LICENSE)

Multipurpose project structure for node application.

## Usage

```bash
git clone https://github.com/rahilpeerbits/node-typescript.git
```

```bash
cd node-typescript
```

```bash
npm install
```

```bash
cp .env.example .env
```

###### Note: Update .env with your DB string and JWT key

```bash
npm start
```

## Important commands

Install dependencies

```bash
npm install
```

Run

```bash
npm start
```

Test

```bash
npm test
```

Build

```bash
npm build
```

## Libraries

- Mongoose
- Express
- Node mailer
- JWT
- Socket.io
- Husky
- CORS
- UUID
- JOI Validation
- Lodash
- CryptoJs
- Multer
- Winston
- Nodemon
- Jest
- Prettier

## Project Structure

- **App**
  - **src**
    - [app.ts](src/app.ts)
    - **config**
      - [config.ts](src/config/config.ts)
      - [db.ts](src/config/db.ts)
      - [logger.ts](src/config/logger.ts)
    - **helper**
      - [responseH.ts](src/helper/responseH.ts)
      - [sendmail.ts](src/helper/sendmail.ts)
    - **middleware**
      - [handle\-error.ts](src/middleware/handle-error.ts)
      - [jwt\-verify.ts](src/middleware/jwt-verify.ts)
    - **model**
      - [user.ts](src/model/user.ts)
    - **v1**
      - **auth**
        - [auth.spec.ts](src/v1/auth/auth.spec.ts)
        - [login.ts](src/v1/auth/login.ts)
        - [register.ts](src/v1/auth/register.ts)
        - [route.ts](src/v1/auth/route.ts)
        - [verifyEmail.ts](src/v1/auth/verifyEmail.ts)
      - [route.ts](src/v1/route.ts)
      - **user**
        - [profile.spec.ts](src/v1/user/profile.spec.ts)
        - [profile.ts](src/v1/user/profile.ts)
        - [route.ts](src/v1/user/route.ts)
      - **util**
        - [fileUpload.ts](src/v1/util/fileUpload.ts)
        - [route.ts](src/v1/util/route.ts)
  - [tsconfig.json](tsconfig.json)
  - [tslint.json](tslint.json)
