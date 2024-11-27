import React, { useEffect, useMemo, useState } from "react";
import {
  ListingItemContainer,
  AdvancedSearchContainer,
} from "../containers";
import { Section } from "../components";
import { useProperties } from "../context/PropertiesContext";

const Listing = () => {
  const { fetchProperties, properties, searchTerm, type, filters } = useProperties();

  // Estado local para manejar la cantidad de propiedades visibles
  const [visibleCount, setVisibleCount] = useState(6); // Comenzamos mostrando 6 propiedades

  useEffect(() => {
    fetchProperties(); // Cargar propiedades al montar el componente
  }, [fetchProperties]);

  // Filtrado de propiedades
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      if (type && property._type !== type) return false;
      if (searchTerm && !property.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (filters) {
        if (filters.location && property.location !== filters.location) return false;
        if (filters.rooms && property.rooms !== parseInt(filters.rooms)) return false;
        if (filters.price && property.price > filters.price) return false;
      }
      return true;
    });
  }, [properties, searchTerm, type, filters]);

  // Propiedades visibles según el estado `visibleCount`
  const visibleProperties = useMemo(() => {
    return filteredProperties.slice(0, visibleCount);
  }, [filteredProperties, visibleCount]);

  // Manejar la acción de mostrar más propiedades
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Mostrar 4 propiedades más
  };

  // Manejar el reset de la lista a los primeros 6
  const handleReset = () => {
    setVisibleCount(6);
  };

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
                {visibleProperties.length > 0 ? (
                  visibleProperties.map((featured) => {
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

              {/* Botones para mostrar más y reiniciar */}
              <div style={{ marginTop: "1rem" }}>
                {filteredProperties.length > visibleCount && (
                  <Section.Button onClick={handleShowMore}>
                    Mostrar mas
                  </Section.Button>
                )}
                {visibleCount > 6 && (
                  <Section.Button onClick={handleReset} style={{ marginLeft: "1rem" }}>
                    Volver al inicio
                  </Section.Button>
                )}
              </div>
            </Section.FlexItem>
          </Section.Flex>
        </Section.InnerContainer>
      </Section>
    </>
  );
};

export default Listing;
