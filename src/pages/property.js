import React, { useState, useEffect } from "react";
import { client } from "../client"; 
import {
  CASAS_QUERY,
  COCHERA_QUERY,
  DEPARTAMENTO_QUERY,
  GALPON_QUERY,
  LOCAL_QUERY,
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null); // Reseteamos el estado de error antes de la consulta
  
      try {
        const [
          casas, 
          cocheras, 
          departamentos, 
          galpones, 
          local, 
          terrenos
        ] = await Promise.all([
          client.fetch(CASAS_QUERY),
          client.fetch(COCHERA_QUERY),
          client.fetch(DEPARTAMENTO_QUERY),
          client.fetch(GALPON_QUERY),
          client.fetch(LOCAL_QUERY),
          client.fetch(TERRENO_QUERY),
        ]);
      
        // Verificar que las respuestas no sean vacías o undefined
        const allProperties = [
          ...casas || [], 
          ...cocheras || [], 
          ...departamentos || [], 
          ...galpones || [], 
          ...local|| [], 
          ...terrenos || []
        ];
      
        setProperties(allProperties);
      } catch (error) {
        setError("Error al cargar las propiedades");
        console.error("Error al obtener las propiedades:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProperties();
  }, []);

  if (loading) {
    return <p>Cargando propiedades...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
  {properties.filter((featured) => featured && featured._id).length > 0 ? (
    properties.map((featured) => (
      <ListingItemContainer
        key={featured._id}
        featured={featured}
        width="49%"
      />
    ))
  ) : (
    <p>No hay propiedades disponibles</p>
  )}
</Section.Content>

              <Section.Footer>
                <Section.Button>Más propiedades</Section.Button>
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
