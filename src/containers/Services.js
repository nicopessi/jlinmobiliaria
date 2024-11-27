import React from "react";
import { Section } from "../components";

const Service = () => {
  return (
    <Section bgColor="--bs-fade-blue">
      <Section.InnerContainer>
        <Section.Header></Section.Header>
        <Section.Content>
          <Section.Flex >
            <Section.FlexItem width="100%">
              <Section.SubTitle size="1">Nuestros servicios</Section.SubTitle>
              <Section.Flex>
                <Section.FlexItem width="100%">
                  <Section.Title><img src={`${process.env.PUBLIC_URL}/images/sale.png`} alt="venta" className="logoJl" /></Section.Title>
                  <Section.SubTitle size="1" >Ventas</Section.SubTitle>
                  <Section.Text size="2">
                    Brindamos asesoría completa en la venta de propiedades, asegurando el mejor valor de mercado.
                  </Section.Text>
                </Section.FlexItem>
                <Section.FlexItem width="100%">
                <Section.Title><img src={`${process.env.PUBLIC_URL}/images/rentals.png`} alt="rental" className="logoJl" /></Section.Title>
                  <Section.SubTitle size="1">Alquileres</Section.SubTitle>
                  <Section.Text>
                    Ofrecemos gestión integral de alquileres, facilitando contratos y atención durante todo el arrendamiento.
                  </Section.Text>
                </Section.FlexItem>
                <Section.FlexItem width="100%">
                <Section.Title><img src={`${process.env.PUBLIC_URL}/images/tasacion.png`} alt="tasacion " className="logoJl" /></Section.Title>
                  <Section.SubTitle size="1">Tasaciones</Section.SubTitle>
                  <Section.Text>
                    Realizamos tasaciones profesionales para determinar el valor actual y real de tu propiedad.
                  </Section.Text>
                </Section.FlexItem>
              </Section.Flex>
            </Section.FlexItem>
          </Section.Flex>
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default Service;
