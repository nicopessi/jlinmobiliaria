import React, { useEffect, useState } from "react";
import { client } from "../client";
import { FormWrapper, Form, Section, Grid} from "../components";
import { useProperties } from "../context/PropertiesContext";

const PROPERTIES_QUERY = `*[_type in ["casas", "cochera", "departamento", "galpon", "local", "terreno"]] {
  _id,
  _type,
  price,
  location,
  rooms,
  beths,
  areac,
  areal,
  type,
  zoning,
}`;

const AdvancedSearchContainer = () => {
  const [properties, setProperties] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(""); // Ubicación seleccionada
  const [selectedRooms, setSelectedRooms] = useState(""); // Habitaciones seleccionadas
  const [selectedBeths, setSelectedBeths] = useState(""); // Baños seleccionados, solo para casas y departamentos
const [selectedZoning, setSelectedZoning] = useState(""); // Zonificación seleccionada, solo para terrenos
const [selectedCategory, setSelectedCategory] = useState(""); // Categoría seleccionada, solo para cocheras
  const [selectedPrice, setSelectedPrice] = useState(""); // Precio seleccionado
  const { setFilters } = useProperties();

 const handleSearch = (e) => {
    e.preventDefault();

    const newFilters = {
      type: selectedType,
      location: selectedLocation || null, // Asegúrate de pasar null si no se selecciona ubicación
      rooms: selectedRooms || null,
      price: selectedPrice || null,
      beths: selectedBeths || null,
    };
  
    // Añadir filtros específicos para tipos de propiedad
    if (selectedType === "terreno") {
      newFilters.zoning = selectedZoning || null; // Zonificación para terrenos
    }
  
    if (selectedType === "casas" || selectedType === "departamento") {
      newFilters.beths = selectedBeths || null; // Baños solo para casas y departamentos
    }
  
    if (selectedType === "cochera") {
      newFilters.category = selectedCategory || null; // Categoría para cocheras
    }
  
    setFilters((prevFilters) => {
      if (JSON.stringify(prevFilters) !== JSON.stringify(newFilters)) {
        return newFilters;
      }
      return prevFilters;  // Si no hay cambios, no actualiza el estado
    });
  };
  

  useEffect(() => {
    client
      .fetch(PROPERTIES_QUERY)
      .then((data) => {
        setProperties(data);
        const initialPrices = data.map((property) => property.price);
        setPriceRange(Math.min(...initialPrices)); // Establecemos un rango inicial
      })
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  // Filtrar propiedades según el tipo seleccionado
  const filteredProperties = properties.filter(
    (property) => property._type === selectedType
  );

  const handleClearFilters = () => {
    // Restablecer todos los filtros al valor inicial
    setSelectedType("");
    setSelectedLocation("");
    setSelectedRooms("");
    setSelectedBeths("");
    setSelectedZoning("");
    setSelectedCategory("");
    setSelectedPrice("");
    setPriceRange(0);
  
    
    setFilters({}); // Esto depende de cómo esté implementado tu contexto
  };

  // Obtener datos únicos de propiedades filtradas
  const counties = [...new Set(filteredProperties.map((prop) => prop.location))];
  const prices = filteredProperties.map((property) => property.price || 0);
  const maxPrice = Math.max(...prices, 0);
  const minPrice = Math.min(...prices, 0);

  // Obtener tipos únicos
  const propertyTypes = [...new Set(properties.map((property) => property._type))];

  // Opciones específicas por tipo
  const rooms = [...new Set(filteredProperties.map((prop) => prop.rooms))].sort(
    (a, b) => a - b
  );
  const beths = [...new Set(filteredProperties.map((prop) => prop.beths))].sort(
    (a, b) => a - b
  );
  const areac = [...new Set(filteredProperties.map((prop) => prop.areac))].sort(
    (a, b) => a - b
  );
 
  const typeOptions = [...new Set(filteredProperties.map((prop) => prop.type))]
  .sort((a, b) => a.localeCompare(b));

  const zoningOptions = [
    ...new Set(filteredProperties.map((prop) => prop.zoning)),
  ];

  return (
    <FormWrapper>
      <FormWrapper.Header>
        <FormWrapper.Title>Búsqueda Avanzada</FormWrapper.Title>
      </FormWrapper.Header>
      <FormWrapper.Content>
        <Form onSubmit={handleSearch}>
          {/* Campo Tipo */}
          <Form.FormGroup>
            <Form.Select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <Form.Option value="" disabled>
                Tipo
              </Form.Option>
              {propertyTypes.map((type) => (
                <Form.Option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>

          
          {selectedType && (
            <Form.FormGroup>
              <Form.Select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <Form.Option value="" disabled>
                  Ubicación
                </Form.Option>
                {counties.map((county) => (
                  <Form.Option key={county} value={county}>
                    {county}
                  </Form.Option>
                ))}
              </Form.Select>
            </Form.FormGroup>
          )}

          {/* Campos Dinámicos según el tipo */}
          {selectedType === "casas" || selectedType === "departamento" ? (
            <>
              <Form.FormGroup>
                <Form.Select
                  value={selectedRooms}
                  onChange={(e) => setSelectedRooms(e.target.value)}
                >
                  <Form.Option value="" disabled>
                    Habitaciones
                  </Form.Option>
                  {rooms.map((room) => (
                    <Form.Option key={room} value={room}>
                      {room}
                    </Form.Option>
                  ))}
                </Form.Select>
              </Form.FormGroup>
              <Form.FormGroup>
              <Form.Select
    value={selectedBeths} // Conectado al estado
    onChange={(e) => setSelectedBeths(e.target.value)} // Actualiza el estado cuando cambia
  >
    <Form.Option value="" disabled>
       Baños
    </Form.Option>
    {beths.map((beth) => (
      <Form.Option key={beth} value={beth}>
        {beth}
      </Form.Option>
                  ))}
                </Form.Select>
              </Form.FormGroup>
            </>
          ) : null}

          {selectedType === "cochera" && (
            <Form.FormGroup>
              <Form.Select
  value={selectedType} 
  onChange={(e) => setSelectedType(e.target.value)} 
>
                <Form.Option value="" disabled>
                  Tipo
                </Form.Option>
                {typeOptions.map((type) => (
                  <Form.Option key={type} value={type}>
                    {type}
                  </Form.Option>
                ))}
              </Form.Select>
            </Form.FormGroup>
          )}

          {selectedType === "terreno" && (
            <Form.FormGroup>
              <Form.Select
  value={selectedZoning}
  onChange={(e) => setSelectedZoning(e.target.value)}
>
  <Form.Option value="" disabled>
    Zonificación
  </Form.Option>
  {zoningOptions.map((zoning) => (
    <Form.Option key={zoning} value={zoning}>
      {zoning}
    </Form.Option>
                ))}
              </Form.Select>
            </Form.FormGroup>
          )}

          {/* Campo Precio */}
          {selectedType && (
            <Form.FormGroup>
              <Form.Span>
                Precio: U$D {priceRange} a U$D {maxPrice}
              </Form.Span>
              <Form.RangeInput
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange}
                onChange={({ target: { value } }) => setPriceRange(value)}
              />
            </Form.FormGroup>
          )}

          {/* Botón de Enviar */}
          <Form.FormGroup style={{ display: "flex", gap: "10px", alignItems: "center"}}>
  <Form.SubmitInput type="submit" style={{ display: "inline-block" }} />
  <Section.Button onClick={handleClearFilters} style={{ display: "inline-block", marginLeft: "180px" }}>Limpiar</Section.Button>
</Form.FormGroup>
        </Form>
      </FormWrapper.Content>
    </FormWrapper>
  );
};

export default AdvancedSearchContainer;
