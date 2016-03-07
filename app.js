'use strict';

import Vue from 'vue';

import './app.css';
import Map from './components/map';
import MapControls from './components/controls';
import Legend from './components/legend';
import Modal from './components/modal';

new Vue({

  el: '#app',

  components: {
    'map': Map,
    'map-controls': MapControls,
    'legend': Legend,
    'modal': Modal
  }

});
