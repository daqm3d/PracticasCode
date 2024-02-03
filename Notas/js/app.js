const aler = document.querySelector('#alerNotas');
const formulario = document.querySelector('#formulario');
const pintarNotas = document.querySelector('#pintarNotas');
const templateNota = document.querySelector('#templateNota').content;

let BD = { notas: [], tag: [] };

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  aler.style.display = 'none';
  const datos = new FormData(formulario);
  const [titulo, contenido] = [...datos.values()];

  if (!titulo.trim()) {
    aler.querySelector(
      'h2'
    ).innerHTML = `<span>!</span> Se requiere un titulo para crear la nota`;
    aler.style.display = 'inherit';
    return;
  }
  agregarNota(titulo, contenido);
  monstrarNotas();

  formulario.reset();
  formulario.titulo.focus();
});

// # Funciones de globales
const agregarNota = (titulo, contenido) => {
  let id = BD.notas.length;
  if (!id) {
    id = 0;
  }
  const objetoNota = {
    id: `${id}`,
    status: false,
    titulo: titulo,
    contenido: contenido,
  };
  BD.notas.push(objetoNota);
};

const monstrarNotas = () => {
  localStorage.setItem('BD', JSON.stringify(BD));
  pintarNotas.textContent = '';
  if (BD.notas.length > 0) {
    const fragment = new DocumentFragment();
    BD.notas.forEach((item) => {
      const clone = templateNota.cloneNode(true);
      if (item.status) {
        console.log(item.status);
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
};
// # Funciones de logicaNotas
pintarNotas.addEventListener('click', (e) => {
  console.log(e);

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
    monstrarNotas();
  }

  e.stopPropagation();
});

document.addEventListener('DOMContentLoaded', (e) => {
  if (localStorage.getItem('BD')) {
    console.log('ver');
    BD = JSON.parse(localStorage.getItem('BD'));
    monstrarNotas();
  }
});
