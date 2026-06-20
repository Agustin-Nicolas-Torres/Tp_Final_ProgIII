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





export async function Conseguirproductos() {
  const respuesta = await fetch('http://localhost:3000/api/productos');
  const datos = await respuesta.json();
  return datos;
} 

