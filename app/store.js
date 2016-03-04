'use strict';

import L from 'leaflet/dist/leaflet';

import utils from './utils';

export default {

  state: {

    layers: [
      {
        name: 'Protected Areas',
        active: false,
        url: '',
        request: {
          layers: [
            {
              'user_name': 'simbiotica',
              'type': 'cartodb',
              'options': {
                'sql': 'SELECT * FROM wdpa_protected_areas',
                'cartocss': '#wdpa_protected_areas{polygon-opacity: 0.2; line-color: #5CA2D1; polygon-fill:#3E7BB6; line-width: 0.5; line-opacity: 1; polygon-pattern-file: url(http://com.cartodb.users-assets.production.s3.amazonaws.com/patterns/dots_2px_med.png); polygon-pattern-opacity: 0.2;}',
                'cartocss_version': '2.3.0',
                'geom_column': 'the_geom_webmercator',
                'geom_type': 'geometry'
              }
            }
          ]
        }
      },
      {
        name: 'Eco-Regions',
        active: false,
        url: '',
        request: {
          layers: [
            {
              'user_name': 'simbiotica',
              'type': 'cartodb',
              'options': {
                'sql': 'SELECT * from wwf_terr_ecos',
                'cartocss': '#wwf_terr_ecos { polygon-opacity: 0.5; line-color: #584554; line-width: 0.5; line-opacity: 0.5;} #wwf_terr_ecos[biome=1] { polygon-fill: #007154;} #wwf_terr_ecos[biome=2] { polygon-fill: #bff7e9;} #wwf_terr_ecos[biome=3] { polygon-fill: #01e0a7;} #wwf_terr_ecos[biome=4] { polygon-fill: #01a97d;} #wwf_terr_ecos[biome=5] { polygon-fill: #67cfa4;} #wwf_terr_ecos[biome=6] { polygon-fill: #458a6d;} #wwf_terr_ecos[biome=7] { polygon-fill: #59b5a8;} #wwf_terr_ecos[biome=8] { polygon-fill: #d0eae1;} #wwf_terr_ecos[biome=9] { polygon-fill: #2ee9ff;}#wwf_terr_ecos[biome=10] { polygon-fill: #4390d2;} #wwf_terr_ecos[biome=11] { polygon-fill: #097a89;} #wwf_terr_ecos[biome=12] { polygon-fill: #584554;}#wwf_terr_ecos[biome=13] { polygon-fill: #d2f7a8;} #wwf_terr_ecos[biome=14] { polygon-fill: #5860cc;} #wwf_terr_ecos[biome=98] { polygon-fill: #eeeeee;} #wwf_terr_ecos[biome=99] { polygon-fill: #a0a0a0;}',
                'cartocss_version': '2.3.0',
                'geom_column': 'the_geom_webmercator',
                'geom_type': 'geometry'
              }
            }
          ]
        },
        options: [
          {
            name: 'Animalia',
            active: '',
            url: '',
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM animalia',
                    'cartocss': '#animalia{polygon-opacity: 0.8; line-width: 0.1; line-opacity: 1;} #animalia [ dn = 7] {polygon-fill: #4a1486;line-color: #4a1486;} #animalia [ dn = 6] {polygon-fill: #6a51a3; line-color: #6a51a3;} #animalia [ dn = 5] {polygon-fill: #807dba; line-color: #807dba;} #animalia [ dn = 4] {polygon-fill: #9e9ac8; line-color: #9e9ac8;} #animalia [ dn = 3] {polygon-fill: #bcbddc; line-color: #bcbddc;} #animalia [ dn = 2] {polygon-fill: #dadaeb;line-color:  #dadaeb;} #animalia [ dn = 1] {polygon-fill: #f2f0f7; line-color: #f2f0f7;}',
                    'cartocss_version': '2.3.0',
                    'geom_column': 'the_geom_webmercator',
                    'geom_type': 'geometry'
                  }
                }
              ]
            }
          },
          {
            name: 'Birds',
            url: '',
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM aves',
                    'cartocss': '#aves{polygon-opacity: 0.8; line-width: 0.1; line-opacity: 0.8;} #aves [ dn = 7] {polygon-fill: #8A4E8A; line-color: #8A4E8A;} #aves [ dn = 6] {polygon-fill: #A05AA0; line-color: #A05AA0;} #aves [ dn = 5] {polygon-fill: #B379B3; line-color: #B379B3;} #aves [ dn = 4] {polygon-fill: #C08FC0; line-color: #C08FC0;} #aves [ dn = 3] {polygon-fill: #CCA5CC; line-color: #CCA5CC;} #aves [ dn = 2] {polygon-fill: #D8BBD8; line-color: #D8BBD8;} #aves [ dn = 1] {polygon-fill: #F1E6F1; line-color: #F1E6F1;}',
                    'cartocss_version': '2.3.0',
                    'geom_column': 'the_geom_webmercator',
                    'geom_type': 'geometry'
                  }
                }
              ]
            }
          },
          {
            name: 'Reptilians',
            url: '',
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM reptilia',
                    'cartocss': '#amphibia{polygon-opacity: 0.8; line-width: 0; line-opacity: 1;} #amphibia [ dn <= 7] {polygon-fill: #8c2d04; line-color: #8c2d04;} #amphibia [ dn <= 6] {polygon-fill: #d94801; line-color: #d94801;} #amphibia [ dn <= 5] {polygon-fill: #f16913; line-color: #f16913;} #amphibia [ dn <= 4] {polygon-fill: #fd8d3c; line-color: #fd8d3c;} #amphibia [ dn <= 3] {polygon-fill: #fdae6b; line-color: #fdae6b;} #amphibia [ dn <= 2] {polygon-fill: #fdd0a2; line-color: #fdd0a2;} #amphibia [ dn <= 1] {polygon-fill: #feedde; line-color: #feedde;}',
                    'cartocss_version': '2.3.0',
                    'geom_column': 'the_geom_webmercator',
                    'geom_type': 'geometry'
                  }
                }
              ]
            }
          },
          {
            name: 'Mammals',
            url: '',
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM mammalia',
                    'cartocss': '#mammalia{polygon-opacity: 0.8; line-width: 0.001; line-opacity: 0.8;}#mammalia [ dn = 7] {polygon-fill: #B10026; line-color: #B10026;} #mammalia [ dn = 6] {polygon-fill: #E31A1C; line-color: #E31A1C;} #mammalia [ dn = 5] { polygon-fill: #FC4E2A; line-color: #FC4E2A;} #mammalia [ dn = 4] {polygon-fill: #FD8D3C; line-color: #FD8D3C;} #mammalia [ dn = 3] {polygon-fill: #FEB24C; line-color: #FEB24C;} #mammalia [ dn = 2] {polygon-fill: #FED976; line-color: #FED976;}',
                    'cartocss_version': '2.3.0',
                    'geom_column': 'the_geom_webmercator',
                    'geom_type': 'geometry'
                  }
                }
              ]
            }
          },
          {
            name: 'Amphibians',
            url: '',
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM amphibia',
                    'cartocss': '#amphibia{polygon-fill: #EDF8FB; polygon-opacity: 0.8; line-color: #FFF; line-width: 0; line-opacity: 1;} #amphibia [ dn = 7] {polygon-fill: #005824;} #amphibia [ dn = 6] {polygon-fill: #238b45;} #amphibia [ dn = 5] {polygon-fill: #41ae76;} #amphibia [ dn = 4] {polygon-fill: #66c2a4;} #amphibia [ dn = 3] {polygon-fill: #99d8c9;} #amphibia [ dn = 2] {polygon-fill: #ccece6;} #amphibia [ dn = 1] {polygon-fill: #edf8fb;}',
                    'cartocss_version': '2.3.0',
                    'geom_column': 'the_geom_webmercator',
                    'geom_type': 'geometry'
                  }
                }
              ]
            }
          }
        ]
      }
    ],

    tileLayers: {}

  },

  /* Fill the url attribute of the layer with the layer's tiles url */
  getLayerTileUrL(layer, map) {
    utils.$post('https://simbiotica.cartodb.com/api/v1/map/',
      layer.request, data => {
        layer.url = `https://simbiotica.cartodb.com/api/v1/map/${data.layergroupid}/{z}/{x}/{y}.png32`;
        this.state.tileLayers[layer.name] = L.tileLayer(layer.url, {opacity: 0}).addTo(map);
      });
  },

  updateLayers(layers) {
    for (let i = 0, j = layers.length; i < j; i++) {
      const layer = this._searchLayer(layers[i].name, this.state.layers);

      if (layer) {
        layer.active = layers[i].active;
      }

      if (layers[i].options) {
        for (let k = 0, l = layers[i].options.length; k < l; k++) {
          const subLayer = this._searchLayer(layers[i].options[k].name, this.state.layers);

          if (subLayer) {
            subLayer.active = layers[i].options[k].active;
          }
        }
      }
    }
  },

  _searchLayer(layerName, layers) {
    for (let i = 0, j = layers.length; i < j; i++) {
      const layer = layers[i];

      if (layer.name === layerName) {
        return layer;
      }

      if (layer.options) {
        const subLayer = this._searchLayer(layerName, layer.options);

        if (subLayer) {
          return subLayer;
        }
      }
    }

    return null;
  }

};
