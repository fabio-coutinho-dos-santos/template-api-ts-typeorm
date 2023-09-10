# inspired in https://www.youtube.com/watch?v=j8cm2C5-xn8&t=1026s

## Dependencies:
  - npm i -D typescript nodemon ts-node @types/express @types/node
  - npm i pg typeorm dotenv reflect-metadata
  - create scripts inside package json:
   - "scripts": {
        "dev": "nodemon --exec ts-node ./src/index.ts"
      },
  - create tsconfig.json file