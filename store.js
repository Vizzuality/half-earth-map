'use strict';

import L from 'leaflet/dist/leaflet';

import utils from './utils';

export default {

  state: {

    global: {
      loading: 0
    },

    map: {
      map: null,
      center: [0, 0],
      bbox: null
    },

    modal: {
      title: 'Test',
      content: '',
      active: false
    },

    layers: [
      {
        name: 'Protected Areas',
        zIndex: 5,
        attributions: {
          title: 'Protected Areas',
          content: 'IUCN and UNEP-WCMC (2015), The World Database on Protected Areas (WDPA) [On-line], Cambridge, UK: UNEP-WCMC. Available at: <a href="http://www.protectedplanet.net" target="_blank">www.protectedplanet.net</a>.'
        },
        categories: [
          {color: '#3E7BB6', border: '#5CA2D1', opacity: 0.6, name: 'Protected Area'}
        ],
        active: false,
        url: '',
        tileLayer: null,
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
        zIndex: 3,
        attributions: {
          title: 'Eco-Regions',
          content: 'Battistella, L., Temperley, W., Bastin, L., Bertzky, B., Martinez-Lopez, J., Dubois, G. (2015)<br/>Map of protection levels for the terrestrial and marine ecoregions of the world as of August 2014.<br/>© European Union, 2015. Reproduction is authorised provided the source is acknowledged.'
        },
        categories: [
          {color: '#007154', border: '#584554', opacity: 0.5, name: 'Tropical & subtropical Moist Broadleaf forest'},
          {color: '#bff7e9', border: '#584554', opacity: 0.5, name: 'Tropical & subtropical dry broadleaf forest'},
          {color: '#01e0a7', border: '#584554', opacity: 0.5, name: 'Tropical & subtropical coniferous forest'},
          {color: '#01a97d', border: '#584554', opacity: 0.5, name: 'Temperate broadleaf & mixed forests'},
          {color: '#67cfa4', border: '#584554', opacity: 0.5, name: 'Temperate conifers forests'},
          {color: '#458a6d', border: '#584554', opacity: 0.5, name: 'Boreal forests/taiga'},
          {color: '#59b5a8', border: '#584554', opacity: 0.5, name: 'Tropical & subtropical grasslands, savannas, & shrublands'},
          {color: '#d0eae1', border: '#584554', opacity: 0.5, name: 'Temperate Grasslands, Savannas & shrublands'},
          {color: '#2ee9ff', border: '#584554', opacity: 0.5, name: 'Flooded grasslands & Savannas'},
          {color: '#4390d2', border: '#584554', opacity: 0.5, name: 'Montane grasslands & shrublands'},
          {color: '#097a89', border: '#584554', opacity: 0.5, name: 'Tundra'},
          {color: '#584554', border: '#584554', opacity: 0.5, name: 'Mediterranean Forests, woodlands & scrub'},
          {color: '#d2f7a8', border: '#584554', opacity: 0.5, name: 'Deserts & xeric shrublands'},
          {color: '#5860cc', border: '#584554', opacity: 0.5, name: 'Mangroves'},
          {color: '#eeeeee', border: '#584554', opacity: 0.5, name: 'Marine'}
        ],
        active: '',
        url: '',
        tileLayer: null,
        request: {
          layers: [
            {
              'user_name': 'simbiotica',
              'type': 'cartodb',
              'options': {
                'sql': 'SELECT * FROM ecoregions_marine_terrestrial',
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
            zIndex: 3,
            colorScale: ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#4a1486'],
            unit: 'Species / Km²',
            extent: [0.5, 821],
            attributions: {
              title: 'Animalia',
              content: 'Species data sourced from JRC Digital Observatory for Protected Areas (<a href="http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/" target="_blank">http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/</a>) calculated by overlaying the range polygons from the IUCN Redlist. The IUCN Red List of Threatened Species provides taxonomic, conservation status, and distribution information on taxa that are facing a high risk of global extinction (see more at <a href="http://www.iucnredlist.org/" target="_blank">http://www.iucnredlist.org/</a>).'
            },
            url: '',
            tileLayer: null,
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM animalia',
                    'cartocss': '#animalia{polygon-opacity: 1; line-width: 0.1; line-opacity: 1;} #animalia [ dn = 7] {polygon-fill: #4a1486;line-color: #4a1486;} #animalia [ dn = 6] {polygon-fill: #6a51a3; line-color: #6a51a3;} #animalia [ dn = 5] {polygon-fill: #807dba; line-color: #807dba;} #animalia [ dn = 4] {polygon-fill: #9e9ac8; line-color: #9e9ac8;} #animalia [ dn = 3] {polygon-fill: #bcbddc; line-color: #bcbddc;} #animalia [ dn = 2] {polygon-fill: #dadaeb;line-color:  #dadaeb;} #animalia [ dn = 1] {polygon-fill: #f2f0f7; line-color: #f2f0f7;}',
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
            nested: true,
            zIndex: 3,
            colorScale: ['#F1E6F1', '#D8BBD8', '#CCA5CC', '#C08FC0', '#B379B3', '#A05AA0', '#8A4E8A'],
            unit: 'Species / Km²',
            extent: [0.5, 358],
            attributions: {
              title: 'Birds',
              content: 'Species data sourced from JRC Digital Observatory for Protected Areas (<a href="http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/" target="_blank">http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/</a>) calculated by overlaying the range polygons from the IUCN Redlist. The IUCN Red List of Threatened Species provides taxonomic, conservation status, and distribution information on taxa that are facing a high risk of global extinction (see more at <a href="http://www.iucnredlist.org/" target="_blank">http://www.iucnredlist.org/</a>).'
            },
            url: '',
            tileLayer: null,
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM aves',
                    'cartocss': '#aves{polygon-opacity: 1; line-width: 0.1; line-opacity: 0.8;} #aves [ dn = 7] {polygon-fill: #8A4E8A; line-color: #8A4E8A;} #aves [ dn = 6] {polygon-fill: #A05AA0; line-color: #A05AA0;} #aves [ dn = 5] {polygon-fill: #B379B3; line-color: #B379B3;} #aves [ dn = 4] {polygon-fill: #C08FC0; line-color: #C08FC0;} #aves [ dn = 3] {polygon-fill: #CCA5CC; line-color: #CCA5CC;} #aves [ dn = 2] {polygon-fill: #D8BBD8; line-color: #D8BBD8;} #aves [ dn = 1] {polygon-fill: #F1E6F1; line-color: #F1E6F1;}',
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
            nested: true,
            zIndex: 3,
            colorScale: ['#feedde', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#8c2d04'],
            unit: 'Species / Km²',
            extent: [0.5, 47],
            attributions: {
              title: 'Reptilians',
              content: 'Species data sourced from JRC Digital Observatory for Protected Areas (<a href="http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/" target="_blank">http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/</a>) calculated by overlaying the range polygons from the IUCN Redlist. The IUCN Red List of Threatened Species provides taxonomic, conservation status, and distribution information on taxa that are facing a high risk of global extinction (see more at <a href="http://www.iucnredlist.org/" target="_blank">http://www.iucnredlist.org/</a>).'
            },
            url: '',
            tileLayer: null,
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM reptilia',
                    'cartocss': '#amphibia{polygon-opacity: 1; line-width: 0; line-opacity: 1;} #amphibia [ dn <= 7] {polygon-fill: #8c2d04; line-color: #8c2d04;} #amphibia [ dn <= 6] {polygon-fill: #d94801; line-color: #d94801;} #amphibia [ dn <= 5] {polygon-fill: #f16913; line-color: #f16913;} #amphibia [ dn <= 4] {polygon-fill: #fd8d3c; line-color: #fd8d3c;} #amphibia [ dn <= 3] {polygon-fill: #fdae6b; line-color: #fdae6b;} #amphibia [ dn <= 2] {polygon-fill: #fdd0a2; line-color: #fdd0a2;} #amphibia [ dn <= 1] {polygon-fill: #feedde; line-color: #feedde;}',
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
            nested: true,
            zIndex: 3,
            colorScale: ['#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#B10026'],
            unit: 'Species / Km²',
            extent: [0.5, 156],
            attributions: {
              title: 'Mammals',
              content: 'Species data sourced from JRC Digital Observatory for Protected Areas (<a href="http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/" target="_blank">http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/</a>) calculated by overlaying the range polygons from the IUCN Redlist. The IUCN Red List of Threatened Species provides taxonomic, conservation status, and distribution information on taxa that are facing a high risk of global extinction (see more at <a href="http://www.iucnredlist.org/" target="_blank">http://www.iucnredlist.org/</a>).'
            },
            url: '',
            tileLayer: null,
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM mammalia',
                    'cartocss': '#mammalia{polygon-opacity: 1; line-width: 0.001; line-opacity: 1;}#mammalia [ dn = 7] {polygon-fill: #B10026; line-color: #B10026;} #mammalia [ dn = 6] {polygon-fill: #E31A1C; line-color: #E31A1C;} #mammalia [ dn = 5] { polygon-fill: #FC4E2A; line-color: #FC4E2A;} #mammalia [ dn = 4] {polygon-fill: #FD8D3C; line-color: #FD8D3C;} #mammalia [ dn = 3] {polygon-fill: #FEB24C; line-color: #FEB24C;} #mammalia [ dn = 2] {polygon-fill: #FED976; line-color: #FED976;} #mammalia [ dn = 1] {polygon-fill: #FFFFB2; line-color: #FFFFB2;}',
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
            nested: true,
            zIndex: 3,
            colorScale: ['#edf8fb', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#005824'],
            unit: 'Species / Km²',
            extent: [0.5, 89],
            attributions: {
              title: 'Amphibians',
              content: 'Species data sourced from JRC Digital Observatory for Protected Areas (<a href="http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/" target="_blank">http://dopa-explorer.jrc.ec.europa.eu/dopa_explorer/</a>) calculated by overlaying the range polygons from the IUCN Redlist. The IUCN Red List of Threatened Species provides taxonomic, conservation status, and distribution information on taxa that are facing a high risk of global extinction (see more at <a href="http://www.iucnredlist.org/" target="_blank">http://www.iucnredlist.org/</a>).'
            },
            url: '',
            tileLayer: null,
            request: {
              layers: [
                {
                  'user_name': 'simbiotica',
                  'type': 'cartodb',
                  'options': {
                    'sql': 'SELECT * FROM amphibia',
                    'cartocss': '#amphibia{polygon-fill: #EDF8FB; polygon-opacity: 1; line-color: #FFF; line-width: 0; line-opacity: 1;} #amphibia [ dn = 7] {polygon-fill: #005824;} #amphibia [ dn = 6] {polygon-fill: #238b45;} #amphibia [ dn = 5] {polygon-fill: #41ae76;} #amphibia [ dn = 4] {polygon-fill: #66c2a4;} #amphibia [ dn = 3] {polygon-fill: #99d8c9;} #amphibia [ dn = 2] {polygon-fill: #ccece6;} #amphibia [ dn = 1] {polygon-fill: #edf8fb;}',
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
    ]

  },

  mutations: {

    /* Update the url field of the layer with the url of the tiles and add the
     * Leaflet tileLayer object on it */
    LOAD_TILE_LAYER(store, layer) {
      utils.$post('https://simbiotica.cartodb.com/api/v1/map/',
        layer.request, (function (data) {
          /* Private variable to prevent consecutive zooms to increment the
           * store's loading variable more than once because the decrement will
           * only be just triggered once */
          let loading = false;

          return data => {
            layer.url = `https://simbiotica.cartodb.com/api/v1/map/${data.layergroupid}/{z}/{x}/{y}.png32`;
            layer.tileLayer = L.tileLayer(layer.url, {zIndex: layer.zIndex})
              .on('loading', () => {
                if (!loading) {
                  loading = true;
                  store.mutations.INCREMENT_LOADING(store);
                }
              })
              .on('load', () => {
                store.mutations.DECREMENT_LOADING(store);
                loading = false;
              });
          };
        })());
    },

    /* Toggle the active state of the passed layer. If layer is a sub-layer,
     * then the parent should be provided in order to toggle its active state
     * (which is shared with the sub-layers). */
    TOGGLE_LAYER(store, layer, parentLayer) {
      /* We're updating a parent layer (which has sub-layers) */
      if (layer.options) {
        const oldActiveLayerName = layer.active;
        layer.active = oldActiveLayerName === layer.name ? '' : layer.name;

        /* Case of a radio button, we eventually need to update the visibility
         * of two layers */
        if (!oldActiveLayerName) {
          this.SET_LAYER_VISIBILITY(store, layer, true);
        } else if (oldActiveLayerName === layer.name) {
          this.SET_LAYER_VISIBILITY(store, layer, false);
        } else {
          this.SET_LAYER_VISIBILITY(store, layer, true);
          for (let i = 0, j = layer.options.length; i < j; i++) {
            if (layer.options[i].name === oldActiveLayerName) {
              this.SET_LAYER_VISIBILITY(store, layer.options[i], false);
              break;
            }
          }
        }

      /* We're updating a sub-layer */
      } else if (!layer.hasOwnProperty('active') && parentLayer) {
        const oldActiveLayerName = parentLayer.active;
        parentLayer.active = oldActiveLayerName === layer.name ? '' :
          layer.name;

        /* Case of a radio button, we eventually need to update the visibility
         * of two layers */
        if (!oldActiveLayerName) {
          this.SET_LAYER_VISIBILITY(store, layer, true);
        } else if (oldActiveLayerName === layer.name) {
          this.SET_LAYER_VISIBILITY(store, layer, false);
        } else {
          this.SET_LAYER_VISIBILITY(store, layer, true);
          if (oldActiveLayerName === parentLayer.name) {
            this.SET_LAYER_VISIBILITY(store, parentLayer, false);
          } else {
            for (let i = 0, j = parentLayer.options.length; i < j; i++) {
              if (parentLayer.options[i].name === oldActiveLayerName) {
                this.SET_LAYER_VISIBILITY(store, parentLayer.options[i], false);
                break;
              }
            }
          }
        }

      /* We're updating a standard layer */
      } else {
        layer.active = !layer.active;
        this.SET_LAYER_VISIBILITY(store, layer, layer.active);
      }
    },

    /* Update the visibility of the layer depending on the passed boolean */
    SET_LAYER_VISIBILITY(store, layer, isVisible) {
      if (layer.tileLayer && store.state.map.map) {
        if (!isVisible) {
          store.state.map.map.removeLayer(layer.tileLayer);
        } else {
          layer.tileLayer.addTo(store.state.map.map);
        }
      }
    },

    /* Set the center of the map */
    SET_MAP_CENTER(store, center) {
      store.state.map.center = center;
    },

    /* Set the bounding box of the map */
    SET_MAP_BBOX(store, bbox) {
      store.state.map.bbox = bbox;
    },

    /* Save the map instance */
    REGISTER_MAP(store, map) {
      store.state.map.map = map;
    },

    /* Open the modal with the content of the layer */
    OPEN_MODAL(store, layer) {
      store.state.modal.title = layer.attributions.title;
      store.state.modal.content = layer.attributions.content;
      store.state.modal.active = true;
    },

    /* Close the modal */
    CLOSE_MODAL(store) {
      store.state.modal.active = false;
    },

    INCREMENT_LOADING(store) {
      store.state.global.loading++;
    },

    DECREMENT_LOADING(store) {
      if (store.state.global.loading > 0) {
        store.state.global.loading--;
      }
    }

  }

};
