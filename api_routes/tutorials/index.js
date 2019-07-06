// api_routes/tutorials/index.js

"use strict";

import { fileToJSON } from '../../fileParsers/';
import { bulkIndex } from '../../es/';

module.exports = (app) => {
    app.get('/api/es/bulkindex/:file/:index/:type', (req, res, next) => {
        const { file, index, type } = req.params;
        console.log(JSON.stringify(req.params));
        console.log(`file:: ${file}`);
        console.log(`index:: ${index}`);
        console.log(`type:: ${type}`);
        
        const fileName = `${file}.json`;
        
        fileToJSON(fileName)
        .then( result => {
            console.log('fileToJSON result:: ' + JSON.stringify(result));
            return bulkIndex(res, index, type, result);
        })
        .catch( reject => {
            res.json(reject);
        });
    });
};
