import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  AgentItemContainer,
  FooterContainer,
} from "../containers";
import { Section } from "../components";

// Suponiendo que tienes una función para obtener la lista de agentes
import { agents} from "../dev-data/agents"; // Ajusta la ruta según tu estructura de proyecto

const Agents = () => {
  const [agentsList, setAgentsList] = useState([]);

  useEffect(() => {
    const loadAgents = async () => {
      try {
        const agents = await agents ();
        setAgentsList(agents);
      } catch (error) {
        console.error("Error al cargar la lista de agentes:", error);
      }
    };
    loadAgents();
  }, []);

  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Header>
            <Section.Title>Sobre nosotros</Section.Title>
            <Section.Text>
              JL Inmobiliaria, fundada en el año 2000 por el visionario José Luis, se ha consolidado como un referente en el sector inmobiliario. Con más de tres décadas de experiencia y un catálogo de más de 300 propiedades en alquiler, brindamos garantía y seguridad a cada propietario que confía en nosotros. Además, hemos concretado más de 200 ventas exitosas, ayudando a nuestros clientes a encontrar el hogar de sus sueños. Desde sus inicios, JL Inmobiliaria ha trabajado para ofrecer soluciones habitacionales personalizadas, convirtiendo sueños en realidad. Hoy, seguimos liderando el mercado con la misma pasión y dedicación que José Luis imprimió en nuestra empresa.
            </Section.Text>
          </Section.Header>
          <Section.Content>
            {agentsList.map((agent) => (
              <AgentItemContainer key={agent.id} agent={agent} />
            ))}
          </Section.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Agents;
