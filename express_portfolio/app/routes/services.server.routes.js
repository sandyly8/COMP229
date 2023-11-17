/* File name: services.server.routes.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that configures a route for the Services page */
module.exports = function(app) {
    var services = require('../controllers/services.server.controller');
    app.get('/services', services.render);
};