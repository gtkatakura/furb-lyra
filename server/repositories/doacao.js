const factory = require('./_factory');
const agendamentoDoacaoRepository = require('./agendamentoDoacao');
const preTriagemRepository = require('./preTriagem');
const coletaRepository = require('./coleta');

const repository = factory('doacao', ['id_agendamento_doacao', 'id_pre_triagem', 'id_coleta']);

module.exports = {
  all() {
    return repository.all().then(doacoes => {
      return Promise.all(doacoes.map(doacao => {
        return Promise.all([
          agendamentoDoacaoRepository.find(doacao.idAgendamentoDoacao),
          preTriagemRepository.find(doacao.idPreTriagem),
          doacao.idColeta ? coletaRepository.find(doacao.idColeta) : Promise.resolve(null),
        ]).then(dependentes => {
          Object.assign(doacao, {
            agendamentoDoacao: dependentes[0],
            preTriagem: dependentes[1],
            coleta: dependentes[2],
          });

          return doacao;
        });
      }));
    });
  },
  find(id) {
    return repository.find(id).then(doacao => {
      return Promise.all([
        agendamentoDoacaoRepository.find(doacao.idAgendamentoDoacao),
        preTriagemRepository.find(doacao.idPreTriagem),
        doacao.idColeta ? coletaRepository.find(doacao.idColeta) : Promise.resolve(null),
      ]).then(dependentes => {
        Object.assign(doacao, {
          agendamentoDoacao: dependentes[0],
          preTriagem: dependentes[1],
          coleta: dependentes[2],
        });

        return doacao;
      });
    });
  },
  save(doacao) {
    return Promise.all([
      preTriagemRepository.save(doacao.preTriagem),
      coletaRepository.save(doacao.coleta),
    ]).then(() => repository.save(doacao));
  },
  update(doacao) {
    return Promise.all([
      preTriagemRepository.update(doacao.preTriagem),
      coletaRepository.update(doacao.coleta),
    ]);
  },
  remove(id) {
    return repository.find(id)
      .then(doacao => {
        return repository.remove(id).then(() => Promise.all([
          preTriagemRepository.remove(doacao.idPreTriagem),
          coletaRepository.remove(doacao.idColeta),
        ]));
      });
  },
  count() {
    return repository.count();
  },
};
