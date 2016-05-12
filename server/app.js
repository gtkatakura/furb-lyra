var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(process.env.PORT || 3412);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var gabriel = {
    id: 10,
    nomeCompleto: 'Gabriel Takashi Katakura',
    tipoSanguineo: 'B',
    fatorRh: true,
    rg: '128310248',
    cpf: '54746095663'
};

var alesson = {
    id: 20,
    nomeCompleto: 'Alesson Ricardo Bernardo',
    tipoSanguineo: 'O',
    fatorRh: false,
    rg: '128310248',
    cpf: '90888490640'
};

var ivan = {
    id: 30,
    nomeCompleto: 'Ivan Manoel da Silva Filho',
    tipoSanguineo: 'A',
    fatorRh: true,
    rg: '128310248',
    cpf: '93138168060'
};

var doadores = [
    { id: 1, paciente: gabriel },
    { id: 2, paciente: alesson },
    { id: 3, paciente: ivan }
];

app.get('/doadores', function(req, res) {
    res.json(doadores);
});

app.get('/doadores/:id', function(req, res) {
    var doador = doadores.find(el => el.id == req.params.id);
    res.json(doador);
});

app.post('/doadores', function(req, res) {
    var doador = req.body;
    doador.id = doadores[doadores.length - 1].id + 1;
    doadores.push(doador);
    res.json(true);
});

app.put('/doadores/:id', function(req, res) {
    var doador = req.body;
    var doadorAtual = doadores.find(el => el.id == doador.id);
    Object.assign(doadorAtual, doador);
    res.json(true);
});

app.delete('/doadores/:id', function(req, res) {
    var index = doadores.indexOf(req.params.id);
    doadores.splice(index, 1);
    res.json(true);
});


var receptores = [
    { id: 1, paciente: gabriel },
    { id: 2, paciente: alesson },
    { id: 3, paciente: ivan }
];

app.get('/receptores', function(req, res) {
    res.json(receptores);
});

app.get('/receptores/:id', function(req, res) {
    var receptor = receptores.find(el => el.id == req.params.id);
    res.json(receptor);
});

app.post('/receptores', function(req, res) {
    var receptor = req.body;
    receptor.id = receptores[receptores.length - 1].id + 1;
    receptores.push(receptor);
    res.json(true);
});

app.put('/receptores/:id', function(req, res) {
    var receptor = req.body;
    var receptorAtual = receptores.find(el => el.id == receptor.id);
    Object.assign(receptorAtual, receptor);
    res.json(true);
});

app.delete('/receptores/:id', function(req, res) {
    var index = receptores.indexOf(req.params.id);
    receptores.splice(index, 1);
    res.json(true);
});

var medicos = [
    {
        id: 1,
        nomeCompleto: 'Joyce Martins',
        rg: '123456',
        cpf: '848.874.462-50',
        habilitacao: 1234586
    },
    
    {
        id: 2,
        nomeCompleto: 'Matheus Carvalho Viana',
        rg: '123456',
        cpf: '240.877.335-05',
        habilitacao: 9284842
    }
];

app.get('/medicos', function(req, res) {
    res.json(medicos);
});

app.get('/medicos/:id', function(req, res) {
    var medico = medicos.find(el => el.id == req.params.id);
    res.json(medico);
});

app.post('/medicos', function(req, res) {
    var medico = req.body;
    medico.id = medicos[medicos.length - 1].id + 1;
    medicos.push(medico);
    res.json(true);
});

app.put('/medicos/:id', function(req, res) {
    var medico = req.body;
    var medicoAtual = medicos.find(el => el.id == medico.id);
    Object.assign(medicoAtual, medico);
    res.json(true);
});

app.delete('/medicos/:id', function(req, res) {
    var index = medicos.indexOf(req.params.id);
    medicos.splice(index, 1);
    res.json(true);
});

var hemocentros = [
    {
        id: 1,
        nome: 'Hemosc Blumenau',
        descricao: 'Centro de hematologia',
        telefone: '9999-9999',
        rua: 'Rua Theodoro Holtrup, 40',
        bairro: 'Vila Nova, Blumenau',
        cidade: 'Blumenau',
        estado: 'SC',
        cep: '89035-300' 
    },
    
    {
        id: 2,
        nome: 'Hemosc Florianópolis',
        descricao: '',
        telefone: '88015-240',
        rua: 'Av. Prof Othon Gama DEça, 756',
        bairro: 'Centro',
        cidade: 'Florianópolis',
        estado: 'SC',
        cep: '89035-300' 
    }
   
];

app.get('/hemocentros', function(req, res) {
    res.json(hemocentros);
});

app.get('/hemocentros/:id', function(req, res) {
    var hemocentro = hemocentros.find(el => el.id == req.params.id);
    res.json(hemocentro);
});

app.post('/hemocentros', function(req, res) {
    var hemocentro = req.body;
    hemocentro.id = hemocentros[hemocentros.length - 1].id + 1;
    hemocentros.push(hemocentro);
    res.json(true);
});

app.put('/hemocentros/:id', function(req, res) {
    var hemocentro = req.body;
    var hemocentroAtual = hemocentros.find(el => el.id == hemocentro.id);
    Object.assign(hemocentroAtual, hemocentro);
    res.json(true);
});

app.delete('/hemocentros/:id', function(req, res) {
    var index = hemocentros.indexOf(req.params.id);
    hemocentros.splice(index, 1);
    res.json(true);
});


var agendamentosDoacao = [
    {
        id: 1,
        doador: doadores[0], // Gabriel
        hemocentro: hemocentros[0], // 'Hemosc Blumenau
        receptor: receptores[1], // Alesson
        dataHora: Date.now(),
        cancelado: false,
    },
    {
        id: 1,
        doador: doadores[1], // Alesson
        hemocentro: hemocentros[1], // 'Hemosc Florianópolis'
        receptor: receptores[2], // Ivan
        dataHora: Date.now(),
        cancelado: true
    }
];

app.get('/agendamentosDoacao', function(req, res) {
    res.json(agendamentosDoacao);
});

app.get('/agendamentosDoacao/:id', function(req, res) {
    var agendamentoDoacao = agendamentosDoacao.find(el => el.id == req.params.id);
    res.json(agendamentoDoacao);
});

app.post('/agendamentosDoacao', function(req, res) {
    var agendamentoDoacao = req.body;
    agendamentoDoacao.id = agendamentosDoacao[agendamentosDoacao.length - 1].id + 1;
    agendamentosDoacao.push(agendamentoDoacao);
    res.json(true);
});

app.put('/agendamentosDoacao/:id', function(req, res) {
    var agendamentoDoacao = req.body;
    var agendamentoDoacaoAtual = agendamentosDoacao.find(el => el.id == agendamentoDoacao.id);
    Object.assign(agendamentoDoacaoAtual, agendamentoDoacao);
    res.json(true);
});

app.delete('/agendamentosDoacao/:id', function(req, res) {
    var index = agendamentosDoacao.indexOf(req.params.id);
    agendamentosDoacao.splice(index, 1);
    res.json(true);
});

app.post('/agendamentosDoacao/:id/cancel', function(req, res) {
    var agendamentoDoacao = agendamentosDoacao.find(el => el.id == req.params.id);
    agendamentoDoacao.cancelado = true;
    res.json(true);
});

var questionarios = [
    {
        id: 1,
        titulo: 'Primeiro Questionario',
        questoes: [
            {
                id: 1,
                descricao: 'Questao 1'
            },
            {
                id: 2,
                descricao: 'Questao 2'
            }
        ]
    },
    {
        id: 2,
        titulo: 'Segundo Questionario',
        questoes: [
            {
                id: 3,
                descricao: 'Questao 3'
            }
        ]
    },
    {
        id: 2,
        titulo: 'Terceiro Questionario',
        questoes: []
    }
];

app.get('/questionarios', function(req, res) {
    res.json(questionarios);
});

app.get('/questionarios/:id', function(req, res) {
    var questionario = questionarios.find(el => el.id == req.params.id);
    res.json(questionario);
});

app.post('/questionarios', function(req, res) {
    var questionario = req.body;
    questionario.id = questionarios[questionarios.length - 1].id + 1;
    questionarios.push(questionario);
    res.json(true);
});

app.put('/questionarios/:id', function(req, res) {
    var questionario = req.body;
    var questionarioAtual = questionarios.find(el => el.id == questionario.id);
    Object.assign(questionarioAtual, questionario);
    res.json(true);
});

app.delete('/questionarios/:id', function(req, res) {
    var index = questionarios.indexOf(req.params.id);
    questionarios.splice(index, 1);
    res.json(true);
});
