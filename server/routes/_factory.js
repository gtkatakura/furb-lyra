const factory = (controllerName, repository) => ({
  index(req, res) {
    repository.all().then(models => res.json(models));
  },
  find(req, res) {
    repository.find(req.params.id).then(model => res.json(model));
  },
  create(req, res, next) {
    const model = req.body;
    repository.save(model)
      .then(() => res.json(true))
      .catch((err) => {
        res.statusCode = 422;
        next(err);
      });
  },
  update(req, res, next) {
    const model = req.body;
    repository.update(model)
      .then(() => res.json(true))
      .catch((err) => {
        res.statusCode = 422;
        next(err);
      });
  },
  destroy(req, res) {
    repository.remove(req.params.id)
      .then(() => res.json(true))
      .catch(() => res.json(false));
  },
  count(req, res) {
    if (!repository.count) {
      return 0;
    }

    repository.count().then(length => res.json(length));
  },
});

module.exports = factory;
