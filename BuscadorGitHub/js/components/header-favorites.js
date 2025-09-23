export default {
  template: `
  <header id="favorites" class="favorites">
    <section id="usuarios">
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
    </section>
    <section id="repositorios">
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
      <article>1</article>
    </section>
  </header>`,
  beforeMount() {
    if (!document.querySelector('link[href="css/components/header-favorites.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/components/header-favorites.css';
      document.head.appendChild(link);
    }
  },
};
