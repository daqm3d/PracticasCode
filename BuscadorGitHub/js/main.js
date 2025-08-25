import { category } from './__api.js';
const { createApp, ref } = Vue;

const app = createApp({
  data() {
    const [params, search, result, error, disabled] = ['', null, null, null, false];

    return {
      params,
      search,
      result,
      error,
      disabled,
    };
    console.log(params);
  },
  methods: {
    async buscar() {
      this.disabled = true;
      this.result = null;
      this.error = null;
      try {
        const resultado = await category('users', this.search);
        if (resultado.total_count === 0) {
          this.error = 'No se encontró resultados';
        }
        /* if (resultado.total_count > 15) {
          this.error = `Los Resultados son ${resultado.total_count}, especifique mejor la búsqueda`;
        } else  */ if (resultado.total_count >= 1) {
          let resData = [];
          if (this.params === 'users') {
            resData = await Promise.all(
              resultado.items.map(async (item) => {
                const data = await fetch(item.url);
                return await data.json();
              })
            );
          }
          console.log(resData);
          this.result = resData;
        }
      } catch (error) {
        this.error = error; // Manejar el error
        console.log('error ' + error);
      } finally {
        this.disabled = false;
      }
    },
  },
});

// Montar la aplicación en el elemento con id 'app'
app.mount('#app');
