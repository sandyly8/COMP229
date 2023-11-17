/* File name: contact.server.routes.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that configures a route for the Contact page */
module.exports = function(app) {
    var contact = require('../controllers/contact.server.controller');
    app.get('/contact', contact.render);
};