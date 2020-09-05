module.exports = {
   type: "mysql",
   host: process.env.MYSQL_HOST,
   port: 3306,
   username: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASS,
   database: process.env.MYSQL_DATABASE,
   synchronize: false,
   logging: false,
   entities: [],
   migrations: [
      "src/storage/Migration/**/*.ts"
   ],
   subscribers: []
}