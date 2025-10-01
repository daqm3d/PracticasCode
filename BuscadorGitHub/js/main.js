import Formulario from './components/formulario.js';
import HeaderFavorites from './components/header-favorites.js';

const { createApp } = Vue;

const app = createApp({
  components: {
    'header-favorites': HeaderFavorites,
    'formulario-buscador': Formulario,
  },
});

// Montar la aplicación en el elemento con id 'app'
app.mount('#app');
