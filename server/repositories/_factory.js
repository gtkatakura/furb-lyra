const db = require('./_db');

const factory = (tableName, fields) => {
  const columnList = fields.join(', ');
  const dataValues = fields.map(field => `:${field}`).join(', ');
  const updateList = fields.map(field => `${field} = :${field}`).join(', ');

  return {
    all() {
      return db.execute(`SELECT * FROM ${tableName}`);
    },
    find(id) {
      return db.execute(`SELECT * FROM ${tableName} WHERE id = :id`, { id }).then(rows => rows[0]);
    },
    save(model) {
      return db.execute(`INSERT INTO ${tableName} (${columnList}) VALUES (${dataValues})`, model);
    },
    update(model) {
      return db.execute(`UPDATE ${tableName} SET ${updateList} WHERE id = :id`, model);
    },
    remove(id) {
      return db.execute(`DELETE FROM ${tableName} WHERE id = :id`, { id });
    },
  };
};

module.exports = factory;
