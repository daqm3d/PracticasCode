/**
 * Realiza una búsqueda en la API de GitHub según el tipo de categoría.
 * @param {string} params - El tipo de búsqueda ('users', 'repos', 'topics').
 * @param {string} search - El valor de búsqueda (por defecto es una cadena vacía).
 * @returns {Promise} - Promesa que resuelve con los resultados de la búsqueda.
 */
export function category(params, search = '') {
  const API = 'https://api.github.com/';
  let endpoint = '';

  // Determinar el endpoint según el tipo de búsqueda
  switch (params) {
    case 'users':
      // https://api.github.com/users/ para buscar usuarios
      // https://api.github.com/search/users?q=daqm3
      endpoint = `search/users?q=${search}`;
      break;
    case 'repos':
      // https://api.github.com/search/repositories?q=daqm3d busca por nombre de repo
      endpoint = `search/repositories?q=${search}`;
      break;
    case 'topics':
      // "https://api.github.com/search/repositories?q=topic:machine-learning" buscar por etiqueta
      endpoint = `search/repositories?q=topic:${search}`;
      break;
    default:
      return Promise.reject('Tipo de búsqueda no válido');
  }

  // Validar que se haya proporcionado un valor de búsqueda
  if (!search) {
    return Promise.reject('Faltan parámetros, se requiere una frase de búsqueda');
  }

  return buscarAPI(endpoint, API);
}

async function buscarAPI(endpoint, api) {
  try {
    const response = await fetch(api + endpoint);
    if (!response.ok) {
      return Promise.reject(`Error ${response}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(`Error al realizar la búsqueda: ${error.message}`);
  }
}
