'use strict';

import Vue from 'vue';

import Store from './store';

import './app.css';
import Map from './components/map';
import MapControls from './components/controls';
import Legend from './components/legend';
import Modal from './components/modal';
import Spinner from './components/spinner';

new Vue({

  el: '#app',

  components: {
    'map': Map,
    'map-controls': MapControls,
    'legend': Legend,
    'modal': Modal,
    'spinner': Spinner
  },

  data() {
    return {
      global: Store.state.global
    };
  }

});
