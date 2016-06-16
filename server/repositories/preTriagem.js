const factory = require('./_factory');

const repository = factory('preTriagem', [
  'peso',
  'altura',
  'pressao_maxima',
  'pressao_minima',
  'temperatura',
  'pulso',
]);

module.exports = repository;
