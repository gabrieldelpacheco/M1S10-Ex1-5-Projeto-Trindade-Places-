const { Router } = require('express');

const validateAuthToken = require('../middlewares/validate-auth-token');
const validateNewPlace = require('../middlewares/validate-new-places');

const createPlace = require('../controllers/places/createPlaces');
const findPlaces = require('../controllers/places/readPlace');
const deletePlace = require('../controllers/places/deletePlace');
const updatePlace = require('../controllers/places/updatePlace');

const placesRoutes = new Router()

//exercicio 3 semana rota post criada
placesRoutes.post('/places',validateAuthToken, validateNewPlace, createPlace);


//exercicio 4
placesRoutes.get('/places',validateAuthToken, findPlaces);

//exercicio 5 
placesRoutes.delete('/places/:id',validateAuthToken, deletePlace);

//exercicio 6 
placesRoutes.put('/places/:id', validateAuthToken, updatePlace);

module.exports = placesRoutes;