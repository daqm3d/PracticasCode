import { fecha } from '../__api.js';
import Proyecto from '../icons/proyecto.js';
import Favorito from '../icons/favorito.js';
import Email from '../icons/email.js';
import Mapa from '../icons/mapa.js';
import Blog from '../icons/blog.js';
import X from '../icons/x.js';

export default {
  props: ['res', 'busqueda'],
  template: `
  <section id="users" v-if="res && busqueda==='users'">
    <img :src="res.avatar_url" :alt="res.login" />
    <article>
      <header>
        <a :href="res.html_url" target="_blank">
          <h2>{{ res.name ? res.name : res.login }}</h2>
        </a>
        <span v-if="res.location">
          <mapa-icon :width="20" :height="20" :titulo="'Ubicación'"></mapa-icon>
          {{ res.location }}
        </span>
      </header>
      <p v-if="res.bio">{{ res.bio }}</p>
      <ul>
        <li v-if="res.created_at">
          creado: {{ fecha(res.created_at) }} - actualizado: {{ fecha(res.updated_at) }}
        </li>
        <div id="dataRedes">
          <li>
            <!-- https://api.github.com/users/daqm3d/repos -->
            <button
              v-if="res.public_repos"
              type="button"
              :title="'Proyectos Públicos: '+res.public_repos"
            >
              <proyecto-icon :width="20" :height="20"></proyecto-icon>
            </button>
            <!-- https://api.github.com/users/daqm3d/starred  ?page=(numero de pagination) ?per_page=(Numero de datos devueltos)  -->
            <button
              v-if="res.starred_url"
              type="button"
              :title="'Favoritos: '+res.starred_url"
            >
              <favorito-icon :width="20" :height="20"></favorito-icon>
            </button>
          </li>

          <li>
            <a
              v-if="res.email"
              :href="'mailto:'+res.email"
              :title="'Contacte con '+res.login+' por el correo '+res.email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <email-icon :width="20" :height="20"></email-icon>
            </a>
            <a
              v-if="res.blog"
              :href="res.blog"
              :title="'Visita la web de '+res.login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <blog-icon :width="20" :height="20"></blog-icon>
            </a>
            <a
              v-if="res.twitter_username"
              :href="'https://twitter.com/'+res.twitter_username"
              :title="'Visita el perfil de '+res.login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <x-icon :width="20" :height="20"></x-icon>
            </a>
          </li>
        </div>
      </ul>
    </article>
  </section>`,
  components: {
    'mapa-icon': Mapa,
    'proyecto-icon': Proyecto,
    'favorito-icon': Favorito,
    'email-icon': Email,
    'blog-icon': Blog,
    'x-icon': X,
  },
  beforeMount() {
    if (!document.querySelector('link[href="css/components/section-users.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/components/section-users.css';
      document.head.appendChild(link);
    }
  },
  methods: {
    fecha(data) {
      return fecha(data);
    },
  },
};
