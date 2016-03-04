'use strict';

import Vue from 'vue';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  props: {
    name: {
      type: String,
      required: true
    },
    model: {
      type: Boolean,
      required: true
    }
  },

  computed: {

    id() {
      return this.name.toLowerCase().replace(/(\s|:|\.|;|,)/g, '-');
    }

  }

});
