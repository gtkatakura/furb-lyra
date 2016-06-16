const factory = (controllerName, repository) => ({
  index(req, res) {
    res.json(repository.all());
  },
  find(req, res) {
    const model = repository.find(req.params.id);
    res.json(model);
  },
  create(req, res) {
    const model = req.body;
    repository.save(model);
    res.json(true);
  },
  update(req, res) {
    const model = req.body;
    repository.update(model);
    res.json(true);
  },
  destroy(req, res) {
    repository.remove(req.params.id);
    res.json(true);
  },
});

module.exports = factory;
