import Formulario from './components/formulario.js';
import HeaderFavorites from './components/header-favorites.js';

const { createApp, reactive } = Vue;

// * Estado compartido
const favorites = reactive({
  users: [],
  repos: [],
});

const actualizarFavoritos = (data, tipo) => {
  console.log('Guardar data en favoritos:', tipo);
  if (!favorites[tipo].find((u) => u.id === data.id)) {
    favorites[tipo].push(data);
    if (localStorage.getItem('BuscadorGitHub_Favorites')) {
      localStorage.setItem(
        'BuscadorGitHub_Favorites',
        JSON.stringify({ favorites: { users: favorites.users, repos: favorites.repos } })
      );
    }
  }
};

const app = createApp({
  components: {
    'header-favorites': HeaderFavorites,
    'formulario-buscador': Formulario,
  },
});

// Proveer funciones/estado a los componentes hijos
app.provide('guardarUsuario', actualizarFavoritos);
app.provide('guardarRepo', actualizarFavoritos);
app.provide('favorites', favorites);

// Montar la aplicación en el elemento con id 'app'
app.mount('#app');
