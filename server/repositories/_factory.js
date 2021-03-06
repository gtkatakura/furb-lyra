const db = require('./_db');

const underscore = value => {
  return value.replace(/(?:^|\.?)([A-Z])/g, (_, matched) => {
    return `_${matched.toLowerCase()}`;
  }).replace(/^_/, '');
};

const prepare = model => {
  return Object.keys(model).reduce((reduced, key) => {
    if (typeof model[key] === 'object' && model[key] !== null) {
      reduced[underscore(`id_${key}`)] = model[key].id;
    }

    reduced[underscore(key)] = model[key];
    return reduced;
  }, {});
};

const camelize = value => {
  return value.replace(/[-_](\w)/g, (_, matched) => {
    return matched ? matched.toUpperCase() : '';
  });
};

const reader = model => {
  if (Array.isArray(model)) {
    return model.map(reader);
  }

  return Object.keys(model).reduce((reduced, key) => {
    if (typeof model[key] === 'object') {
      reduced[camelize(`id_${key}`)] = model[key];
    }

    reduced[camelize(key)] = model[key];
    return reduced;
  }, {});
};

const factory = (tableName, fields) => {
  const columnList = fields.join(', ');
  const dataValues = fields.map(field => `:${field}`).join(', ');
  const updateList = fields.map(field => `${field} = :${field}`).join(', ');

  return {
    all() {
      return db.execute(`SELECT * FROM ${tableName}`).then(rows => reader(rows));
    },
    find(id) {
      return db.execute(`SELECT * FROM ${tableName} WHERE id = :id`, { id }).then(rows => reader(rows[0]));
    },
    save(model) {
      return db.execute(`INSERT INTO ${tableName} (${columnList}) VALUES (${dataValues})`, prepare(model))
        .then(result => {
          model.id = result.insertId;
          return model;
        });
    },
    update(model) {
      return db.execute(`UPDATE ${tableName} SET ${updateList} WHERE id = :id`, prepare(model));
    },
    remove(filter) {
      if (typeof filter !== 'object' || filter === null) {
        filter = { id: filter };
      }

      filter = prepare(filter);
      const whereList = Object.keys(filter).map(field => `${field} = :${field}`).join(' AND ');

      return db.execute(`DELETE FROM ${tableName} WHERE ${whereList}`, filter);
    },
    count() {
      return db.execute(`SELECT COUNT(1) AS count FROM ${tableName}`).then(rows => rows[0].count);
    },
    where(filter) {
      filter = prepare(filter);
      const whereList = Object.keys(filter).map(field => `${field} = :${field}`).join(' AND ');
      return db.execute(`SELECT * FROM ${tableName} WHERE ${whereList}`, filter).then(rows => reader(rows));
    },
  };
};

module.exports = factory;
