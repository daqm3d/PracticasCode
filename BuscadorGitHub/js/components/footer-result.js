import SectionUsers from './section-users.js';
import SectionRepos from './section-repos.js';

export default {
  /* props: {
    result: { type: Array, required: true },
    busqueda: { type: String, required: true },
    error: { type: String, required: true },
  }, */
  props: ['result', 'busqueda', 'error'],
  template: `<footer class="result">
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
  mounted() {
    const style = document.createElement('style');

    style.textContent = ``;
    document.head.appendChild(style);
  },
};
