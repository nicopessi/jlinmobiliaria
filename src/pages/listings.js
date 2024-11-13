import React, { useState, useEffect } from "react";
import { client } from "../client"; // Asegúrate de que el cliente de Sanity esté configurado correctamente
import {
  CASAS_QUERY,
  COCHERA_QUERY,
  DEPARTAMENTO_QUERY,
  GALPON_QUERY,
  OFICINA_QUERY,
  TERRENO_QUERY,
} from "../sanity/page"; 

import {
  HeaderContainer,
  ListingItemContainer,
  AdvancedSearchContainer,
  FooterContainer,
} from "../containers";
import { Section } from "../components";

const Listing = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Hacemos todas las consultas para obtener diferentes tipos de propiedades
        const casas = client.fetch(CASAS_QUERY);
        const cocheras = client.fetch(COCHERA_QUERY);
        const departamentos = client.fetch(DEPARTAMENTO_QUERY);
        const galpones = client.fetch(GALPON_QUERY);
        const oficinas = client.fetch(OFICINA_QUERY);
        const terrenos = client.fetch(TERRENO_QUERY);

        // Esperamos que todas las consultas terminen y combinamos los resultados
        const allProperties = await Promise.all([
          casas,
          cocheras,
          departamentos,
          galpones,
          oficinas,
          terrenos,
        ]);

        // Unificamos todos los resultados en un solo array
        setProperties([
          ...allProperties[0], // Casas
          ...allProperties[1], // Cocheras
          ...allProperties[2], // Departamentos
          ...allProperties[3], // Galpones
          ...allProperties[4], // Oficinas
          ...allProperties[5], // Terrenos
        ]);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <HeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Flex>
            <Section.FlexItem width="30%" relative flexStart>
              <Section.Shadow>
                <AdvancedSearchContainer />
              </Section.Shadow>
            </Section.FlexItem>
            <Section.FlexItem width="65%">
              <Section.Title>Lista de propiedades</Section.Title>
              <Section.Content>
                {properties.length > 0 ? (
                  properties.map((featured) => (
                    <ListingItemContainer
                      key={featured._id}
                      featured={featured}
                      width="49%"
                    />
                  ))
                ) : (
                  <p>Loading properties...</p>
                )}
              </Section.Content>
              <Section.Footer>
                <Section.Button>More Listings</Section.Button>
              </Section.Footer>
            </Section.FlexItem>
          </Section.Flex>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Listing;
