// elastic-node/vueApp/app.js

"use strict";

/**
 * This is to avoid Stateful Singletons
 * 
 * When writing client-only code, we are used to the fact that our code will
 * be evaluated in a fresh context every time.
 * However, a Node.js server is a long-running process.
 * When our code is required into the process, it will be evaluated once and
 * stays in memory.
 * This means if you create a singleton object, it will be shared between every
 * incoming request.
 * We are creating a new root Vue instance for each request. 
**/

import Vue from 'vue';
//import App from '../views/main.vue';

module.exports = {
    createApp: (context) => {
        return new Vue({
            data: {
                url: context.urll,
            },
            render: h => h(app),
//            template: require('fs')
//                      .readFileSync('./views/main.vue', 'utf-8'),
        });
        return { app };
    },
};
