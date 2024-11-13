import React, { useEffect, useState } from "react";
import { client } from "../client";  // Asegúrate de tener el cliente de Sanity configurado correctamente
import { Section } from "../components";
import { AgentItemContainer } from "../containers";

// Definimos la consulta para obtener los agentes destacados (ajusta según tu esquema en Sanity)
const AGENTS_QUERY = `*[_type == "agente" && featured == true] | order(name asc) {
  _id,
  name,
  photo,
  contact,
  email,
  "photoUrl": photo.asset->url
}`;

const FeaturedAgentsContainer = () => {
  const [agentsList, setAgentsList] = useState([]);

  useEffect(() => {
    // Obtenemos los agentes destacados de Sanity
    client.fetch(AGENTS_QUERY)
      .then((data) => setAgentsList(data))
      .catch((error) => console.error("Error fetching featured agents:", error));
  }, []);

  return (
    <Section bgColor="--bs-fade-info">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Nuestros Agentes</Section.Title>
        </Section.Header>
        <Section.Content>
          {agentsList.length > 0 ? (
            agentsList.map((agent) => (
              <AgentItemContainer key={agent._id} agent={agent} />
            ))
          ) : (
            <p>No hay agentes destacados en este momento.</p>
          )}
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default FeaturedAgentsContainer;
