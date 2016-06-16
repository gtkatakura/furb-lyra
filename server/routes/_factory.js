const factory = (controllerName, repository) => ({
  index(req, res) {
    repository.all().then(models => res.json(models));
  },
  find(req, res) {
    repository.find(req.params.id).then(model => res.json(model));
  },
  create(req, res) {
    const model = req.body;
    repository.save(model)
      .then(() => res.json(true))
      .catch(() => res.json(false));
  },
  update(req, res) {
    const model = req.body;
    repository.update(model)
      .then(() => res.json(true))
      .catch(() => res.json(false));
  },
  destroy(req, res) {
    repository.remove(req.params.id)
      .then(() => res.json(true))
      .catch(() => res.json(false));
  },
});

module.exports = factory;
