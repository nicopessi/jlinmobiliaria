import {React, Image} from "react";
import { Footer } from "../components";
import '../components/footer/styles/style.css';


const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Container>
        <Footer.Content>
          <Footer.Item>
            <Footer.LogoFooter><img src={`${process.env.PUBLIC_URL}/images/logo/logojl.png`} alt="Logo" className="footer-logo" /></Footer.LogoFooter>
            <Footer.Text>
              Belgrano 1012 - Carcaraña - Santa Fe - Argentina
            </Footer.Text>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Icon name="fas fa-phone-alt" social="true" />
                <Footer.Text>+54 341 6120037</Footer.Text>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-whatsapp" social="true" />
                <Footer.Text>+54 341 6120037</Footer.Text>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="far fa-envelope" social="true" />
                <Footer.Text>ludmilacamiscia@gmail.com</Footer.Text>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
          <Footer.Item>
            <Footer.Subtitle>Enlaces Rápidos</Footer.Subtitle>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Anchor to="/">Inicio</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/listing">Propiedades</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/agents">Agente</Footer.Anchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Anchor to="/service">Servicios</Footer.Anchor>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
          <Footer.Item>
            <Footer.Subtitle>Social Links</Footer.Subtitle>
            <Footer.List>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-facebook-f" social="true" />{" "}
                <Footer.ExternalAnchor to="">Facebook</Footer.ExternalAnchor>
              </Footer.ListItem>
              <Footer.ListItem>
                <Footer.Icon name="fab fa-linkedin" social="true" />{" "}
                <Footer.ExternalAnchor to="">Linkedin</Footer.ExternalAnchor>
              </Footer.ListItem>              
              <Footer.ListItem>
                <Footer.Icon name="fab fa-instagram" social="true" />{" "}
                <Footer.ExternalAnchor to="https://www.instagram.com/jl.inmobi?igsh=aDc3cWo1dmlmaDk5">Instagram</Footer.ExternalAnchor>
              </Footer.ListItem>
            </Footer.List>
          </Footer.Item>
          
        </Footer.Content>
      </Footer.Container>
      <Footer.Bottom>
        <Footer.Container>
          <Footer.Text>&copy; JL inmobiliaria. All Rights Reserved</Footer.Text>
        </Footer.Container>
      </Footer.Bottom>
    </Footer>
  );
};

export default FooterContainer;
