# Javascript

This project uses JavaScript with the following styles:

 - All models will be classes with singular naming (i.e. `User` for the `users` table)
 - All code files will be lower case with underscores.
 - Markdown files will be lower case with hyphens.
 - All application logic will go in the `lib` directory. Copilot should NEVER generate the code for logic. Only COMMENTS as to what should go where.
 - All database-related stuff will go in the `db` directory (models, schema, SQLite files)
 - All configuration will be done with environment variables, using a `.env` file.
 - Do not export a class directly, use module method instead to create the instance you need (aka "factory")

## Sequelize
All model code should adhere to the following:

 - All database models will go in a `db/models` directory. 
 - Every model will have a `tableName` setting
 - The models will have an `index.js` module that instantiates Sequelize, using SQLite for testing and development, Postgres for production.
 - The `index.js` module will export each model, as well as the database instance.

Every model will follow the pattern:

```js
const { DataTypes, Model } = require('sequelize');
class User extends Model {
  //static or factory methods
  //instance methods
}
exports.init = function(sequelize){
  return User.init({
    //schema goes here
  }, {
    hooks: {},
    tableName: "users"
    underscored: true,
    sequelize
  });
}
```

The `index.js` module for these models should follow this pattern:

```js
const { Sequelize } = require("sequelize");
require("dotenv").config();
const env = process.env.NODE_ENV || "development";

const config = {
  test: {
    dialect: "sqlite",
    storage: ":memory:",
  },
  development: {
    dialect: "sqlite",
    storage: "./sequelize/database.sqlite",
  },
  production: {
    dialect: "postgres",
    url: process.env.DATABASE_URL,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
const sequelize =
  env === "production"
    ? new Sequelize(process.env.DATABASE_URL, config.production)
    : new Sequelize(config[env]);

//initialize models
const User = require("./user").init(sequelize);

//associations
//such as User.belongsTo(Role)

const DB = {
  close() {
    sequelize.close();
  },
  async sync() {
    await sequelize.sync({
      force: true,
    });
    return "DONE";
  },
  async run(sql, opts = {}) {
    return sequelize.query(sql, opts);
  },
  async query(sql) {
    return sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
  },
};

return {
  DB,
  User,
  //rest of models
}

```