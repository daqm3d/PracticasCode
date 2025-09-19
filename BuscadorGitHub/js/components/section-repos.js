export default {
  /* props: {
    res: { type: Array, required: true },
    busqueda: { type: String, required: true },
  }, */
  props: ['res', 'busqueda'],
  template: `<section v-if="res && (busqueda=='repos' || busqueda=='topics')">
                <h2>repos</h2>
              </section>`,
  mounted() {
    const style = document.createElement('style');

    style.textContent = ``;
    document.head.appendChild(style);
  },
};
