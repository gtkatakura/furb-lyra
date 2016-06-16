CREATE TABLE Paciente (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nome_completo VARCHAR(50) NOT NULL,
  tipo_sanguineo INTEGER NOT NULL,
  fator_rh BOOLEAN NOT NULL,
  rg VARCHAR(12) NOT NULL,
  cpf CHAR(12) NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE Receptor (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_paciente INTEGER NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(id_paciente) REFERENCES Paciente(id)
);

CREATE TABLE Usuario (
  id INTEGER NOT NULL AUTO_INCREMENT,
  login VARCHAR(28) NOT NULL,
  seha VARCHAR(20) NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE Doador (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_paciente INTEGER NOT NULL,
  id_usuario INTEGER NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(id_usuario) REFERENCES Usuario(id),
  FOREIGN KEY(id_paciente) REFERENCES Paciente(id)
);

CREATE TABLE Medico (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_usuario INTEGER NOT NULL,
  habilitacao INTEGER NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE Hemocentro (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  ativo BOOLEAN,

  PRIMARY KEY(id)
);

CREATE TABLE AgendamentoDoacao (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_doador INTEGER NOT NULL,
  id_hemocentro INTEGER NOT NULL,
  id_receptor INTEGER NOT NULL,
  data_hora DATETIME NOT NULL,
  cancelado BOOLEAN,

  PRIMARY KEY(id),

  FOREIGN KEY(id_doador) REFERENCES Doador(id),
  FOREIGN KEY(id_hemocentro) REFERENCES Hemocentro(id),
  FOREIGN KEY(id_receptor) REFERENCES Receptor(id)
);

CREATE TABLE PreTriagem (
  id INTEGER NOT NULL AUTO_INCREMENT,
  peso DECIMAL NOT NULL,
  altura DECIMAL NOT NULL,
  pressao_maxima INTEGER NOT NULL,
  pressao_minima INTEGER NOT NULL,
  temperatura DECIMAL NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE Coleta (
  id INTEGER NOT NULL AUTO_INCREMENT,
  volume DECIMAL NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE Hospital (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  ativo BOOLEAN,

  PRIMARY KEY(id)
);

CREATE TABLE TransferenciaColeta (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_hospital INTEGER NOT NULL,
  id_coleta INTEGER NOT NULL,

  PRIMARY KEY(id),

  FOREIGN KEY(id_hospital) REFERENCES Hospital(id),
  FOREIGN KEY(id_coleta) REFERENCES Coleta(id)
);

CREATE TABLE Doacao (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_agendamento_doacao INTEGER NOT NULL,
  id_pre_triagem INTEGER NOT NULL,
  id_coleta INTEGER NOT NULL,

  PRIMARY KEY(id),

  FOREIGN KEY(id_agendamento_doacao) REFERENCES AgendamentoDoacao(id),
  FOREIGN KEY(id_pre_triagem) REFERENCES PreTriagem(id),
  FOREIGN KEY(id_coleta) REFERENCES Coleta(id)
);

CREATE TABLE Questionario(
  id INTEGER NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(40),

  PRIMARY KEY(id)
);

CREATE TABLE Questao (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_questionario INTEGER NOT NULL,
  descricao VARCHAR(80),

  PRIMARY KEY(id),

  FOREIGN KEY(id_questionario) REFERENCES Questionario(id)
);

CREATE TABLE QuestionarioDoacao(
    id INTEGER NOT NULL AUTO_INCREMENT,
    id_questionario INTEGER NOT NULL,
    id_doacao INTEGER NOT NULL,
    id_medico INTEGER NOT NULL,

    PRIMARY KEY(id),

    FOREIGN KEY(id_questionario) REFERENCES Questionario(id),
    FOREIGN KEY(id_doacao) REFERENCES Doacao(id),
    FOREIGN KEY(id_medico) REFERENCES Medico(id)
);

CREATE TABLE QuestionarioDoacaoResposta (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_questionario_doacao INTEGER NOT NULL,
  id_questao INTEGER NOT NULL,
  resposta BOOLEAN,

  PRIMARY KEY(id),

  FOREIGN KEY(id_questionario_doacao) REFERENCES QuestionarioDoacao(id),
  FOREIGN KEY(id_questao) REFERENCES Questao(id)
);
