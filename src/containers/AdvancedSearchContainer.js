import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPropertyList } from "../redux/actions/propertiesAction";

import { FormWrapper, Form } from "../components";

import { priceFormat } from "../helpers/helper_functions";

const AdvancedSearchContainer = () => {
  const dispatch = useDispatch();

  const { properties } = useSelector((state) => state.propertyList);

  const price = properties.map(
    (property) => +property.price.split(",").join("")
  );

  const maxPrice = Math.max.apply(null, price),
    minPrice = Math.min.apply(null, price);

  const categories = [
    ...new Set(properties.map((property) => property.category)),
  ];

  const listedIn = [
    ...new Set(properties.map((property) => property.listedIn)),
  ];

  const counties = [
    ...new Set(properties.map((property) => property.address.county)),
  ];
  const rooms = [
    ...new Set(properties.map((property) => property.features.bedrooms)),
  ].sort((a, b) => a - b);

  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    dispatch(getPropertyList());
  }, [dispatch]);
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
                <Form.Option key={Math.random(room)}>{room}</Form.Option>
              ))}
            </Form.Select>
          </Form.FormGroup>
          <Form.FormGroup>
            <Form.Span>
              {" "}
              Precio: U$D {priceFormat(+priceRange)} a U$D {" "}
              {priceFormat(maxPrice)}
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
            <Form.Input type="text" placeholder="Termino de busqueda" />
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
