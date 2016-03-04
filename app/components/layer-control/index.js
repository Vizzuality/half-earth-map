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
      layers: Store.state.layers,
      store: Store
    };
  },

  components: {
    checkbox: Checkbox,
    radioButton: RadioButton
  }

});
