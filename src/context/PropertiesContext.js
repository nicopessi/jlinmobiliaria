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

// Define los filtros iniciales antes de usarlos
const initialFilters = {
  location: null,
  rooms: null,
  price: null,
  beths: null,
};

const initialValue = {
  properties: [],
  type: null,
  location: null,
  category: null,
  rooms: null,
  price: null,
  searchTerm: "",
  filters: initialFilters, // Asegúrate de usar initialFilters aquí
};

const PropertiesContext = React.createContext(initialValue);

export const PropertiesContextProvider = ({ children }) => {
  const [properties, setProperties] = useState(initialValue.properties);
  const [filters, setFilters] = useState(initialValue.filters);

  // Función para resetear los filtros a su estado inicial
  const resetFilters = () => {
    setFilters(initialFilters); // Usa initialFilters para resetear los filtros
  };

  async function fetchProperties() {
    try {
      // Realizamos varias consultas a la base de datos
      const [casas, cocheras, departamentos, galpones, local, terrenos] =
        await Promise.all([
          client.fetch(CASAS_QUERY),
          client.fetch(COCHERA_QUERY),
          client.fetch(DEPARTAMENTO_QUERY),
          client.fetch(GALPON_QUERY),
          client.fetch(LOCAL_QUERY),
          client.fetch(TERRENO_QUERY),
        ]);

      const allProperties = [
        ...(casas || []), 
        ...(cocheras || []),
        ...(departamentos || []), 
        ...(galpones || []), 
        ...(local || []),
        ...(terrenos || []),
      ];

      setProperties(allProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  }

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        filters,
        resetFilters,
        setFilters, // Ahora pasas setFilters en el contexto
        fetchProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => React.useContext(PropertiesContext);
