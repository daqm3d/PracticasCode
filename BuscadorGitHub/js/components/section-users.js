export default {
  /* props: {
    res: { type: Array, required: true },
    busqueda: { type: String, required: true },
  }, */
  props: ['res', 'busqueda'],
  template: `
  <section id="users" v-if="res && busqueda=='users'">
    <img :src="res.avatar_url" :alt="res.login" />
    <article>
      <header>
        <a :href="res.html_url" target="_blank">
          <h2>{{ res.name ? res.name : res.login }}</h2>
        </a>
        <span v-if="res.location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <title>SVG de un planeta</title>
            <path
              d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"
            ></path>
          </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke-width="1.3"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"
                />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17v5l2.5-1.6L20 22v-5"
                />
                <path stroke="#000" stroke-linecap="round" d="M6 17h14" />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 17a2 2 0 1 0 0 4h5.5"
                />
              </svg>
            </button>
            <!-- https://api.github.com/users/daqm3d/starred  ?page=(numero de pagination) ?per_page=(Numero de datos devueltos)  -->
            <button
              v-if="res.starred_url"
              type="button"
              :title="'Favoritos: '+res.starred_url"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke-width="1.3"
                viewBox="0 0 24 24"
              >
                <path
                  style="--darkreader-inline-stroke: #000000"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.952 9.623l1.559-3.305a.535.535 0 01.978 0l1.559 3.305 3.485.533c.447.068.625.644.302.974l-2.522 2.57.595 3.631c.077.467-.391.822-.791.602L12 16.218l-3.117 1.715c-.4.22-.868-.135-.791-.602l.595-3.63-2.522-2.571c-.323-.33-.145-.906.302-.974l3.485-.533zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"
                ></path>
                <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
              </svg>
            </a>
            <a
              v-if="res.blog"
              :href="res.blog"
              :title="'Visita la web de '+res.login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
                  stroke="#000000"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 2.05S16 6 16 12"
                  stroke="#000000"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 21.95S8 18 8 12s3-9.95 3-9.95"
                  stroke="#000000"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.63 15.5H12"
                  stroke="#000000"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.63 8.5h18.74"
                  stroke="#000000"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  clip-rule="evenodd"
                  d="M21.879 17.917c.493.304.462 1.043-.046 1.101l-2.567.29-1.151 2.313c-.228.46-.933.235-1.05-.333l-1.255-6.116c-.098-.479.334-.78.75-.524l5.319 3.271z"
                  stroke="#000000"
                  stroke-width="1.3"
                />
              </svg>
            </a>
            <a
              v-if="res.twitter_username"
              :href="'https://twitter.com/'+res.twitter_username"
              :title="'Visita el perfil de '+res.login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.82 20.768 3.753 3.968A.6.6 0 0 1 4.227 3h2.48a.6.6 0 0 1 .473.232l13.067 16.8a.6.6 0 0 1-.474.968h-2.48a.6.6 0 0 1-.473-.232z"
                  stroke="#000000"
                  stroke-width="1.3"
                />
                <path
                  d="M20 3 4 21"
                  stroke="#000000"
                  stroke-width="1.3"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </li>
        </div>
      </ul>
    </article>
  </section>`,
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
      const fecha = new Date(data);
      const dia = fecha.getDate();
      const mes = fecha.getMonth() + 1;
      const anio = fecha.getFullYear();
      return `${dia}/${mes}/${anio}`;
    },
  },
};
