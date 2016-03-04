'use strict';

export default {

  state: {

    layers: [
      {
        name: 'Protected Areas',
        active: false
      },
      {
        name: 'Eco-Regions',
        active: false
      },
      {
        name: 'Animalia',
        active: '',
        options: [
          { name: 'Birds'      },
          { name: 'Reptilians' },
          { name: 'Mammals'    }
        ]
      }
    ]

  }

};
