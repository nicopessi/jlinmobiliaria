import React, { useState, useEffect } from "react";
import { client } from "../client"; 
import{
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
        // Realizamos varias consultas a la base de datos
        const casas = await client.fetch(CASAS_QUERY);
        const cocheras = await client.fetch(COCHERA_QUERY);
        const departamentos = await client.fetch(DEPARTAMENTO_QUERY);
        const galpones = await client.fetch(GALPON_QUERY);
        const oficinas = await client.fetch(OFICINA_QUERY);
        const terrenos = await client.fetch(TERRENO_QUERY);
  
        const allProperties = [
          ...casas || [],         // Casas
          ...cocheras || [],      // Cocheras
          ...departamentos || [], // Departamentos
          ...galpones || [],      // Galpones
          ...oficinas || [],      // Oficinas
          ...terrenos || [],      // Terrenos
        ];
  
        setProperties(allProperties);
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
  properties.map((featured) => {
    if (!featured || !featured._id) return null; // Verificación extra
    return (
      <ListingItemContainer
        key={featured._id}
        featured={featured}
        width="49%"
      />
    );
  })
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
