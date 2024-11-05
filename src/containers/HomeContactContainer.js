import React from "react";
import { Section, Form } from "../components";

const HomeContactContainer = () => {
  return (
    <Section bgColor="--bs-fade-blue">
      <Section.InnerContainer>
        <Section.Header></Section.Header>
        <Section.Content>
          <Section.Flex>
            <Section.FlexItem width="70%">
              <Section.SubTitle size="1">Contáctanos</Section.SubTitle>
              <Section.Text>
              Si tienes preguntas sobre nuestras propiedades a la venta, alquiler o cualquier servicio que ofrecemos, no dudes en comunicarte con nosotros. Nuestro equipo está listo para ayudarte a encontrar la opción que mejor se adapte a tus necesidades.
              </Section.Text>
              <Section.Flex>
                <Section.FlexItem width="70%">
                  <Section.SubTitle>Nos Pondremos en Contacto</Section.SubTitle>
                  <Section.Text>
                  Respondenos sobre la compra o venta de propiedades en un plazo de 24 a 48 horas. Tu consulta es importante para nosotros.
                  </Section.Text>
                </Section.FlexItem>
                <Section.FlexItem width="70%">
                  <Section.SubTitle >
                  Obtén Soporte Instantáneo
                  </Section.SubTitle>
                  <Section.Text>
                  Ofrecemos asistencia inmediata para guiarte en la compra, venta o alquiler de propiedades. Contáctanos y te ayudaremos de inmediato.
                  </Section.Text>
                </Section.FlexItem>
              </Section.Flex>
            </Section.FlexItem>
            <Section.FlexItem width="30%" bg="true">
              <Form>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Nombre" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Direccion de Email" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Input type="text" placeholder="Numero de telefono" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.TextArea
                    placeholder="Mensaje"
                    name=""
                    id=""
                    cols="30"
                    rows="10"></Form.TextArea>
                </Form.FormGroup>

                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Enviar" />
                </Form.FormGroup>
              </Form>
            </Section.FlexItem>
          </Section.Flex>
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default HomeContactContainer;
