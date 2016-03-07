'use strict';

import Vue from 'vue';

import Actions from '../../actions';
import Store from '../../store';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  computed: {
    layers() {
      return Store.state.layers;
    },
    activeLayers() {
      const res = [];

      for (let i = 0, j = this.layers.length; i < j; i++) {
        const layer = this.layers[i];

        if (!layer.options && layer.active ||
          layer.options && layer.active === layer.name) {
          res.push(layer);
        }

        if (layer.options && layer.active !== layer.name) {
          for (let k = 0, l = layer.options.length; k < l; k++) {
            if (layer.options[k].name === layer.active) {
              res.push(layer.options[k]);
              break;
            }
          }
        }
      }

      return res;
    }
  },

  methods: {

    openModal(layer) {
      Actions.openModal(layer);
    }

  }

});
