import { monstrarNotas, animateNotas } from './funcionGlobal.js';
// # Funciones de logicaNotas
const botonEvent = (e, BD) => {
  if (e.target.classList == 'boton') {
    e.preventDefault();

    if (e.target.matches('#Eliminar')) {
      const eliminar = document.querySelector(`span[data-id="${e.target.dataset.id}"]`);
      const tagEliminar = eliminar.closest('details[name="nota"]');
      BD.notas = BD.notas.filter((item) => item.id !== e.target.dataset.id);
      if (BD.notas.length < 0) {
        localStorage.clear;
      }
      animateNotas(tagEliminar, 'remove', BD);
    }

    if (e.target.matches('#Archivar')) {
      console.log('Archivando');
    }

    if (e.target.matches('#Editar')) {
      const formulario = document.querySelector('#formulario');
      BD.notas.map((item) => {
        if (item.id == e.target.dataset.id) {
          formulario.children.titulo.value = item.titulo;
          formulario.children.titulo.dataset.id = item.id;
          formulario.children.contenido.value = item.contenido;
        }
      });
      formulario.children.titulo.focus();
    }

    if (e.target.matches('#Resuelto')) {
      BD.notas.map((item) => {
        if (item.id == e.target.dataset.id) {
          item.status = !item.status;
        }
        //return item;
      });
      //BD.notas[e.target.dataset.id].status =
      //  !BD.notas[e.target.dataset.id].status;
      monstrarNotas(BD);
    }
  }
};

export { botonEvent };
