'use strict';

import Vue from 'vue';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  data() {
    return {
      value: ''
    };
  },

  props: {
    placeholder: {
      type: String,
      required: false
    },
    callback: {
      type: Function,
      required: true
    }
  },

  methods: {
    submit() {
      this.callback(this.value);
    }
  }

});
