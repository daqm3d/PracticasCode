import { category } from '../__api.js';
import footerResult from './footer-result.js';
/**
 * @param {string} params - El tipo de búsqueda ('users', 'repos', 'topics').
 * @param {string} search - El valor de búsqueda.
 * @param {object} result - El valor de respuesta de la búsqueda.
 * @param {string} error  - El valor de errores al generar la búsqueda.
 * @param {boolean} disabled - Valor de estatus del botón de búsqueda.
 * @param {integer} total - Valor total de resultados encontrados.
 */
export default {
  data() {
    const data = {
      params: '',
      busqueda: null,
      search: null,
      result: null,
      error: null,
      disabled: false,
      total: null,
    };

    return {
      data,
    };
  },
  template: `
  <article id="formulario" class="formulario">
    <div class="content">
      <form @submit.prevent="buscar">
        <header>
          <h1 class="content_title">Buscador GitHub</h1>
        </header>
        <section class="buscador">
          <div class="form-group">
            <input
              v-model="data.search"
              type="search"
              id="buscar"
              name="buscar"
              required
              placeholder=""
            />
            <label for="buscar">Frase a Buscar </label>
          </div>
          <div class="form-group">
            <select v-model="data.params" name="tipo" id="tipo" required placeholder="">
              <option value="" selected></option>
              <option value="users">Por Usuario</option>
              <option value="repos">Por Repositorios</option>
              <option value="topics">Por Etiquetas (separados con espacios)</option>
            </select>
            <label for="tipo">Tipo de Búsqueda </label>
          </div>
          <input :disabled="data.disabled" type="submit" value="Buscar" />
        </section>
        <footer-result :result="data"></footer-result>
      </form>
    </div>
  </article>`,
  components: {
    'footer-result': footerResult,
  },
  beforeMount() {
    if (!document.querySelector('link[href="css/components/formulario.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/components/formulario.css';
      document.head.appendChild(link);
    }
  },
  methods: {
    async buscar() {
      this.data.disabled = true;
      this.data.result = null;
      this.data.error = null;
      this.data.busqueda = null;
      this.data.total = null;
      try {
        const resultado = await category(this.data.params, this.data.search);
        console.log(resultado);
        if (!resultado || resultado.length === 0) {
          this.data.error = 'No se encontró resultados';
          return;
        }
        this.data.busqueda = this.data.params;
        this.data.result = resultado;
        this.data.total = resultado.length;
      } catch (error) {
        console.log(error);
        this.data.error = error.message || 'Ha ocurrido un error inesperado'; // Manejar el error
      } finally {
        this.data.disabled = false;
      }
    },
  },
};
