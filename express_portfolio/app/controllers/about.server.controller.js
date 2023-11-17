/* File name: about.server.controller.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that renders the About page */
exports.render = function(req, res) {
    res.render('about', {
        title: 'About',
        browserTitle: 'About'
    })
};