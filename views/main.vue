<!-- elastic-node/views/main.vue -->

<div>
    <div class="container" id="app">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h1>Search Cities around the world</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-3">
                <form action="" class="search-form">
                    <div class="form-group has-feedback">
                        <label for="search" class="sr-only">Search</label>
                        <input type="text"
                               class="form-control"
                               name="search"
                               id="search"
                               placeholder="search"
                               v-model="query" />
                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <span class="col-md-3" v-for="result in results">
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <!-- display the city name and country  -->
                        {{ result._source.name }}, {{ result._source.country }} 
                    </div>
                    <div class="panel-body">
                    <!-- display the latitude and longitude of the city  -->
                        <p>lat:{{ result._source.lat }}, long: {{ result._source.lng }}.</p>
                    </div>
                </div>
            </span>
        </div>
    </div>
</div>
