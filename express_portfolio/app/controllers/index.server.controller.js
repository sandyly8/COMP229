/* File name: index.server.controller.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that renders the Home page */
exports.render = function(req, res) {
    res.render('index', {
        title: 'Home',
        browserTitle: 'Home'
    })
};