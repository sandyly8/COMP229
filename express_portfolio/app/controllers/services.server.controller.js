/* File name: services.server.controller.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that renders the Services page */
exports.render = function(req, res) {
    res.render('services', {
        title: 'Services',
        browserTitle: 'Services'
    })
};