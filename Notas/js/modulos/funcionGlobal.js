// # Funciones de globales
const templateNota = document.querySelector('#templateNota').content;

const agregarNota = (titulo, contenido, BD) => {
  let id = BD.notas.length;
  //! id ? id =0 : id = parseInt(BD.notas[id - 1].id);
  if (!id) {
    id = 0;
  } else {
    id = parseInt(BD.notas[id - 1].id);
  }
  const objetoNota = {
    id: `${id + 1}`,
    status: false,
    titulo: titulo,
    contenido: contenido,
  };
  BD.notas.push(objetoNota);
  monstrarNotas(BD);
};

const monstrarNotas = (BD) => {
  localStorage.setItem('BD', JSON.stringify(BD));
  pintarNotas.textContent = '';

  // const viewTransition = document.startViewTransition(async () => {
  if (BD.notas.length > 0) {
    const fragment = new DocumentFragment();
    BD.notas.forEach((item) => {
      const clone = templateNota.cloneNode(true);
      if (item.status) {
        clone
          .querySelector('.tarjeta')
          .classList.replace('ResueltoFalse', 'ResueltoTrue');
      }

      clone.querySelectorAll('.boton').forEach((item2) => {
        item2.dataset.id = item.id;
      });
      clone.querySelector('.tituloNota').textContent = item.titulo;

      if (!item.contenido.trim()) {
        clone.querySelector('.contenidoNota').remove();
      } else {
        clone.querySelector('.tituloNota').classList.add('boton');
        clone.querySelector('.contenidoNota').textContent =
          item.contenido;
      }

      fragment.appendChild(clone);
    });
    pintarNotas.appendChild(fragment);
  } else {
    pintarNotas.innerHTML =
      '<div id="sinNotas"><h3>Creemos una nueva Nota</h3><spam></spam></div >';
  }
  // });

  // Esperar a que la transición esté lista
  //await viewTransition.ready;
};

export { agregarNota, monstrarNotas };
