// data.js
const constants = require('./constants/');

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

// ping esClient
esClient.ping({ requestTimeout: 30000 }, ( error ) => {
    if ( error ) {
        console.error(`elasticsearch cluster is down! ${error}`);
    } else {
        console.log('elasticsearch is ok');
    }
});
//elasticsearch is ok

// create a new index called scotch.io-tutorial.
esClient.indices.delete({
    index: 'scotch.io-tutorial'
}, (error, response, status) => {
    if ( error ) {
        console.log(`elasticsearch delete index error: ${error}`);
    } else {
        console.log(`elasticsearch index deleted: ${JSON.stringify(response)}`);
    }
});
//elasticsearch index deleted: {"acknowledged":true}

esClient.indices.create({
    index: 'scotch.io-tutorial'
}, (error, response, status) => {
    if ( error ) {
        console.log(`elasticsearch create index error: ${error}`);
    } else {
        console.log(`elasticsearch index created: ${JSON.stringify(response)}`);
    }
});
//elasticsearch index created: {
//    "acknowledged":true,
//    "shards_acknowledged":true,
//    "index":"scotch.io-tutorial"
//}
