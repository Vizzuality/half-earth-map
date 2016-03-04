'use strict';

import Vue from 'vue';

import Store from '../../store';
import Checkbox from '../checkbox';
import RadioButton from '../radio-button';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  data() {
    return {
      layers: [
        {
          name: 'Protected Areas',
          active: false
        },
        {
          name: 'Eco-Regions',
          active: '',
          options: [
            {
              name: 'Animalia'
            },
            {
              name: 'Birds'
            },
            {
              name: 'Reptilians'
            },
            {
              name: 'Mammals'
            },
            {
              name: 'Amphibians'
            }
          ]
        }
      ]
    };
  },

  watch: {
    layers: {
      handler() {
        Store.updateLayers(this.layers);
      },
      deep: true
    }
  },

  components: {
    checkbox: Checkbox,
    radioButton: RadioButton
  }

});
