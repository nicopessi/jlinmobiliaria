import React, {  useEffect, useMemo } from "react";


import {
  
  ListingItemContainer,
  AdvancedSearchContainer,
  
} from "../containers";
import { Section } from "../components";
import { useProperties } from "../context/PropertiesContext";

const Listing = () => {
  const { fetchProperties, properties, searchTerm, type, filters } = useProperties();

  useEffect(() => {
    fetchProperties(); // Cargar propiedades al montar el componente
  }, [fetchProperties]);

  
  // Filtrado de propiedades
  const filterdProperties = useMemo(() => {
    // Si no hay filtros activos, mostramos todas las propiedades
    return properties
      .filter((property) => {
        // Filtrar por tipo si se especifica
        if (type && property._type !== type) return false;
        // Filtrar por el término de búsqueda
        if (searchTerm && !property.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        // Filtros adicionales, por ejemplo, por precio, habitaciones, etc.
        if (filters) {
          if (filters.location && property.location !== filters.location) return false;
          if (filters.rooms && property.rooms !== parseInt(filters.rooms)) return false;
          if (filters.price && property.price > filters.price) return false;
        }
        return true; // Si no se cumplen ninguna de las condiciones, incluir la propiedad
      });
  }, [properties, searchTerm, type, filters]);

  return (
    <>
      
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
                {filterdProperties.length > 0 ? (
                  filterdProperties.map((featured) => {
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
                  <p>No properties found.</p> // En caso de no encontrar propiedades que coincidan
                )}
              </Section.Content>
              
                
                <Section.Button>More Listings</Section.Button>
              
            </Section.FlexItem>
          </Section.Flex>
        </Section.InnerContainer>
      </Section>
     
    </>
  );
};

export default Listing;
