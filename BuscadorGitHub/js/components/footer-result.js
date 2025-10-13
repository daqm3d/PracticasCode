import SectionUsers from './section-users.js';
import SectionRepos from './section-repos.js';
import { category } from '../__api.js';

export default {
  data() {
    const [page, disabled] = [2, false];

    return {
      page,
      disabled,
    };
  },
  props: ['result'],
  template: `
  <footer id="result">
    <template  v-for="res in result.result" :key="res.id">
      <section-users v-if="result.busqueda === 'users'" :res="res" :busqueda="result.busqueda" ></section-users>
      <section-repos v-if="result.busqueda === 'repos' || result.busqueda === 'topics'" :res="res" :busqueda="result.busqueda" ></section-repos>
    </template>
    <button :disabled="disabled" v-if="result.total > 19 && !result.error" @click="buscarMas">Cargar Más {{ result.busqueda }}</button>
    <output v-if="result.error"> {{ result.error }} </output>
  </footer>`,
  components: {
    'section-users': SectionUsers,
    'section-repos': SectionRepos,
  },
  beforeMount() {
    if (!document.querySelector('link[href="css/components/footer-result.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/components/footer-result.css';
      document.head.appendChild(link);
    }
  },
  methods: {
    async buscarMas() {
      this.disabled = true;
      try {
        const resultado = await category(this.result.params, this.result.search, this.page);
        console.log(resultado);
        if (resultado.length === 0) {
          this.result.error = 'No se encontró resultados';
          this.result.total = 0;
          return;
        }
        this.page++;
        this.result.result.push(...resultado);
        console.log(this.result.result);
      } catch (error) {
        console.log(error);
        this.result.error = error.message || 'Ha ocurrido un error inesperado'; // Manejar el error
      } finally {
        this.disabled = false;
      }
    },
  },
};
