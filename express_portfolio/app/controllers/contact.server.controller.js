/* File name: contact.server.controller.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that renders the Contact page */
exports.render = function(req, res) {
    res.render('contact', {
        title: 'Contact',
        browserTitle: 'Contact'
    })
};