const price = (price) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  return price.format();
};
const agents = [
  {
    id: 1,
    name: "Ludmila Camiscia",
    email: "ludmilacamiscia@gmail.com",
    phone: "3416120037",
    address: "Belgrano 1012",
    county: "Carcaraña",
    town: "Santa Fe",
    photo: "agent2.jpg",

    about:
      "Ludmila Antonela Camiscia. Martillera publica y Corredora inmobiliaria Mat N° 1729. Graduada en Universidad Siglo XXI. ",
    social: {
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
  {
        id: 3,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 4,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
      {
        id: 5,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 6,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
  
      {
        id: 7,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 8,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  }
]

  
export default agents;
