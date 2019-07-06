/* api_routes/index.js */

"use strict";

module.exports = (app) => {
    let tutorialsRoutes = require('./tutorials');
    tutorialsRoutes(app);
};
