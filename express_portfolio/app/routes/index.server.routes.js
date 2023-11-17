/* File name: index.server.routes.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that configures a route for the Home/index page */
module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};