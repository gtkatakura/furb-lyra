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

var agendamentosDoacao = [
    {
        id: 1,
        doador: doadores[0], // Gabriel
        hemocentro: null,
        receptor: receptores[1], // Alesson
        dataHora: Date.now(),
        cancelado: false 
    },
    {
        id: 1,
        doador: doadores[1], // Alesson
        hemocentro: null,
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