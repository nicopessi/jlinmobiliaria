import React, { useState} from "react";
import { Property } from "../components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../client";

// Crear builder de URLs
const builder = imageUrlBuilder(client);

// Componente
export const PropertyGallery = ({ image }) => {
  const urlFor = (source) => builder.image(source).url(); // Función para generar URL

  if (!image || image.length === 0) {
    return <p>No hay imágenes disponibles.</p>;
  }

  const imageUrls = image
    .map((img) => {
      // Validar si `asset` y `_ref` están presentes
      if (img.asset && img.asset._ref) {
        return urlFor(img.asset); // Generar URL con Sanity
      }
      return null;
    })
    .filter(Boolean); // Eliminar nulos o inválidos

  if (imageUrls.length === 0) {
    return <p>No hay imágenes válidas disponibles.</p>;
  }

  return (
    <Property.Gallery>
      {imageUrls.map((imgUrl, index) => (
        <Property.ImageContainer key={index}>
          <Property.Image source={imgUrl} alt={`Imagen adicional ${index + 1}`} />
        </Property.ImageContainer>
      ))}
    </Property.Gallery>
  );
};





export const PropertyFeatures = ({ features }) => {
  const [featuresShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };

  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Detalles y Características</Property.InfoTitle>
        <Property.Icon
          name={featuresShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={featuresShown}>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Habitaciones : </Property.Span>
            {features.rooms}
          </Property.Text>
          <Property.Text>
            <Property.Span>Baños : </Property.Span>
            {features.beths}
          </Property.Text>
        </Property.InfoItem>

        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Estado : </Property.Span>
            {features.status ? "Activo" : "No activo"}
          </Property.Text>
          <Property.Text>
            <Property.Span>Patio : </Property.Span>
            {features.patio ? "Si" : "No"}
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
          <Property.Text>
            <Property.Span>Cocina : </Property.Span>
            {features.kitchen ? "Si" : "No"}
          </Property.Text>
          <Property.Text>
            <Property.Span>Garage : </Property.Span>
            {features.garage}
          </Property.Text>
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>
  );
};

export const PropertyAmenities = ({ amenities }) => {
  const [amenitiesShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };

  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Comodidades</Property.InfoTitle>
        <Property.Icon
          name={amenitiesShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={amenitiesShown}>
        {amenities.map((amenity) => (
          <Property.InfoItem key={amenity}>
            <Property.Text>{amenity}</Property.Text>
          </Property.InfoItem>
        ))}
      </Property.InfoContent>
    </Property.Info>
  );
};

export const PropertyAddress = ({ address }) => {
  const [addressShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Ubicación	</Property.InfoTitle>
        <Property.Icon
          name={addressShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent contentShown={addressShown}>
        <Property.InfoItem>
          <Property.Text>
          <Property.Span>Provincia : </Property.Span>
          {address.province}
          </Property.Text>
          <Property.Text>
            <Property.Span>Ciudad : </Property.Span>
            {address.location}
          </Property.Text>
        </Property.InfoItem>
        <Property.InfoItem>
          <Property.Text>
          <Property.Span>Calle : </Property.Span>
          {address.address}
          </Property.Text>
          <Property.Text>
            <Property.Span>Area : </Property.Span>
            {address.area}
          </Property.Text>
        </Property.InfoItem>
      </Property.InfoContent>
    </Property.Info>
  );
};
export const PropertyDescription = ({ description }) => {
  const [descriptionShown, setContentShown] = useState(false);

  const contentHandler = () => {
    setContentShown((previousState) => !previousState);
  };
  return (
    <Property.Info>
      <Property.InfoHeader onClick={contentHandler}>
        <Property.InfoTitle>Descripción</Property.InfoTitle>
        <Property.Icon
          name={descriptionShown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          info></Property.Icon>
      </Property.InfoHeader>
      <Property.InfoContent block="true" contentShown={descriptionShown}>
        <Property.Text>{description}</Property.Text>
      </Property.InfoContent>
    </Property.Info>
  );
};