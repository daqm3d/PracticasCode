// # Funciones de globales
const templateNota = document.querySelector('#templateNota').content;
const formulario = document.querySelector('#formulario');

const agregarNota = (titulo, contenido, BD, editar) => {
  if (editar === undefined) {
    let id = BD.notas.length;
    !id ? (id = 0) : (id = parseInt(BD.notas[id - 1].id));
    const objetoNota = {
      id: `${id + 1}`,
      status: false,
      titulo: titulo,
      contenido: contenido,
    };
    BD.notas.push(objetoNota);
  } else if (editar) {
    BD.notas.map((item) => {
      if (item.id == editar) {
        item.titulo = titulo;
        item.contenido = contenido;
      }
      return item;
    });
    const data = formulario.querySelector('input');
    delete data.dataset.id;
    console.log(data);
  }
  monstrarNotas(BD);
};

const monstrarNotas = (BD) => {
  localStorage.setItem('BD', JSON.stringify(BD));
  pintarNotas.textContent = '';

  formulario.reset();
  formulario.titulo.focus();

  if (BD.notas.length > 0) {
    const fragment = new DocumentFragment();
    BD.notas.forEach((item) => {
      const clone = templateNota.cloneNode(true);
      if (item.status) {
        clone.querySelector('.tarjeta').classList.replace('ResueltoFalse', 'ResueltoTrue');
      }

      clone.querySelectorAll('.boton').forEach((item2) => {
        item2.dataset.id = item.id;
      });
      clone.querySelector('.tituloNota').textContent = item.titulo;

      if (!item.contenido.trim()) {
        clone.querySelector('.contenidoNota').remove();
      } else {
        clone.querySelector('.tituloNota').classList.add('boton');
        clone.querySelector('.contenidoNota').textContent = item.contenido;
      }
      fragment.appendChild(clone);
    });
    pintarNotas.appendChild(fragment);
  } else {
    pintarNotas.innerHTML =
      '<div id="sinNotas"><h3>Creemos una nueva Nota</h3><spam></spam></div >';
  }
};

const animateNotas = (nota, evento, BD) => {
  let inicio, fin, duracion, posAnimate;
  if (evento == 'add') {
    inicio = { opacity: '0', transform: 'scaleY(0)', display: 'none' };
    fin = { opacity: '1', transform: 'scaleY(1)', display: 'block' };
    duracion = { duration: 500, fill: 'forwards' };
    posAnimate = (e) => {
      return;
    };
  }
  if (evento == 'remove') {
    inicio = { opacity: '1', transform: 'scaleY(1)' };
    fin = { opacity: '0', transform: 'scaleY(0)' };
    duracion = { duration: 500, fill: 'forwards' };
    posAnimate = (e) => {
      e.remove();
      monstrarNotas(BD);
    };
  }
  if (evento == 'alert') {
    /*inicio = { opacity: '1', transform: 'scaleY(1)' };
    fin = { opacity: '0', transform: 'scaleY(0)' };
    duracion = { duration: 500, fill: 'forwards' };
    posAnimate = (e) => {
      e.remove();
      monstrarNotas(BD);
    };*/
  }

  const animacion = nota.animate([inicio, fin], duracion);
  animacion.play();
  animacion.onfinish = () => {
    posAnimate(nota);
  };
};

export { agregarNota, monstrarNotas, animateNotas };
