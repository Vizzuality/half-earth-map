'use strict';

import Vue from 'vue';

import Actions from '../../actions';
import Store from '../../store';

import closeButton from '../../../images/close.svg';
import template from './template.html';
import './style.css';

export default Vue.extend({

  template,

  data() {
    return {
      modal: Store.state.modal,
      closeButton
    };
  },

  computed: {
    title() {
      return this.modal.title;
    },
    content() {
      return this.modal.content;
    },
    active() {
      return this.modal.active;
    }
  },

  methods: {
    closeModal(e) {
      if (e.target.classList.contains('modal-wrapper') ||
        e.target.classList.contains('ok-button') ||
        e.target.classList.contains('close-button')) {
        Actions.closeModal();
      }
    }
  }

});
