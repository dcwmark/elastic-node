import Vue from 'vue';
import axios from 'Axios';

var app = new Vue({
    el: '#app',
    // declare the data for the component
    // (An array that houses the results and a query
    // that holds the current search string)
    data: {
        results: [],
        query: ''
    },
    // declare methods in this Vue component. here only one method which
    // performs the search is defined
    methods: {
        // make an axios request to the server with the current search query
        search: function() {
            axios.get("http://127.0.0.1:5000/search?q=" + this.query)
                .then(response => {
                    this.results = response.data;
                })
        }
    },
    // declare Vue watchers
    watch: {
        // watch for change in the query string and recall the search method
        query: function() {
            this.search();
        }
    }
});
