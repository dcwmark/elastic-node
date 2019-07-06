// server.js

"use strict";

require("babel-register");

const constants = require('./constants/');

/**
 * Elasticsearch Setup 
**/
( () => {
    const ELASTIC_SEARCH_HOST = constants.ELASTIC_SEARCH_HOST;
    const ELASTIC_SEARCH_PORT = constants.ELASTIC_SEARCH_PORT;

    // require the Elasticsearch library
    const elasticsearch = require('elasticsearch');
    
    // instantial an Elasticsearch client
    const esClient = new elasticsearch.Client({
     hosts: [
         `${ELASTIC_SEARCH_HOST}${ELASTIC_SEARCH_PORT}`
     ]
    });
    
    //ping esClient
    esClient.ping({ requestTimeout: 30000 }, (error) => {
        if ( error ) {
            console.error(`elasticsearch cluster is down! ${error}`);
        } else {
            console.log('elasticsearch is ok');
        }
    });
    //elasticsearch is ok
})();

/**
 * Express Setup 
**/
( () => {
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const path = require('path');
    const port = process.env.PORT || 5000;
    
    // set path to serve static files
    app.use(express.static(path.join(__dirname, 'public')));
    
    // enable CORS
    app.use( (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, GET, POST, DELETE, OPTIONS'
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    /* api routes registrar */
    const apiRoutes = require('./api_routes');
    apiRoutes(app);
    /* -------------------- */
    
    app.use( (req, res) => {
        res.status(404).send({ url: req.originalUrl + ' not found' })
    });
    
    app.listen(port);

    console.log('RESTful API server started on: ' + port);
})();

