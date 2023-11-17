/* File name: projects.server.routes.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that configures a route for the Projects page */
module.exports = function(app) {
    var projects = require('../controllers/projects.server.controller');
    app.get('/projects', projects.render);
};