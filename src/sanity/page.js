

// Consulta para propiedades tipo "casas"
export const CASAS_QUERY = `*[_type == "casas" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    _type,
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
    _type,
    title,
    location,
    type,
    dimensions,
    securityFeatures,
    "image1": image1.asset->url,
    "additionalImages": additionalImages[].asset->url,
    price
  }`;
  
  // Consulta para propiedades tipo "departamento"
  export const DEPARTAMENTO_QUERY = `*[_type == "departamento" && defined(title)] | order(price desc) {
    _id,
    _type,
    title,
    location,
    rooms,
    beths,
    floor,
    balcony,
    parking,
    areac,
    "image1": image1.asset->url,
   "additionalImages": additionalImages[].asset->url,
    amenities,
    price
  }`;
  
  // Consulta para propiedades tipo "galpon"
  export const GALPON_QUERY = `*[_type == "galpon" && defined(title)] | order(price desc) {
    _id,
    _type,
    title,
    location,
    areac,
    areal,
    "image1": image1.asset->url,
    "additionalImages": additionalImages[].asset->url,
    price
  }`;
  
  // Consulta para propiedades tipo "local"
  export const LOCAL_QUERY = `*[_type == "local" && defined(title)] | order(price desc) {
    _id,
    _type,
    title,
    location,
    floor,
    areac,
    rooms,
    amenities,
    "image1": image1.asset->url,
    "additionalImages": additionalImages[].asset->url,
    price
  }`;
  
  // Consulta para propiedades tipo "terreno"
  export const TERRENO_QUERY = `*[_type == "terreno" && defined(title)] | order(price desc) {
    _id,
    _type,
    title,
    location,
    area,
    zoning,
    "image1": image1.asset->url,
    "additionalImages": additionalImages[].asset->url,
    price
  }`;
  