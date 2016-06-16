const factory = require('./_factory');

const pacienteRepository = require('./paciente');

const repository = factory('receptor', ['id_paciente']);

module.exports = {
  all() {
    return repository.all().then(receptores => {
      return Promise.all(receptores.map(receptor => {
        return pacienteRepository.find(receptor.idPaciente).then(paciente => {
          receptor.paciente = paciente;
          return receptor;
        });
      }));
    });
  },
  find(id) {
    return repository.find(id).then(receptor => {
      return pacienteRepository.find(receptor.idPaciente).then(paciente => {
        receptor.paciente = paciente;
        return receptor;
      });
    });
  },
  save(receptor) {
    return pacienteRepository.save(receptor.paciente).then(() => {
      return repository.save(receptor);
    });
  },
  update(receptor) {
    return pacienteRepository.update(receptor.paciente);
  },
  remove(id) {
    return repository.find(id)
      .then(receptor => {
        return repository.remove(id).then(() => pacienteRepository.remove(receptor.idPaciente));
      });
  },
  count() {
    return repository.count();
  },
};
