'use strict';

import Vue from 'vue';

import './app.css';
import Map from './components/map';
import MapControls from './components/controls';

new Vue({

  el: '#app',

  components: {
    'map': Map,
    'map-controls': MapControls
  }

});
