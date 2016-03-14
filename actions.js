import Store from './store';

export default {

  registerMap(map) {
    Store.mutations.REGISTER_MAP(Store, map);
  },

  loadTileLayer(layer) {
    Store.mutations.LOAD_TILE_LAYER(Store, layer);
  },

  toggleLayer(layer, parentLayer) {
    Store.mutations.TOGGLE_LAYER(Store, layer, parentLayer);
  },

  setMapCenter(center) {
    if (center && center.length === 2) {
      Store.mutations.SET_MAP_CENTER(Store, center);
    }
  },

  setMapBBox(bbox) {
    if (bbox && bbox.length === 4) {
      Store.mutations.SET_MAP_BBOX(Store, bbox);
    }
  },

  openModal(layer) {
    Store.mutations.OPEN_MODAL(Store, layer);
  },

  closeModal() {
    Store.mutations.CLOSE_MODAL(Store);
  }

};
