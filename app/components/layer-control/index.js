'use strict';

import Vue from 'vue';

import Store from '../../store';
import Actions from '../../actions';
import Checkbox from '../checkbox';
import RadioButton from '../radio-button';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  computed: {
    layers() {
      return Store.state.layers;
    }
  },

  components: {
    checkbox: Checkbox,
    radioButton: RadioButton
  },

  methods: {
    toggleLayer(layer, parentLayer) {
      return function () {
        Actions.toggleLayer(layer, parentLayer);
      };
    }
  }

});
