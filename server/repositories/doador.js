const factory = require('./_factory');

const pacienteRepository = require('./paciente');

const repository = factory('doador', ['id_paciente']);

module.exports = {
  all() {
    return repository.all().then(doadores => {
      return Promise.all(doadores.map(doador => {
        return pacienteRepository.find(doador.idPaciente).then(paciente => {
          doador.paciente = paciente;
          return doador;
        });
      }));
    });
  },
  find(id) {
    return repository.find(id).then(doador => {
      return pacienteRepository.find(doador.idPaciente).then(paciente => {
        doador.paciente = paciente;
        return doador;
      });
    });
  },
  save(doador) {
    return pacienteRepository.save(doador.paciente).then(() => {
      return repository.save(doador);
    });
  },
  update(doador) {
    return pacienteRepository.update(doador.paciente);
  },
  remove(id) {
    return repository.find(id)
      .then(doador => {
        return repository.remove(id).then(() => pacienteRepository.remove(doador.idPaciente));
      });
  },
};
