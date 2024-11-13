import React from "react";
import { Section } from "../components";

import {
  HeaderContainer,
  DashboardContainer,

  FooterContainer,
} from "../containers";

const Messages = () => {
  return (
    <>
      <HeaderContainer />
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <DashboardContainer title="Inbox Messages">
            
          </DashboardContainer>
        </Section.InnerContainer>
      </Section>
      <FooterContainer />
    </>
  );
};

export default Messages;
