import { monstrarNotas } from './funcionGlobal.js';
// # Funciones de logicaNotas
const botonEven = (e, BD) => {
  if (e.target.classList == 'boton') {
    console.log('seccion boton ' + e);
    if (e.target.matches('#Eliminar')) {
      BD.notas = BD.notas.filter(
        (item) => item.id !== e.target.dataset.id
      );
      if (BD.notas.length < 0) {
        localStorage.clear;
      }
      //  monstrarNotas();
    }
    if (e.target.matches('#Archivar')) {
      console.log('Archivando');
    }
    if (e.target.matches('#Editar')) {
      console.log('editando');
      console.log(BD.notas[e.target.dataset.id].titulo);
    }
    if (e.target.matches('#Resuelto')) {
      console.log('Resuelto');
      BD.notas[e.target.dataset.id].status =
        !BD.notas[e.target.dataset.id].status;
      //      monstrarNotas();
    }
    monstrarNotas(BD);
  }
};

export { botonEven };
