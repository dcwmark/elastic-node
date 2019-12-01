/* api_routes/index.js */

"use strict";

import bulkIndex from './bulkIndex';
import searchIndex from'./searchIndex';
import viewIndex from '../views';

module.exports = (app) => {
    const path = require('path');
    
    app.use('/api', bulkIndex);
    
    app.use('/search', searchIndex);
    
    app.use('/', viewIndex);
};
