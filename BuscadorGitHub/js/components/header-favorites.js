export default {
  template: `
<header class="favorites">
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
  </header>
`,
  mounted() {
    const style = document.createElement('style');

    style.textContent = `header.favorites {
      display: flex;
      gap: 10px;
      width: 100vw;
      max-height: 25%;
      padding: 10px;
      section {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
        z-index: 1;
        min-height: 100px;
        width: 50%;
        max-height: 200px;
        overflow-x: auto;
        white-space: nowrap;
        article {
          display: inline-block;
          width: 50px;
          height: 50px;
          margin: 5px;
          background: var(--conten-color);
        }
      }
      section::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        border-radius: 5px;
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      section:hover::after {
        opacity: 0; /* Oculto por defecto */
        visibility: hidden; /* Oculto por defecto */
      }
      section#usuarios::after {
        content: 'Usuarios'; /* El texto que quieres que aparezca */
      }
      section#repositorios::after {
        content: 'Repositorios'; /* El texto que quieres que aparezca */
      }
    }`;
    document.head.appendChild(style);
  },
};
