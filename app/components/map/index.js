'use strict';

import Vue from 'vue';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  ready() {
    /* Need to use setTimeout: https://github.com/vuejs/vue/issues/2421 */
    this.createMap();
  },

  methods: {

    createMap() {
      this.map = L.map(this.$el, {
        zoom: 4,
        center: [0, 0],
        zoomControl: false
      });

      L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      L.control.zoom({ position: 'bottomright' }).addTo(this.map);
    }

  }

});
