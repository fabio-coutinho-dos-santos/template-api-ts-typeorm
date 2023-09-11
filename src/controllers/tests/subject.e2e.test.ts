const supertest = require('supertest')
const express = require('express')
import { AppDataSource } from "../../data-source";
import routes from "../../routes";
import { httpError } from "../../middlewares/httpError";

jest.setTimeout(15000)

// AppDataSource.initialize()
//   .then(() => {
    const app = express();

    app.use(express.json())
    app.use(routes)
    app.use(httpError)
  //   return app.listen(process.env.SERVER_PORT, () => {
  //     console.log(`App listening on port ${process.env.SERVER_PORT}`)
  //   });
  // })

describe('Subject routes', () => {
  describe('get all subjects', () => {
    it('should return a subjects array', async () => {
      const response = await supertest(app).get(`/subjects`).expect(404)
      console.log(response)

    })
  })
})