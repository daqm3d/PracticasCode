export default {
  template: `
  <header id="favorites" class="favorites">
    <section id="usuarios" :class="{ 'favoritos': favorites.users.length }">
    <template v-for="user in favorites.users" :key="user.id">
      <article >
          <img :src="user.avatar_url" :alt="user.login" :title="'Usuario: '+user.login" />
      </article>
    </template>
    </section>
    <section id="repositorios" :class="{ 'favoritos': favorites.repos.length }">
    <template v-for="repo in favorites.repos" :key="repo.id">
      <article >
          <img :src="repo.owner.avatar_url" :alt="repo.name" :title="'Repositorio: '+repo.name" />
      </article>
    </template>
    </section>
  </header>`,
  inject: ['favorites'],
  beforeMount() {
    if (!document.querySelector('link[href="css/components/header-favorites.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/components/header-favorites.css';
      document.head.appendChild(link);
    }
  },
};
