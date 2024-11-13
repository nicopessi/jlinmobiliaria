import React, { useEffect, useState } from "react";
import { client } from "../client";  // Asegúrate de tener el cliente de Sanity configurado correctamente
import { Section } from "../components";
import { ListingItemContainer } from "./index";

// Definimos la consulta de propiedades destacadas (o puedes usar la consulta que prefieras)
const FEATURED_QUERY = `*[_type == "propiedad" && featured == true] | order(publishedAt desc) {
  _id,
  title,
  location,
  price,
  "image1": image1.asset->url,
  slug,
  publishedAt
}`;

const FeaturedListingContainer = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    // Obtenemos las propiedades destacadas de Sanity
    client.fetch(FEATURED_QUERY)
      .then((data) => setFeaturedProperties(data))
      .catch((error) => console.error("Error fetching featured properties:", error));
  }, []);

  return (
    <Section bgColor="--bs-light">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Nuestras propiedades destacadas:</Section.Title>
        </Section.Header>
        <Section.Content>
          {featuredProperties.length > 0 ? (
            featuredProperties.map((featured) => (
              <ListingItemContainer key={featured._id} featured={featured} />
            ))
          ) : (
            <p>No hay propiedades destacadas en este momento.</p>
          )}
        </Section.Content>
        <Section.Footer>
          <Section.Button>More Listing</Section.Button>
        </Section.Footer>
      </Section.InnerContainer>
    </Section>
  );
};

export default FeaturedListingContainer;
