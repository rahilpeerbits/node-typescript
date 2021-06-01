# Node Typescript and MongoDB Structure

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/rahilpeerbits/node-typescript/master)
[![GitHub issues](https://img.shields.io/github/issues/rahilpeerbits/node-typescript)](https://github.com/rahilpeerbits/node-typescript/issues)
[![GitHub forks](https://img.shields.io/github/forks/rahilpeerbits/node-typescript)](https://github.com/rahilpeerbits/node-typescript/network)
[![GitHub stars](https://img.shields.io/github/stars/rahilpeerbits/node-typescript)](https://github.com/rahilpeerbits/node-typescript/stargazers)
[![GitHub license](https://img.shields.io/github/license/rahilpeerbits/node-typescript)](https://github.com/rahilpeerbits/node-typescript/blob/master/LICENSE)

![Image of Node + TS + Mongo + Express](https://i.ibb.co/P6Pk3dr/68747470733a2f2f692e6962622e636f2f6d4e72324358342f696d6167652e706e67-1.png)

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

## File Structure

```
├─ .github
│  └─ workflows
│     └─ deploy.yaml
├─ .husky
│  ├─ .gitignore
│  └─ pre-commit
├─ src
│  ├─ config
│  │  ├─ config.ts
│  │  ├─ db.ts
│  │  └─ logger.ts
│  ├─ helper
│  │  ├─ responseH.ts
│  │  └─ sendmail.ts
│  ├─ middleware
│  │  ├─ handle-error.ts
│  │  └─ jwt-verify.ts
│  ├─ model
│  │  └─ user.ts
│  ├─ v1
│  │  ├─ auth
│  │  │  ├─ auth.spec.ts
│  │  │  ├─ login.ts
│  │  │  ├─ register.ts
│  │  │  ├─ route.ts
│  │  │  └─ verifyEmail.ts
│  │  ├─ user
│  │  │  ├─ profile.spec.ts
│  │  │  ├─ profile.ts
│  │  │  └─ route.ts
│  │  ├─ util
│  │  │  ├─ fileUpload.ts
│  │  │  └─ route.ts
│  │  └─ route.ts
│  └─ app.ts
├─ .env.example
├─ .gitignore
├─ LICENSE
├─ README.md
├─ jest.config.js
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ tslint.json
```
