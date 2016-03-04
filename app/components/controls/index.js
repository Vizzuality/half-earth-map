'use strict';

import Vue from 'vue';

import LayerControl from '../layer-control';
import SearchBox from '../search-box';

import logo from '../../../images/half-earth_logo.svg';
import graph from '../../../images/protected-areas.jpg';
import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  data() {
    return {
      logo,
      graph
    };
  },

  components: {
    'layer-control': LayerControl,
    'search-box': SearchBox
  }

});
