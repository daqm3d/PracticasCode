import {
  agregarNota,
  monstrarNotas,
} from './modulos/funcionGlobal.js';
import { botonEvent } from './modulos/notasEvent.js';

const aler = document.querySelector('#alerNotas');
const formulario = document.querySelector('#formulario');
const pintarNotas = document.querySelector('#pintarNotas');

let BD = { notas: [], tag: [] };

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  aler.style.display = 'none';
  const datos = new FormData(formulario);
  const [titulo, contenido] = [...datos.values()];

  if (!titulo.trim()) {
    aler.querySelector(
      'h2'
    ).innerHTML = `<span>!</span>Se requiere un titulo para crear la nota`;
    aler.style.display = 'inherit';
    return;
  }
  agregarNota(titulo, contenido, BD);
  monstrarNotas(BD);

  formulario.reset();
  formulario.titulo.focus();
});

// # Funciones de logicaNotas
pintarNotas.addEventListener('click', (e) => {
  console.log(e);
  botonEvent(e, BD);
  e.stopPropagation();
});

document.addEventListener('DOMContentLoaded', (e) => {
  if (localStorage.getItem('BD')) {
    BD = JSON.parse(localStorage.getItem('BD'));
    monstrarNotas(BD);
  }
});

/*
let index = 0;
let ornaments = '123';
let height = 4;

for (let fila = 0; fila < height; fila++) {
  const ornamentos = Array.from(
    { length: fila + 1 },
    () => ornaments[index++ % ornaments.length]
  );
  console.log(ornamentos);
}
*/
