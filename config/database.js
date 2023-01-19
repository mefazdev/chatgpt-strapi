module.exports = ({ env }) => ({
  connection: {
    client: "postgres",

    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_FILENAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});

// filename: path.join(__dirname, '..', env('DATABASE_FILENAME', 'sample_7w4v')),

// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     host: env('DATABASE_HOST', 'dpg-cf41is6n6mps0qnajs80-a.singapore-postgres.render.com'),
//     port: env.int('DATABASE_PORT', 5432),
//     user: env('DATABASE_USERNAME', 'admin'),
//     password: env('DATABASE_PASSWORD', 'PXeWrNOqXRQxVMgBYnS7Fp3Z4yvN0uj9'),

//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', 'sample_7w4v')),
//     },
//     useNullAsDefault: true,
//   },
// });

//DATABASE_FILENAME == .tmp/data.db

// postgres://admin:PXeWrNOqXRQxVMgBYnS7Fp3Z4yvN0uj9@dpg-cf41is6n6mps0qnajs80-a.singapore-postgres.render.com/sample_7w4v
