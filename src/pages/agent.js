import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Section, Agent } from "../components";
import {
  HeaderContainer,
  ContactAgentContainer,
  FooterContainer,
} from "../containers";

// Este es el componente principal
const Agentt = () => {
  const { id } = useParams(); // Para obtener el id del agente desde la URL
  const [agent, setAgent] = useState({});
  const [properties, setProperties] = useState([]);

  // useEffect para cargar los datos del agente cuando cambia el id
  useEffect(() => {
    // Función que simula la llamada a la API para obtener el agente por su ID
    const fetchAgentData = async () => {
      // Aquí debes reemplazar esta lógica con una llamada real a tu API
      const agentData = await agent(id); // Reemplaza esta línea con tu lógica real
      setAgent(agentData);
      setProperties(agentData.listings); // Aquí estamos asignando las propiedades del agente
    };

    fetchAgentData();
  }, [id]);

  // Este es el render del componente
  return (
    <>
      <HeaderContainer bg="false" />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Header>
            <Section.Title>Agent Details</Section.Title>
            <Section.Text>{agent.name}</Section.Text>
          </Section.Header>
          <Agent.Content>
            <Agent.Left>
              <Agent.Info>
                <Agent.InfoTop>
                  <Agent.TopLeft>
                    <Agent.Image source={agent.photo} />
                  </Agent.TopLeft>
                  <Agent.TopRight>
                    <Agent.Title>{agent.name}</Agent.Title>
                    <Agent.Text>Sales Agent</Agent.Text>
                    <Agent.List>
                      <Agent.ListItem>
                        <Agent.Icon name="fas fa-phone-alt" />
                        <Agent.Text>{agent.phone}</Agent.Text>
                      </Agent.ListItem>
                      <Agent.ListItem>
                        <Agent.Icon name="fab fa-whatsapp" />
                        <Agent.Text>{agent.phone}</Agent.Text>
                      </Agent.ListItem>
                      <Agent.ListItem>
                        <Agent.Icon name="far fa-envelope" />
                        <Agent.Text>{agent.email}</Agent.Text>
                      </Agent.ListItem>
                    </Agent.List>
                    <Agent.Social>
                      <Agent.List>
                        <Agent.ListItem>
                          <Agent.ExternalAnchor to={agent.social.linkedin}>
                            <Agent.Icon name="fab fa-linkedin" />
                          </Agent.ExternalAnchor>
                        </Agent.ListItem>
                      </Agent.List>
                    </Agent.Social>
                  </Agent.TopRight>
                </Agent.InfoTop>
                <Agent.InfoBottom>
                  <Agent.Title>Acerca de mí</Agent.Title>
                  <Agent.About>
                    <Agent.Text>{agent.about}</Agent.Text>
                  </Agent.About>
                </Agent.InfoBottom>
              </Agent.Info>
            </Agent.Left>
            <Agent.Right>
              {/* El contenedor para el agente de contacto */}
              <ContactAgentContainer property={{ agent }} />
            </Agent.Right>
          </Agent.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

// Este es el componente CategoryBtns
const CategoryBtns = ({
  categories,
  count,
  setCategoryName,
  setCategoryCount,
  properties,
  setProperties,
  agent,
}) => {
  const handleAll = (count) => {
    setCategoryCount(count);
    setCategoryName("All");
    setProperties(agent.listings);
  };

  // Aquí deberías retornar algún contenido si es necesario
  return (
    <div>
      {/* Aquí irían los botones de categoría, por ejemplo */}
      <button onClick={() => handleAll(count)}>All</button>
      {/* Puedes agregar más botones de categorías aquí */}
    </div>
  );
};

export default Agentt;
