const factory = require('./_factory');

const doadorRepository = require('./doador');
const receptorRepository = require('./receptor');
const hemocentroRepository = require('./hemocentro');

const repository = factory('agendamentoDoacao', [
  'id_doador',
  'id_hemocentro',
  'id_receptor',
  'data_hora',
  'cancelado',
]);

module.exports = {
  all() {
    return repository.all().then(agendamentosDoacao => {
      return Promise.all(agendamentosDoacao.map(agendamentoDoacao => {
        return Promise.all([
          doadorRepository.find(agendamentoDoacao.idDoador),
          agendamentoDoacao.idReceptor ? receptorRepository.find(agendamentoDoacao.idReceptor) : Promise.resolve(null),
          hemocentroRepository.find(agendamentoDoacao.idHemocentro),
        ]).then(dependentes => {
          Object.assign(agendamentoDoacao, {
            doador: dependentes[0],
            receptor: dependentes[1],
            hemocentro: dependentes[2],
          });
          return agendamentoDoacao;
        });
      }));
    });
  },
  find(id) {
    return repository.find(id).then(agendamentoDoacao => {
      return Promise.all([
        doadorRepository.find(agendamentoDoacao.idDoador),
        agendamentoDoacao.idReceptor ? receptorRepository.find(agendamentoDoacao.idReceptor) : Promise.resolve(null),
        hemocentroRepository.find(agendamentoDoacao.idHemocentro),
      ]).then(dependentes => {
        Object.assign(agendamentoDoacao, {
          doador: dependentes[0],
          receptor: dependentes[1],
          hemocentro: dependentes[2],
        });
        return agendamentoDoacao;
      });
    });
  },
  save(agendamentoDoacao) {
    agendamentoDoacao.dataHora = new Date(agendamentoDoacao.dataHora);
    return repository.save(agendamentoDoacao);
  },
  update(agendamentoDoacao) {
    agendamentoDoacao.dataHora = new Date(agendamentoDoacao.dataHora);
    return repository.update(agendamentoDoacao);
  },
  remove(id) {
    return repository.remove(id);
  },
  count() {
    return repository.count();
  },
};
