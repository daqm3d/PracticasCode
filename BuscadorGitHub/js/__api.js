/**
 * Realiza una búsqueda en la API de GitHub según el tipo de categoría.
 * @param {string} params - El tipo de búsqueda ('users', 'repos', 'topics').
 * @param {string} search - El valor de búsqueda (por defecto es una cadena vacía).
 * @returns {Promise} - Promesa que resuelve con los resultados de la búsqueda.
 */

export function category(params, search = '') {
  const API = 'https://api.github.com/';
  let endpoint = '';

  // Validar que se haya proporcionado un valor de búsqueda
  const term = String(search).trim();
  if (!term) {
    return Promise.reject({ message: 'Faltan parámetros, se requiere una frase de búsqueda' });
  }

  // Determinar el endpoint según el tipo de búsqueda
  switch (params) {
    case 'users':
      endpoint = `search/users?q=${encodeURIComponent(term)}`;
      /*endpoint = `search/users?q=${search}&page=1&per_page=20`; */

      break;
    case 'repos':
      // https://api.github.com/search/repositories?q=daqm3d busca por nombre de repo
      endpoint = `search/repositories?q=${encodeURIComponent(term)}`;
      break;
    case 'topics':
      // "https://api.github.com/search/repositories?q=topic:machine-learning" buscar por etiqueta
      endpoint = `search/repositories?q=topic:${encodeURIComponent(search)}`;
      break;
    default:
      return Promise.reject({ message: 'Tipo de búsqueda no válido' });
  }

  return buscarAPI(endpoint, API);
}

async function buscarAPI(endpoint, api) {
  try {
    const response = await fetch(api + endpoint);
    if (!response.ok) {
      return Promise.reject(response);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const data = await error.json();
    console.log(data);
    return Promise.reject({ message: `Error al realizar la búsqueda: ${data.message}` });
  }
}
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
    const data = await error.json();
    console.log(data);
    return Promise.reject({ message: `Error al buscar usuarios: ${data.message}` });
  }
}
