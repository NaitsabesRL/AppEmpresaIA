// Utilidades para conectar la app con un backend / API.
// Cambia BASE_URL por la dirección de tu servidor.

const BASE_URL = 'https://api.miempresa.com';

export async function fetchJSON(path, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn('Error de red:', error.message);
    throw error;
  }
}

// Ejemplos de uso:
// export const getServicios = () => fetchJSON('/servicios');
// export const enviarContacto = (datos) =>
//   fetchJSON('/contacto', { method: 'POST', body: JSON.stringify(datos) });
