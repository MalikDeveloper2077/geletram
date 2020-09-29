import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
  theme: {
    primary: '#043669',
  },
});

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1976D2',
      },
      dark: {
        primary: '#125394',
      },
    },
  },
});
