import React from "react";

import { Listing } from "../components";

const CasaListingItem = ({featured,width}) => {



  return (
    
    <Listing width={width}>
      <Listing.Top>
        <Listing.TopItem>
        <Listing.Image source={featured.image1} />
        
          <Listing.TopItemContainer>
            <Listing.TopItemInfo>
              <Listing.Icon></Listing.Icon>
              <Listing.Text location>{featured.location}</Listing.Text>
            </Listing.TopItemInfo>
          </Listing.TopItemContainer>
        </Listing.TopItem>
      </Listing.Top>
      <Listing.Bottom>
        <Listing.BottomItem>
          <Listing.Title>
            <Listing.Anchor to={`/property/${featured.id}`}>
              {featured.title}
            </Listing.Anchor>
            
          </Listing.Title>
          
          <Listing.Price>U$D {featured.price}</Listing.Price>
          <Listing.Button>
            <Listing.Anchor to={`/property/${featured.id}`}>
              Detalles
            </Listing.Anchor>
          </Listing.Button>
          <Listing.AgentContainer>
            {/* <Listing.AgentImageContainer>
              <Listing.Image
                src={`/images/agents/${featured.agent.image}`}
                profile="true"
              />
            </Listing.AgentImageContainer> */}
            {/* <Listing.AgentName>
              
              <Listing.Anchor to={`/agent/${1}`}>
                {featured.agent.name}
              </Listing.Anchor>
            </Listing.AgentName> */}
          </Listing.AgentContainer>
        </Listing.BottomItem>
      </Listing.Bottom>
    </Listing>
    
  );
}


const TerrenoListingItem = ({featured,width}) => {
  return (
    <Listing width={width}>
      <Listing.Top>
        <Listing.TopItem>
          <Listing.Image source={featured.image1} />
          <Listing.TopItemContainer>
            <Listing.TopItemInfo>
              <Listing.Icon></Listing.Icon>
              <Listing.Text location>{featured.location}</Listing.Text>
            </Listing.TopItemInfo>
          </Listing.TopItemContainer>
        </Listing.TopItem>
      </Listing.Top>
      <Listing.Bottom>
        <Listing.BottomItem>
          <Listing.Title>
            <Listing.Anchor to={`/property/${featured.id}`}>
              {featured.title}
            </Listing.Anchor>
          </Listing.Title>
          <Listing.Text>Mts 2 terreno: {featured.areal} mts2 </Listing.Text>
          <Listing.Text>Zonificacion: {featured.zoning}</Listing.Text>
          <Listing.Price>U$D {featured.price}</Listing.Price>
          <Listing.Button>
            <Listing.Anchor to={`/property/${featured.id}`}>
              Details
            </Listing.Anchor>
          </Listing.Button>
          <Listing.AgentContainer>
            {/* <Listing.AgentImageContainer>
              <Listing.Image
                src={`/images/agents/${featured.agent.image}`}
                profile="true"
              />
            </Listing.AgentImageContainer> */}
            {/* <Listing.AgentName>
              
              <Listing.Anchor to={`/agent/${1}`}>
                {featured.agent.name}
              </Listing.Anchor>
            </Listing.AgentName> */}
          </Listing.AgentContainer>
        </Listing.BottomItem>
      </Listing.Bottom>
    </Listing>
  );
}


const DepartamentoListingItem = ({featured,width}) => {
  return (
    <Listing width={width}>
      <Listing.Top>
        <Listing.TopItem>
          <Listing.Image source={featured.image1} />
          <Listing.TopItemContainer>
            <Listing.TopItemInfo>
              <Listing.Icon></Listing.Icon>
              <Listing.Text location>{featured.location}</Listing.Text>
            </Listing.TopItemInfo>
          </Listing.TopItemContainer>
        </Listing.TopItem>
      </Listing.Top>
      <Listing.Bottom>
        <Listing.BottomItem>
          <Listing.Title>
            <Listing.Anchor to={`/property/${featured.id}`}>
              {featured.title}
            </Listing.Anchor>
          </Listing.Title>
          <Listing.Text>Habitaciones: {featured.rooms} </Listing.Text>
          <Listing.Text>Baños: {featured.beths}</Listing.Text>
          <Listing.Price>U$D {featured.price}</Listing.Price>
          <Listing.Button>
            <Listing.Anchor to={`/property/${featured.id}`}>
              Details
            </Listing.Anchor>
          </Listing.Button>
          <Listing.AgentContainer>
            {/* <Listing.AgentImageContainer>
              <Listing.Image
                src={`/images/agents/${featured.agent.image}`}
                profile="true"
              />
            </Listing.AgentImageContainer> */}
            {/* <Listing.AgentName>
              
              <Listing.Anchor to={`/agent/${1}`}>
                {featured.agent.name}
              </Listing.Anchor>
            </Listing.AgentName> */}
          </Listing.AgentContainer>
        </Listing.BottomItem>
      </Listing.Bottom>
    </Listing>
  );
}


const CocheraListingItem = ({featured,width}) => {
  return (
    <Listing width={width}>
      <Listing.Top>
        <Listing.TopItem>
          <Listing.Image source={featured.image1} />
          <Listing.TopItemContainer>
            <Listing.TopItemInfo>
              <Listing.Icon></Listing.Icon>
              <Listing.Text location>{featured.location}</Listing.Text>
            </Listing.TopItemInfo>
          </Listing.TopItemContainer>
        </Listing.TopItem>
      </Listing.Top>
      <Listing.Bottom>
        <Listing.BottomItem>
          <Listing.Title>
            <Listing.Anchor to={`/property/${featured.id}`}>
              {featured.title}
            </Listing.Anchor>
          </Listing.Title>
          <Listing.Text>Tipo de cochera: {featured.type} </Listing.Text>
          <Listing.Text>Largo * Ancho: {featured.dimensions} mts</Listing.Text>
          <Listing.Price>U$D {featured.price}</Listing.Price>
          <Listing.Button>
            <Listing.Anchor to={`/property/${featured.id}`}>
              Details
            </Listing.Anchor>
          </Listing.Button>
          <Listing.AgentContainer>
            {/* <Listing.AgentImageContainer>
              <Listing.Image
                src={`/images/agents/${featured.agent.image}`}
                profile="true"
              />
            </Listing.AgentImageContainer> */}
            {/* <Listing.AgentName>
              
              <Listing.Anchor to={`/agent/${1}`}>
                {featured.agent.name}
              </Listing.Anchor>
            </Listing.AgentName> */}
          </Listing.AgentContainer>
        </Listing.BottomItem>
      </Listing.Bottom>
    </Listing>
  );
}


const LocalListingItem = ({featured,width}) => {
  return (
    <Listing width={width}>
      <Listing.Top>
        <Listing.TopItem>
          <Listing.Image source={featured.image1} />
          <Listing.TopItemContainer>
            <Listing.TopItemInfo>
              <Listing.Icon></Listing.Icon>
              <Listing.Text location>{featured.location}</Listing.Text>
            </Listing.TopItemInfo>
          </Listing.TopItemContainer>
        </Listing.TopItem>
      </Listing.Top>
      <Listing.Bottom>
        <Listing.BottomItem>
          <Listing.Title>
            <Listing.Anchor to={`/property/${featured.id}`}>
              {featured.title}
            </Listing.Anchor>
          </Listing.Title>
          <Listing.Text>Ambientes: {featured.rooms} </Listing.Text>
          <Listing.Text>Baños: {featured.beths}</Listing.Text>
          <Listing.Price>U$D {featured.price}</Listing.Price>
          <Listing.Button>
            <Listing.Anchor to={`/property/${featured.id}`}>
              Details
            </Listing.Anchor>
          </Listing.Button>
          <Listing.AgentContainer>
            {/* <Listing.AgentImageContainer>
              <Listing.Image
                src={`/images/agents/${featured.agent.image}`}
                profile="true"
              />
            </Listing.AgentImageContainer> */}
            {/* <Listing.AgentName>
              
              <Listing.Anchor to={`/agent/${1}`}>
                {featured.agent.name}
              </Listing.Anchor>
            </Listing.AgentName> */}
          </Listing.AgentContainer>
        </Listing.BottomItem>
      </Listing.Bottom>
    </Listing>
  );
}


const GalponListingItem = ({featured,width}) => {
  return (
    <Listing width={width}>
      <Listing.Top>
        <Listing.TopItem>
          <Listing.Image source={featured.image1} />
          <Listing.TopItemContainer>
            <Listing.TopItemInfo>
              <Listing.Icon></Listing.Icon>
              <Listing.Text location>{featured.location}</Listing.Text>
            </Listing.TopItemInfo>
          </Listing.TopItemContainer>
        </Listing.TopItem>
      </Listing.Top>
      <Listing.Bottom>
        <Listing.BottomItem>
          <Listing.Title>
            <Listing.Anchor to={`/property/${featured.id}`}>
              {featured.title}
            </Listing.Anchor>
          </Listing.Title>
          <Listing.Text>Mts 2 Cubiertos: {featured.areac} </Listing.Text>
          <Listing.Text>Mts 2 Libres: {featured.areal}</Listing.Text>
          <Listing.Price>U$D {featured.price}</Listing.Price>
          <Listing.Button>
            <Listing.Anchor to={`/property/${featured.id}`}>
              Details
            </Listing.Anchor>
          </Listing.Button>
          <Listing.AgentContainer>
            {/* <Listing.AgentImageContainer>
              <Listing.Image
                src={`/images/agents/${featured.agent.image}`}
                profile="true"
              />
            </Listing.AgentImageContainer> */}
            {/* <Listing.AgentName>
              
              <Listing.Anchor to={`/agent/${1}`}>
                {featured.agent.name}
              </Listing.Anchor>
            </Listing.AgentName> */}
          </Listing.AgentContainer>
        </Listing.BottomItem>
      </Listing.Bottom>
    </Listing>
  );
}


const getPropertyComponent = (type) => {
  if(type === "casas") return CasaListingItem;
  if(type === "terreno") return TerrenoListingItem;
  if(type === "galpon") return GalponListingItem;
  if(type === "local") return LocalListingItem;
  if(type === "cochera") return CocheraListingItem;
  if(type === "departamento") return DepartamentoListingItem;

  return null;
}



const ListingItemContainer = ({ featured, width }) => {  
  const Component = getPropertyComponent(featured._type);

  return <Component featured={featured} width={width} />
};

export default ListingItemContainer;
