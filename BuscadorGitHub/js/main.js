import { category, userAPI } from './__api.js';
import FooterResult from './components/footer-result.js';
import HeaderFavorites from './components/header-favorites.js';

const { createApp, computed } = Vue;
/**
 * @param {string} params - El tipo de búsqueda ('users', 'repos', 'topics').
 * @param {string} search - El valor de búsqueda.
 * @param {string} result - El valor de respuesta de la búsqueda.
 * @param {string} error  - El valor de errores al generar la búsqueda.
 * @param {string} disabled - Valor de estatus del botón de búsqueda.
 */

const app = createApp({
  data() {
    const [params, busqueda, search, result, error, disabled] = ['', null, null, null, null, false];

    return {
      params,
      busqueda,
      search,
      result,
      error,
      disabled,
    };
  },
  methods: {
    async buscar() {
      this.disabled = true;
      this.result = null;
      this.error = null;
      this.busqueda = null;
      try {
        const resultado = await category(this.params, this.search);
        console.log(resultado);
        if (resultado.total_count === 0) {
          this.error = 'No se encontró resultados';
          return;
        }
        if (resultado.total_count > 300) {
          this.error = `Los Resultados son ${resultado.total_count}, especifique mejor los parámetros de búsqueda`;
        } else {
          let resData = [];
          if (this.params === 'users') {
            resData = await userAPI(resultado);
            this.busqueda = this.params;
          }
          if (this.params == 'repos') {
            resData = resultado;
            this.busqueda = this.params;
          }
          console.log(resData);
          this.result = resData;
        }
      } catch (error) {
        console.log(error);
        this.error = error.message || 'Ha ocurrido un error inesperado'; // Manejar el error
      } finally {
        this.disabled = false;
      }
    },
  },
  components: {
    'header-favorites': HeaderFavorites,
    'footer-result': FooterResult,
  },
});

// Montar la aplicación en el elemento con id 'app'
app.mount('#app');
