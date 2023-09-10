import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

const PORT = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL
  // host: process.env.BD_HOST,
  // port: PORT,
  // username: process.env.BD_USER,
  // password: process.env.BD_PASS,
  // database: process.env.BD_NAM,
})