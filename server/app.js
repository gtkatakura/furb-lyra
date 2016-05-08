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

var doadores = [
    {
        id: 1,
        nomeCompleto: 'Gabriel Takashi Katakura',
        tipoSanguineo: 'B',
        fatorRh: true,
        rg: '128310248',
        cpf: '54746095663'
    },
    {
        id: 2,
        nomeCompleto: 'Alesson Ricardo Bernardo',
        tipoSanguineo: 'O',
        fatorRh: false,
        rg: '128310248',
        cpf: '90888490640'
    },
    {
        id: 3,
        nomeCompleto: 'Ivan Manoel da Silva Filho',
        tipoSanguineo: 'A',
        fatorRh: true,
        rg: '128310248',
        cpf: '93138168060'
    }
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
    {
        id: 1,
        nomeCompleto: 'Gabriel Takashi Katakura',
        tipoSanguineo: 'B',
        fatorRh: true,
        rg: '128310248',
        cpf: '54746095663'
    },
    {
        id: 2,
        nomeCompleto: 'Alesson Ricardo Bernardo',
        tipoSanguineo: 'O',
        fatorRh: false,
        rg: '128310248',
        cpf: '90888490640'
    },
    {
        id: 3,
        nomeCompleto: 'Ivan Manoel da Silva Filho',
        tipoSanguineo: 'A',
        fatorRh: true,
        rg: '128310248',
        cpf: '93138168060'
    }
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