//Vue Axios: consume and display data from an API. A promise-based HTTP client

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

//when we use axios we do axios.get('url'). 

Vue.use(VueAxios, axios);