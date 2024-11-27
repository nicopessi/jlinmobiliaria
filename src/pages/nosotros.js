

import { Section } from "../components";


const Nosotros = () => {
  

  return (
    <>
      
      <Section bgColor="--bs-fade-info">
        <Section.InnerContainer>
          <Section.Header>
            <Section.Title style={{fontSize: "25px"}}>Sobre nosotros</Section.Title>
            <Section.Text style={{ textAlign: "justify", fontSize: "18px"}}>
              JL Inmobiliaria, fundada en el año 2000 por José Luis Rivero, se ha consolidado como un referente en el sector inmobiliario. Con más de tres décadas de experiencia y un catálogo de más de 300 propiedades en alquiler, brindamos garantía y seguridad a cada propietario que confía en nosotros. Además, hemos concretado más de 200 ventas exitosas, ayudando a nuestros clientes a encontrar el hogar de sus sueños. Desde sus inicios, JL Inmobiliaria ha trabajado para ofrecer soluciones habitacionales personalizadas, convirtiendo sueños en realidad. Hoy, seguimos liderando el mercado con la misma pasión y dedicación que José Luis imprimió en nuestra empresa.
            </Section.Text>
          </Section.Header>
          
        </Section.InnerContainer>
      </Section>
      
    </>
  );
};

export default Nosotros;
