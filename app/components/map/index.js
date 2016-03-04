'use strict';

import Vue from 'vue';

import Store from '../../store';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  data() {
    return {
      layers: Store.state.layers,
      tileLayers: Store.state.tileLayers
    };
  },

  watch: {
    layers: {
      handler() {
        this.updateLayers();
      },
      deep: true
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
          Store.getLayerTileUrL(layer, this.map);
        }

        if (layer.options) {
          for (let k = 0, l = layer.options.length; k < l; k++) {
            const subLayer = layer.options[k];

            if (!subLayer.url && subLayer.request) {
              Store.getLayerTileUrL(subLayer, this.map);
            }
          }
        }
      }
    },

    updateLayers() {
      for (let i = 0, j = this.layers.length; i < j; i++) {
        const layer = this.layers[i];

        if (this.tileLayers[layer.name]) {
          let active = layer.options ? layer.name === layer.active : layer.active;

          if (this.tileLayers[layer.name]) {
            this.tileLayers[layer.name].setOpacity(active ? 1 : 0);
          }

          if (layer.options) {
            for (let k = 0, l = layer.options.length; k < l; k++) {
              const subLayer = layer.options[k];
              active = subLayer.name === layer.active;

              if (this.tileLayers[subLayer.name]) {
                this.tileLayers[subLayer.name].setOpacity(active ? 1 : 0);
              }
            }
          }
        }
      }
    }

  }

});
