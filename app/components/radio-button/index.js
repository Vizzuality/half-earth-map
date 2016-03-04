'use strict';

import Vue from 'vue';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  data() {
    return {
      hasChanged: false
    };
  },

  props: {
    name: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    labelClass: {
      type: String
    }
  },

  computed: {

    id() {
      return this.name.toLowerCase().replace(/(\s|:|\.|;|,)/g, '-');
    }

  },

  watch: {

    model(a, b) {
      this.hasChanged = a !== b;
    }

  },

  methods: {

    onClick() {
      if (!this.hasChanged) {
        this.model = '';
      }
      this.hasChanged = false;
    }

  }

});
