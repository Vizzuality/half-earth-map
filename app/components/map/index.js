'use strict';

import Vue from 'vue';
import L from 'leaflet/dist/leaflet';

import Actions from '../../actions';
import Store from '../../store';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  computed: {
    layers() {
      return Store.state.layers;
    }
  },

  ready() {
    this.createMap();
    this.loadTiles();
  },

  methods: {

    createMap() {
      this.map = L.map(this.$el, {
        zoom: 4,
        center: [0, 0],
        maxZoom: 19,
        zoomControl: false
      });

      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(this.map);

      L.control.zoom({position: 'bottomright'}).addTo(this.map);
    },

    loadTiles() {
      const layers = this.layers;

      for (let i = 0, j = layers.length; i < j; i++) {
        const layer = layers[i];

        if (!layer.url && layer.request) {
          Actions.loadTileLayer(layer, this.map);
        }

        if (layer.options) {
          for (let k = 0, l = layer.options.length; k < l; k++) {
            const subLayer = layer.options[k];

            if (!subLayer.url && subLayer.request) {
              Actions.loadTileLayer(subLayer, this.map);
            }
          }
        }
      }
    }

  }

});
