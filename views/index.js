// elastic-mode/views/index.js

"use strict";

import { createApp } from '../vueApp';
import { createRenderer } from 'vue-server-renderer';

const router = require('express').Router();

router.get('', (req, res, next) => {
    const context = { url: req.url };
    const vueApp = createApp(context);
    
    const renderer = createRenderer({
        template: require('fs')
                  .readFileSync('./views/index.template.html', 'utf-8'),
        shouldPreload: true,
        shouldPrefetch: true,
    });
    renderer.renderToString(vueApp)
    .then( html => {
        res.end(html);
    })
    .catch( err => {
        res.status(500).end(`Internal Server Error ${err}`);
        return;
    });
});

module.exports = router;
