const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'furb_lyra',
});

connection.config.queryFormat = function (query, values) {
  if (!values) {
    return query;
  }

  return query.replace(/:(\w+)/g, (txt, key) => {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }

    return txt;
  });
};

const db = {
  execute(sql, params) {
    params = params || {};
    return new Promise((resolve, reject) => {
      const options = {
        sql,
        typeCast(field, next) {
          if (field.type === 'TINY' && field.length === 1) {
            return field.string() === '1';
          }

          return next();
        },
      };

      connection.query(options, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = db;
