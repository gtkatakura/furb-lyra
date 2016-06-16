const factory = require('./_factory');

const questaoRepository = require('./questao');

const repository = factory('questionario', ['titulo']);

module.exports = {
  all() {
    return repository.all().then(questionarios => {
      return Promise.all(questionarios.map(questionario => {
        return questaoRepository.where({ idQuestionario: questionario.id }).then(questoes => {
          questionario.questoes = questoes;
          return questionario;
        });
      }));
    });
  },
  find(id) {
    return repository.find(id).then(questionario => {
      return questaoRepository.where({ idQuestionario: questionario.id }).then(questoes => {
        questionario.questoes = questoes;
        return questionario;
      });
    });
  },
  save(questionario) {
    return repository.save(questionario)
      .then(() => questionario.questoes.map(questao => {
        questao.idQuestionario = questionario.id;
        return questaoRepository.save(questao);
      }));
  },
  update(questionario) {
    return questionario.questoes.map(questao => {
      questao.idQuestionario = questionario.id;
      return questaoRepository.update(questao);
    });
  },
  remove(id) {
    return questaoRepository.remove({ idQuestionario: id })
      .then(() => repository.remove(id));
  },
  count() {
    return repository.count();
  },
};
