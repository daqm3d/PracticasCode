import { fecha } from '../__api.js';
import Proyecto from '../icons/proyecto.js';
import Favorito from '../icons/favorito.js';
import Lenguaje from '../icons/lenguaje.js';
import Seguir from '../icons/seguir.js';
import Rama from '../icons/rama.js';
import Nota from '../icons/nota.js';
import User from '../icons/user.js';

export default {
  props: {
    res: {
      type: Object,
      required: true,
    },
    busqueda: {
      type: String,
      required: true,
    },
  },
  template: `
  <section id="repos" v-if="res && (busqueda==='repos' || busqueda==='topics')">
    <article>
      <header>
        <proyecto-icon :width="20" :height="20"></proyecto-icon>
        <a :href="res.html_url" target="_blank">
          <h2>{{ res.name }}</h2>
        </a>         
        <span v-if="res.visibility">
          {{ res.visibility }}
        </span>
      </header>
        <p v-if="res.description">{{ res.description }}</p>
        <ul>
          <li v-if="res.topics && res.topics.length">
            <strong>Topics: </strong>
            <span v-for="(topic, index) in res.topics" :key="index">
              {{ topic }}<span v-if="index < res.topics.length - 1">, </span>
            </span>
          </li>
        </ul>
        <p><strong>creado:</strong> {{ formatearFecha(res.created_at) }} - <strong>actualizado:</strong> {{  formatearFecha(res.updated_at) }}</p>
      <footer>
        <lenguaje-icon v-if="res.language" :width="20" :height="20" :titulo="'Lenguaje mas usado'"></lenguaje-icon>{{ res.language }}
        <favorito-icon :width="20" :height="20" :titulo="'Favoritos'"></favorito-icon>{{ res.stargazers_count }} 
        <rama-icon :width="20" :height="20" :titulo="'Bifurcaciones'"></rama-icon>{{ res.forks_count }} 
        <nota-icon :width="20" :height="20" :titulo="'Incidencias'"></nota-icon>{{ res.open_issues_count }} 
        <seguir-icon :width="20" :height="20" :titulo="'Seguidores'"></seguir-icon>{{ res.watchers_count }}
        <a
          v-if="res.owner.html_url"
          :href="res.owner.html_url"
          :title="'Autor '+res.owner.login+' creador del repo '+res.name"
          target="_blank"
          rel="noopener noreferrer"
        >
          <user-icon :width="20" :height="20"></user-icon>
          <img :src="res?.owner.avatar_url" :alt="res.owner.login" />
        </a>
      </footer>
    </article>
  </section>`,
  components: {
    'proyecto-icon': Proyecto,
    'favorito-icon': Favorito,
    'lenguaje-icon': Lenguaje,
    'seguir-icon': Seguir,
    'rama-icon': Rama,
    'nota-icon': Nota,
    'user-icon': User,
  },
  beforeMount() {
    if (!document.querySelector('link[href="css/components/section-repos.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/components/section-repos.css';
      document.head.appendChild(link);
    }
  },
  methods: {
    formatearFecha(data) {
      return fecha(data);
    },
  },
};
