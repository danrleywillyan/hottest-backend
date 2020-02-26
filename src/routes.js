const express = require('express');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

// routes.get('/', (req, res) => {
//     // return res.json({ message:`${req.query.name}` + 'You Great!'});
//     return res.send('You crazy!');
//   });
  console.log("I am here");
  
  routes.post('/profile', ProfileController.store);
  // routes.post('/test', ProfileController.store)

  module.exports = routes;