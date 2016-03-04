'use strict';

import Vue from 'vue';

import Store from '../../store';
import LayerControl from '../layer-control';

import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  components: {
    'layer-control': LayerControl
  }

});
