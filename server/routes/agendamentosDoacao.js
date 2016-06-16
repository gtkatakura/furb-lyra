const factory = require('./_factory');
const repository = require('../repositories/agendamentoDoacao');

module.exports = Object.assign(factory('agendamentosDoacao', repository), {
  cancel(req, res, next) {
    repository.find(req.params.id).then(model => {
      model.cancelado = true;
      repository.update(model)
        .then(() => res.json(true))
        .catch((err) => {
          res.statusCode = 422;
          next(err);
        });
    });
  },
});
