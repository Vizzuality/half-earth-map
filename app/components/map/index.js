'use strict';

import Vue from 'vue';
import L from 'leaflet/dist/leaflet';

import Actions from '../../actions';
import Store from '../../store';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  data() {
    return {
      mapConfig: Store.state.map
    };
  },

  computed: {
    layers() {
      return Store.state.layers;
    },
    center() {
      return this.mapConfig.center;
    },
    bbox() {
      return this.mapConfig.bbox;
    }
  },

  watch: {
    bbox() {
      this.updateBounds();
    }
  },

  ready() {
    this.createMap();
    this.loadTiles();
  },

  methods: {

    createMap() {
      this.map = L.map(this.$el, {
        zoom: location.search.search('embed') === 1 ? 3 : 4,
        center: this.center,
        maxZoom: 19,
        zoomControl: false,
        scrollWheelZoom: !(location.search.search('embed') === 1)
      });

      Actions.registerMap(this.map);

      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 19,
        zIndex: 1
      }).addTo(this.map);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZW93aWxzb25oYWxmZWFydGgiLCJhIjoiY2lsaHdncXZ0MDA2b3ZqbTRlZXB6MXJxMiJ9.OwV8SPidVX9BQdXdGQMAyg', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'eowilsonhalfearth.9d446e68',
        accessToken: 'pk.eyJ1IjoiZW93aWxzb25oYWxmZWFydGgiLCJhIjoiY2lsaHdncXZ0MDA2b3ZqbTRlZXB6MXJxMiJ9.OwV8SPidVX9BQdXdGQMAyg',
        zIndex: 10
      }).addTo(this.map);

      L.control.zoom({position: 'topright'}).addTo(this.map);
    },

    loadTiles() {
      const layers = this.layers;

      for (let i = 0, j = layers.length; i < j; i++) {
        const layer = layers[i];

        if (!layer.url && layer.request) {
          Actions.loadTileLayer(layer);
        }

        if (layer.options) {
          for (let k = 0, l = layer.options.length; k < l; k++) {
            const subLayer = layer.options[k];

            if (!subLayer.url && subLayer.request) {
              Actions.loadTileLayer(subLayer);
            }
          }
        }
      }
    },

    updateBounds() {
      if (this.bbox.length === 4) {
        this.map.fitBounds([
          [this.bbox[1], this.bbox[0]],
          [this.bbox[3], this.bbox[2]]
        ]);
      }
    }

  }

});
