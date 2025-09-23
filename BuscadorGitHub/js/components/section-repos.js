export default {
  /* props: {
    res: { type: Array, required: true },
    busqueda: { type: String, required: true },
  }, */
  props: ['res', 'busqueda'],
  template: `
  <section v-if="res && (busqueda=='repos' || busqueda=='topics')">
    <h2>repos</h2>
  </section>`,
  beforeMount() {
    /* if (!document.querySelector('link[href="css/components/section-users.css"]')) {
      this.link = document.createElement('link');
      this.link.rel = 'stylesheet';
      this.link.href = 'css/components/section-users.css';
      document.head.appendChild(this.link);
    } else {
      this.link = document.querySelector('link[href="css/components/section-users.css"]');
    } */
  },
};
