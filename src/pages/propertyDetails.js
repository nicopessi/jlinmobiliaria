import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client"; // Cliente para Sanity
import { HeaderContainer, FooterContainer } from "../containers";
import  Property  from "../components/property";
import Section from "../components/sections";
import {
  PropertyGallery,
  PropertyAddress,
  PropertyAmenities,
  PropertyFeatures,
  PropertyDescription,
} from "../partials/property_features_partial";





const PROPERTY_QUERY = `*[_id == $id] {
  _id,
  _type,
  price,
  location,
  rooms,
  beths,
  areac,
  areal,
  area,
  type,
  zoning,
  image1,
  aditionalImages[] {
    _type,
    asset
  },
  amenities,
  securityFeatures,
  dimensions,
  title,
  balcony,
  parking, 
  floor,
  description, 
  patio, 
  slug,
  address,
  kitchen,
  province,
}`;

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    client
      .fetch(PROPERTY_QUERY, { id })      
      .then((data) => {
        if (data.length > 0) {
          const normalizedProperty = {
            _id: data[0]._id || "ID no disponible",
            _type: data[0]._type || "Sin tipo definido",
            price: data[0].price || "Precio no disponible",
            location: data[0].location || "Ubicación no especificada",
            rooms: data[0].rooms || 0,
            beths: data[0].beths || 0,
            areac: data[0].areac || "Área no especificada",
            areal: data[0].areal || "Área no especificada",
            image1: data[0].image1 || [],
            aditionalImages: data[0].aditionalImages || [], // Asegúrate de usar aditionalImages
            amenities: data[0].amenities || [],
            securityFeatures: data[0].securityFeatures || [],
            dimensions: data[0].dimensions || "Dimensiones no especificadas",
            title: data[0].title || "Sin título",
            balcony: data[0].balcony || false,
            parking: data[0].parking || 0,
            floor: data[0].floor || "Piso no especificado",
            description: data[0].description || "Sin descripción",
            patio: data[0].patio || false,
            slug: data[0].slug?.current || "",
            address: data[0].address || {},
            kitchen: data[0].kitchen || false,
            province: data[0].province || "",
          };
          setProperty(normalizedProperty);
        } else {
          setError("Propiedad no encontrada.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar la propiedad.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Section>
        <Section.InnerContainer>
          <Property.Text>Cargando detalles de la propiedad...</Property.Text>
        </Section.InnerContainer>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <Section.InnerContainer>
          <Property.Text>{error}</Property.Text>
        </Section.InnerContainer>
      </Section>
    );
  }




  return (
    <>
      <HeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Property.Header>
            <Property.HeaderLeft>
              <Property.Title>{property._type}</Property.Title>
              <Property.Location>
                <Property.Icon name="fas fa-map-marker-alt" />
                <Property.Text>{property.location}</Property.Text>
              </Property.Location>
            </Property.HeaderLeft>
            <Property.HeaderRight>
              <Property.Title>
                U$D {property.price || "Precio no disponible"}
              </Property.Title>
            </Property.HeaderRight>
          </Property.Header>
          <Property.Content>
            <Property.Left>
            <PropertyGallery image={property.aditionalImages} />
            
              <PropertyFeatures
                features={{
                  rooms: property.rooms || "-",
                  beths: property.beths || "-",
                  garage: property.garage || "-",
                  estado: property.status || false ,
                  patio: property.patio || false,
                  kitchen: property.kitchen || false,
                }}
              />
              <PropertyAmenities
                amenities={property.amenities || ["No amenities available"]}
              />
              <PropertyAddress
                address={{
                  address: property.address || "Calle no identificada",
                  location: property.location || "Ubicación no disponible",
                  province: property.province || "Provincia no especificada",
                  area: property.area || "Área no especificada",
                }}
              />
              <PropertyDescription
                description={property.description || "Sin descripción"}
              />
            </Property.Left>
            <Property.Right></Property.Right>
          </Property.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default PropertyDetails;
