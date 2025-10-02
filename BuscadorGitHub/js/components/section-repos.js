import { fecha } from '../__api.js';
import Proyecto from '../icons/proyecto.js';
import Favorito from '../icons/favorito.js';
import Lenguaje from '../icons/lenguaje.js';
import Seguir from '../icons/seguir.js';
import Rama from '../icons/rama.js';
import Nota from '../icons/nota.js';
import User from '../icons/user.js';

export default {
  props: ['res', 'busqueda'],
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
        <p>
        creado: {{ fecha(res.created_at) }} - actualizado: {{ fecha(res.updated_at) }}
        </p>
      <footer>
        <lenguaje-icon v-if="res.language" :width="20" :height="20"></lenguaje-icon>{{ res.language }}
         - 
         <favorito-icon v-if="res.stargazers_count" :width="20" :height="20"></favorito-icon>{{ res.stargazers_count }} 
         - 
         <rama-icon v-if="res.forks_count" :width="20" :height="20"></rama-icon>{{ res.forks_count }} 
         - 
         <nota-icon v-if="res.open_issues_count" :width="20" :height="20"></nota-icon>{{ res.open_issues_count }} 
         - 
         <seguir-icon v-if="res.watchers_count" :width="20" :height="20"></seguir-icon>{{ res.watchers_count }}
        <a
          v-if="res.owner.html_url"
          :href="res.owner.html_url"
          :title="'Autor '+res.owner.login+' creador del repo '+res.name"
          target="_blank"
          rel="noopener noreferrer"
        >
          <user-icon :width="20" :height="20"></user-icon>
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
    fecha(data) {
      return fecha(data);
    },
  },
};
