const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.login);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.list);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.list);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.list);

module.exports = routes;
