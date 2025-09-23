import { category, userAPI } from '../__api.js';
import footerResult from './footer-result.js';
/**
 * @param {string} params - El tipo de búsqueda ('users', 'repos', 'topics').
 * @param {string} search - El valor de búsqueda.
 * @param {string} result - El valor de respuesta de la búsqueda.
 * @param {string} error  - El valor de errores al generar la búsqueda.
 * @param {string} disabled - Valor de estatus del botón de búsqueda.
 */
export default {
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
  template: `
  <article class="formulario">
    <div class="content">
      <form @submit.prevent="buscar">
        <header>
          <h1 class="content_title">Buscador GitHub</h1>
        </header>
        <section class="buscador">
          <div class="form-group">
            <input
              v-model="search"
              type="search"
              id="buscar"
              name="buscar"
              required
              placeholder=""
            />
            <label for="buscar">Frase a Buscar </label>
          </div>
          <div class="form-group">
            <select v-model="params" name="tipo" id="tipo" required placeholder="">
              <option value="" selected></option>
              <option value="users">Por Usuario</option>
              <option value="repos">Por Repositorios</option>
              <option value="topics">Por Etiquetas (separados con espacios)</option>
            </select>
            <label for="tipo">Tipo de Búsqueda </label>
          </div>
          <input :disabled type="submit" value="Buscar" />
        </section>
        <footer-result :result="result" :busqueda="busqueda" :error="error"></footer-result>
    </div>
  </article>`,
  components: {
    'footer-result': footerResult,
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
  beforeMount() {
    if (!document.querySelector('link[href="css/components/formulario.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/components/formulario.css';
      document.head.appendChild(link);
    }
  },
};
