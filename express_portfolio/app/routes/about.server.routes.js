/* File name: about.server.routes.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that configures a route for the About page */
module.exports = function(app) {
    var about = require('../controllers/about.server.controller');
    app.get('/about', about.render);
};