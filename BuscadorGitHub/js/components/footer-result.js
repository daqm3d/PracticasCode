import SectionUsers from './section-users.js';
import SectionRepos from './section-repos.js';

export default {
  /* props: {
    result: { type: Array, required: true },
    busqueda: { type: String, required: true },
    error: { type: String, required: true },
  }, */
  props: ['result', 'busqueda', 'error'],
  template: `
  <footer id="result" class="result">
    <template  v-for="res in result" >
      <section-users v-if="busqueda === 'users'" :res="res" :busqueda="busqueda" ></section-users>
      <section-repos v-if="busqueda === 'repos'" :res="res" :busqueda="busqueda" ></section-repos>
    </template>
    <output v-if="error"> {{ error }} </output>
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
};
