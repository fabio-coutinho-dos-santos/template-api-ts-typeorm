export const ormconfig = () => {
  return {
    type: 'postgres',
    url: process.env.DB_URL,
    // synchronize: false,
    // logging: false,
    // autoLoadEntities: true,
    // host: process.env.BD_HOST,
    // port: PORT,
    // username: process.env.BD_USER,
    // password: process.env.BD_PASS,
    // database: process.env.BD_NAM,
    // autoLoadEntities: true,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
  };
}