import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HeaderContainer,
  AgentItemContainer,
  FooterContainer,
} from "../containers";
import { getAgentList } from "../redux/actions/agentsAction";
import { Section } from "../components";

const Agents = () => {
  const dispatch = useDispatch();

  const agents = useSelector((state) => state.agentList);

  const { agents: agentsList } = agents;

  useEffect(() => {
    dispatch(getAgentList());
  }, [dispatch]);
  return (
    <>
      <HeaderContainer bg={false} />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Header>
            <Section.Title>Sobre nosotros</Section.Title>
            <Section.Text>JL Inmobiliaria, fundada en el año 2000 por el visionario José Luis, se ha consolidado como un referente en el sector inmobiliario. Con más de tres décadas de experiencia y un catálogo de más de 300 propiedades en alquiler, brindamos garantía y seguridad a cada propietario que confía en nosotros. Además, hemos concretado más de 200 ventas exitosas, ayudando a nuestros clientes a encontrar el hogar de sus sueños. Desde sus inicios, JL Inmobiliaria ha trabajado para ofrecer soluciones habitacionales personalizadas, convirtiendo sueños en realidad. Hoy, seguimos liderando el mercado con la misma pasión y dedicación que José Luis imprimió en nuestra empresa.</Section.Text>
          </Section.Header>
          <Section.Content>
            {agentsList.map((agent) => (
              <AgentItemContainer agent={agent} />
            ))}
          </Section.Content>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Agents;
