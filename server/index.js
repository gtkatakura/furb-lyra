const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.listen(process.env.PORT || 3412);

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

fs.readdir(`${__dirname}/routes`, (err, files) => {
  const isPublicFile = file => !file.startsWith('_');

  const reFileNameWithoutExtension = /(.*)\.[^.]+$/;
  const getFileNameWithoutExtension = file => file.replace(reFileNameWithoutExtension, '$1');

  const routesName = files.filter(isPublicFile).map(getFileNameWithoutExtension);

  routesName.forEach(routeName => {
    const route = require(`./routes/${routeName}`);

    app.get(`/${routeName}`, route.index);
    app.get(`/${routeName}/:id`, route.find);
    app.post(`/${routeName}`, route.create);
    app.put(`/${routeName}/:id`, route.update);
    app.delete(`/${routeName}/:id`, route.destroy);
  });
});
