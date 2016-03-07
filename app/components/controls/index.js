'use strict';

import Vue from 'vue';

import Actions from '../../actions';
import utils from '../../utils';

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
  },

  methods: {
    onSearch(value) {
      utils.$get(`https://places.nlp.nokia.com/places/v1/discover/search/?q=${value}&app_id=KuYppsdXZznpffJsKT24&app_code=A7tBPacePg9Mj_zghvKt9Q&Accept-Language=en-US&at=0,0`, data => {
        if (data.results && data.results.items && data.results.items.length) {
          const info = data.results.items[0];
          Actions.setMapCenter(info.position);
          Actions.setMapBBox(info.bbox);
        }
      });
    }
  }

});
