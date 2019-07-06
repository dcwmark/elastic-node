// verify.js

const elasticsearch = require('elasticsearch');

const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

const indices = () => {
    return esClient.cat.indices({v: true})
    .then(console.log)
    .catch(err => console.error(`Error connecting to the es client: ${err}`));
};

module.exports = verify = () => {
    console.log(`elasticsearch indices information:`);
    indices();
};
