import { monstrarNotas } from './funcionGlobal.js';
// # Funciones de logicaNotas
const botonEvent = (e, BD) => {
  if (e.target.classList == 'boton') {
    console.log('seccion boton ' + e);

    if (e.target.matches('#Eliminar')) {
      BD.notas = BD.notas.filter(
        (item) => item.id !== e.target.dataset.id
      );
      if (BD.notas.length < 0) {
        localStorage.clear;
      }
    }

    if (e.target.matches('#Archivar')) {
      console.log('Archivando');
    }

    if (e.target.matches('#Editar')) {
      console.log('editando');
      console.log(BD.notas[e.target.dataset.id].titulo);
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
    }

    monstrarNotas(BD);
  }
};

export { botonEvent };
