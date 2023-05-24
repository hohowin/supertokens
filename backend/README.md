# Backend

---

## Setup

### Typescript

```bash
yarn init -y
yarn add -D @types/node typescript nodemon eslint
tsc --init
```

and then add `.gitignore`

### Package.json

```json
  "scripts": {
    "build": "tsc && cp .env ./dist && cp .env.dev ./dist",
    "watch": "tsc -w",
    "dev": "nodemon dist/index.js",
    "debug": "DEBUG=mean-server nodemon dist/index.js",
    "start": "node dist/index.js"
  },
```

### tsconfig.json

enable:

```json
"outDir": "./dist",
```

### eslint

```bash
npx eslint --init
```

### express

```bash
yarn add -D @types/express @types/dotenv @types/debug
yarn add express dotenv debug
```