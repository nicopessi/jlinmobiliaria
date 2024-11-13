// src/pages/Listing.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client"; 
import { CASAS_QUERY } from "../sanity/page"; // Importa tu consulta

import { Section, Property } from "../components";
import {
  HeaderContainer,
  ContactAgentContainer,
  PropertyRelatedContainer,
  FooterContainer,
} from "../containers";

import {
  PropertGallery,
  PropertyAddress,
  PropertyAmenities,
  PropertyFeatures,
  PropertyDescription,
} from "../partials/property_features_partial";

const Listing = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    const fetchProperty = async () => {
      const query = `*[_type == "casas" && _id == $id][0]{
        title,
        location,
        rooms,
        beths,
        areac,
        areal,
        "image1": image1.asset->url,
        "additionalImages": additionalImages[].asset->url,
        price,
        slug,
        publishedAt,
        amenities,
        features,
        address,
        description
      }`;

      const result = await client.fetch(query, { id });
      setProperty(result);
    };

    const fetchFeaturedProperties = async () => {
      const results = await client.fetch(CASAS_QUERY);
      setFeaturedProperties(results.filter((prop) => prop._id !== id));
    };

    fetchProperty();
    fetchFeaturedProperties();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <>
      <HeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Property.Header>
            <Property.HeaderLeft>
              <Property.Title>{property.title}</Property.Title>
              <Property.Location>
                <Property.Icon name="fas fa-map-marker-alt"></Property.Icon>
                <Property.Text>{property.location}</Property.Text>
              </Property.Location>
            </Property.HeaderLeft>
            <Property.HeaderRight>
              <Property.Title>
                {property.price} {property.type === "rental" ? "/ Month" : ""}
              </Property.Title>
            </Property.HeaderRight>
          </Property.Header>
          <Property.Content>
            <Property.Left>
              <PropertGallery image={property.additionalImages} />
              <PropertyFeatures features={property.features} />
              <PropertyAmenities amenities={property.amenities} />
              <PropertyAddress address={property.address} />
              <PropertyDescription description={property.description} />
            </Property.Left>
            <Property.Right>
              <ContactAgentContainer property={property} />
              <PropertyRelatedContainer
                property={property}
                featured={featuredProperties}
              />
            </Property.Right>
          </Property.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Listing;
