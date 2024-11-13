import React, { useEffect, useState } from "react";
import { client } from "../client";  
import { FormWrapper, Form } from "../components";

const PROPERTIES_QUERY = `*[_type in ["casas", "cochera", "departamento", "galpon", "oficina", "terreno"]] {
  _id,
  price,
  category,
  listedIn,
  address,
  features
}`;

const AdvancedSearchContainer = () => {
  const [properties, setProperties] = useState([]);
  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    client.fetch(PROPERTIES_QUERY)
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  // Procesamos los precios directamente desde Sanity
  const prices = properties.map((property) => property.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  const categories = [...new Set(properties.map((property) => property.category))];
  const listedIn = [...new Set(properties.map((property) => property.listedIn))];
  const counties = [
    ...new Set(properties.map((property) => property.address?.county)),
  ];
  const rooms = [
    ...new Set(properties.map((property) => property.features?.bedrooms)),
  ].sort((a, b) => a - b);

  return (
    <FormWrapper>
      <FormWrapper.Header>
        <FormWrapper.Title>Busqueda Avanzada</FormWrapper.Title>
      </FormWrapper.Header>
      <FormWrapper.Content>
        <Form>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Tipo</Form.Option>
              {listedIn.map((type) => (
                <Form.Option key={type}>{type}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Ubicación</Form.Option>
              {counties.map((county) => (
                <Form.Option key={county}>{county}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Categorias</Form.Option>
              {categories.map((category) => (
                <Form.Option key={category}>{category}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Select>
              <Form.Option defaultValue>Habitaciones</Form.Option>
              {rooms.map((room) => (
                <Form.Option key={room}>{room}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
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
          <Form.FormGroup>
            <Form.Input type="text" placeholder="Término de búsqueda" />
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.SubmitInput type="submit" value="Buscar" />
          </Form.FormGroup>
        </Form>
      </FormWrapper.Content>
    </FormWrapper>
  );
};

export default AdvancedSearchContainer;