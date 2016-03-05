import Store from './store';

export default {

  loadTileLayer(layer, map) {
    Store.mutations.LOAD_TILE_LAYER(layer, map);
  },

  toggleLayer(layer, parentLayer) {
    Store.mutations.TOGGLE_LAYER(layer, parentLayer);
  }

};
