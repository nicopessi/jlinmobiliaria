 // post.query.js

// Consulta para propiedades tipo "casas"
export const CASAS_QUERY = `*[_type == "casas" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    location,
    rooms,
    beths,
    areac,
    areal,
    "image1": image1.asset->url,
    "additionalImages": additionalImages[].asset->url,
    price,
    slug,
    publishedAt
  }`;
  
  // Consulta para propiedades tipo "cochera"
  export const COCHERA_QUERY = `*[_type == "cochera" && defined(title)] | order(price desc) {
    _id,
    title,
    location,
    type,
    dimensions,
    securityFeatures,
    "images": images[].asset->url,
    price
  }`;
  
  // Consulta para propiedades tipo "departamento"
  export const DEPARTAMENTO_QUERY = `*[_type == "departamento" && defined(title)] | order(price desc) {
    _id,
    title,
    location,
    rooms,
    bathrooms,
    floor,
    balcony,
    parking,
    mts2,
    "image1": image1.asset->url,
    "images": images[].asset->url,
    amenities,
    price
  }`;
  
  // Consulta para propiedades tipo "galpon"
  export const GALPON_QUERY = `*[_type == "galpon" && defined(title)] | order(price desc) {
    _id,
    title,
    location,
    areac,
    areal,
    height,
    "images": images[].asset->url,
    price
  }`;
  
  // Consulta para propiedades tipo "oficina"
  export const OFICINA_QUERY = `*[_type == "oficina" && defined(title)] | order(price desc) {
    _id,
    title,
    location,
    floor,
    area,
    rooms,
    amenities,
    "images": images[].asset->url,
    price
  }`;
  
  // Consulta para propiedades tipo "terreno"
  export const TERRENO_QUERY = `*[_type == "terreno" && defined(title)] | order(price desc) {
    _id,
    title,
    location,
    area,
    zoning,
    "images": images[].asset->url,
    price
  }`;
  