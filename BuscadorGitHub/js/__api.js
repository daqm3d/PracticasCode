/**
 * Realiza una búsqueda en la API de GitHub según el tipo de categoría.
 * @param {string} params - El tipo de búsqueda ('users', 'repos', 'topics').
 * @param {string} search - El valor de búsqueda (por defecto es una cadena vacía).
 * @returns {Promise} - Promesa que resuelve con los resultados de la búsqueda.
 */
// ? función principal para crear la busqueda en la API de GitHub
export function category(params, search = '', page = 1) {
  const API = 'https://api.github.com/';
  let endpoint = '';
  let per_page = 20;

  // Validar que se haya proporcionado un valor de búsqueda
  const term = String(search).trim();
  if (!term) {
    return Promise.reject({ message: 'Faltan parámetros, se requiere una frase de búsqueda' });
  }

  // Determinar el endpoint según el tipo de búsqueda
  switch (params) {
    case 'users':
      //? https://api.github.com/search/users?q=daqm3d busca por nombre de usuario
      endpoint = `search/users?q=${encodeURIComponent(term)}&page=${page}&per_page=${per_page}`;
      break;
    case 'repos':
      //? https://api.github.com/search/repositories?q=daqm3d busca por nombre de repo
      endpoint = `search/repositories?q=${encodeURIComponent(
        term
      )}&page=${page}&per_page=${per_page}`;
      break;
    case 'topics':
      const data = term
        .split(/\s*,\s*/) //* separa en comas, ignorando espacios alrededor
        .map((s) => s.trim()) //* por si queda espacio
        .filter(Boolean); //* elimina entradas vacías
      //* codifica solo cada etiqueta y arma los qualifiers sin codificar los separators
      const q = data.map((tag) => `${encodeURIComponent(tag)}`).join('+topic:');

      //? "https://api.github.com/search/repositories?q=topic:read+topic:readme-md+topic:readme-template" buscar por etiqueta
      endpoint = `search/repositories?q=topic:${q}&page=${page}&per_page=${per_page}`;
      break;
    default:
      return Promise.reject({ message: 'Tipo de búsqueda no válido' });
  }

  return buscarAPI(endpoint, API, params);
}
// ? función para llamar a la API de GitHub
async function buscarAPI(endpoint, api, params) {
  try {
    const response = await fetch(api + endpoint);
    let resData = [];
    console.log(response);

    if (!response.ok) {
      return Promise.reject(response);
    }

    const data = await response.json();
    console.log(data);
    if (params === 'users') {
      resData = await userAPI(data);
      return resData;
    }
    if (params === 'repos' || params === 'topics') {
      resData = data;
      return resData.items;
    }
  } catch (error) {
    const data = error;
    console.log(data);
    return Promise.reject({ message: `Error al realizar la búsqueda: ${data.message}` });
  }
}
// ? obtener datos completos de usuario
export async function userAPI(resultado) {
  try {
    const resData = await Promise.all(
      resultado.items.map(async (item) => {
        const data = await fetch(item.url);
        if (!data.ok) {
          return Promise.reject(data);
        }
        return await data.json();
      })
    );
    return resData;
  } catch (error) {
    const data = await error?.json();
    console.log(data);
    return Promise.reject({ message: `Error al buscar usuarios: ${data?.message}` });
  }
}
// ? convertir fecha a formato dd/mm/aaaa
export function fecha(data) {
  const fecha = new Date(data);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
}
