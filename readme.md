# inspired in https://www.youtube.com/watch?v=j8cm2C5-xn8&t=1026s

## Dependencies:
  - npm i -D typescript express nodemon ts-node @types/express @types/node
  - npm i pg typeorm dotenv reflect-metadata
  - create scripts inside package json:
   - "scripts": {
        "dev": "nodemon --exec ts-node ./src/index.ts"
      },
  - create tsconfig.json file
  - create data-source file to configure typeORM => see beekeeper (tool to manage postgres database
  - npm i express-async-errors to handle with errors middlewares with async functions