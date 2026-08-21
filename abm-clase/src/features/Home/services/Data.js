export const imageList = [
  {
    url: "banner.jpg",
  },
  {
    url: "BannerIphone16.png",
  },
  {
    url: "banner.jpg",
  },
  {
    url: "BannerIphone16.png",
  },
  {
    url: "banner.jpg",
  },
];

function normalizarRespuesta(datos) {
  if (Array.isArray(datos)) {
    return datos;
  }

  if (datos && Array.isArray(datos.rows)) {
    return datos.rows;
  }

  return [];
}

async function pedirDatos(urls) {
  let ultimoError = null;

  for (const url of urls) {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        continue;
      }

      const datos = await respuesta.json();
      return normalizarRespuesta(datos);
    } catch (error) {
      ultimoError = error;
    }
  }

  throw ultimoError || new Error("No se pudo cargar la información");
}

export async function Conseguirproductos(categoriaId = null, filtrosSeleccionados = []) {
  const params = new URLSearchParams();

  if (categoriaId) {
    params.append("categoriaId", categoriaId);
  }

  if (filtrosSeleccionados && filtrosSeleccionados.length > 0) {
    params.append("filtrosSeleccionados", filtrosSeleccionados.join(","));
  }

  const queryString = params.toString();
  const respuesta = await fetch(`http://localhost:3000/api/productos${queryString ? `?${queryString}` : ""}`);

  if (!respuesta.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  const datos = await respuesta.json();
  return normalizarRespuesta(datos);
}

export async function ConseguirCategorias() {
  return pedirDatos([
    "http://localhost:3000/api/categorias",
    "http://localhost:3000/api/category",
  ]);
}

export async function ConseguirFiltros() {
  return pedirDatos([
    "http://localhost:3000/api/filtros",
    "http://localhost:3000/api/filter",
  ]);
}

export async function eliminarProducto(id) {
  try {
    const respuesta = await fetch(`http://localhost:3000/api/productos/${id}`, {
      method: 'DELETE',
    });

    return respuesta.json();
  } catch (error) {
    console.error("Falla en la petición:", error);
    alert(error.message);
    throw error;
  }
}

export async function agregarProductoApi(producto) {
  const respuesta = await fetch("http://localhost:3000/api/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });

  if (!respuesta.ok) {
    const errorData = await respuesta.json().catch(() => null);
    throw new Error(errorData?.error || "No se pudo agregar el producto");
  }

  return respuesta.json();
}

export async function dolarcripto() {
  try{
    const respuesta = await fetch('https://dolarapi.com/v1/dolares/cripto');

    const data = await respuesta.json();
    return data.venta;
    
  }catch(error){
    console.error('Error de obtencion', error);
    return 0; 
  }
}
