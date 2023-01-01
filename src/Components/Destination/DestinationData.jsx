const TaalPicture1 = require("../../assets/png/Taal/Taal1.jpg");
const TaalPicture2 = require("../../assets/png/Taal/Taal2.jpg");

const BaguioPicture1 = require("../../assets/png/Baguio/Baguio1.jpg");

export const DestinationData = [
  {
    title: "Taal Lake, Batangas",
    description:
      "" +
      `The Taal Lake, also known as Talisay Lake and Bombón Lake, is a
      circular fresh water lake located in the Province of Batangas, in
      Southern Luzon, a remarkable haven for tourists both local and
      foreign, for its alluring and majestic view. It is nestled on the
      mountainous ridge of Batangas that forms a part of the caldera and
      home to almost 39,000 peace-loving and God-fearing people. At the
      lake, you can board a Filipino-made motorized outrigger boat and
      enjoy a 30-minute ride across the lake to the village of Talisay on
      Volcano Island.`,
    button: "See More",
    ALT: "Taal Lake Picture",
    thumbnail1: TaalPicture1,
    thumbnail2: TaalPicture2,
  },

  {
    title: "Baguio Benguet Tour",
    description:
      "" +
      `Baguio is the top destination to go to if you want to take a break from the tropical heat in the lowlands. With average temperatures ranging from 15-23°C, 
       the city rarely experiences temperatures higher than 26°C even during the warmest parts of the year. 
       Because of this climate, Baguio is also home to beautiful plants that wouldn’t usually survive elsewhere in the county. Also nicknamed the City of Pines, 
       you’ll be in for a treat with all the beautiful flowers and lush vegetation as you enter the vicinity. It will truly feel as if you’re entering a different world.`,
    button: "See More",
    Itinerary: {
      Standard_Package: {
        1: "Teachers Camp",
        2: "Burnham Park ",
        3: "Botanical Garden",
        4: "Camp John Hay",
        5: "Picnic Grounds",
        6: "The Mansion ",
        7: "Wright Park",
        8: "Minesview Park",
        9: "Our Lady of Lourdes Grotto",
        10: "Strawberry Farm ",
      },
    },
    ALT: "Taal Lake Picture",
    thumbnail1: BaguioPicture1,
    thumbnail2: TaalPicture2,
  },
];
