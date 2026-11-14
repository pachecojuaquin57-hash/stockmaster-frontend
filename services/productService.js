const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const obtenerProductosIniciales = async () => {
  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error("Error al conectar con el servidor");
    
    return [
      { id: 1, nombre: "Teclado Mecánico RGB", categoria: "Periféricos", cantidad: 15, precio: 180000 },
      { id: 2, nombre: "Monitor 24'' Full HD", categoria: "Pantallas", cantidad: 4, precio: 650000 },
      { id: 3, nombre: "Mouse Inalámbrico", categoria: "Periféricos", cantidad: 25, precio: 75000 },
    ];
  } catch (error) {
    console.error("Error en productService:", error);
    return [];
  }
};