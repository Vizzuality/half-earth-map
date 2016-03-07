import Store from './store';

export default {

  loadTileLayer(layer, map) {
    Store.mutations.LOAD_TILE_LAYER(layer, map);
  },

  toggleLayer(layer, parentLayer) {
    Store.mutations.TOGGLE_LAYER(layer, parentLayer);
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
  }

};
