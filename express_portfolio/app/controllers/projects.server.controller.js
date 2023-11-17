/* File name: projects.server.controller.js
Student name: Sandy Ly 
Date: October 2, 2023 */

/* function that renders the Projects page */
exports.render = function(req, res) {
    res.render('projects', {
        title: 'Projects',
        browserTitle: 'Projects'
    })
};