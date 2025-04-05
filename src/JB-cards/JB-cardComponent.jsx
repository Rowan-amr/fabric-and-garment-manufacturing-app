import React from "react";
import "./JB-cardComponent.css";

const Card = () => {
  const data = [
    {
      id: 1,
      title: "PME LEGEND HOODIE",
      price: 109.95,
      description: "HOODIE 3 T FLEECE",
      category: "Men's Clothing",
      image: "https://media.s-bol.com/YRYZRB37PW2K/K01nLJ/550x825.jpg",
      rating: { rate: 7.9, count: 1198 },
      composition: "100% Cotton",
    },
    {
      id: 2,
      title: "PME LEGEND SWEATSHIRT ",
      price: 129.4,
      description: "SWEATSHIRT 2 T FLEECE",
      category: "Men's clothing",
      image:
        "https://bmn.xcdn.nl/images/pme-legend-sweater-american-classic-buckley-zwart_234874-zw-mv-4.jpg?f=rs:fit:0:0&s=5f",
      rating: { rate: 9.1, count: 2159 },
      composition: "95-5% Cotton Lycra",
    },
    {
      id: 3,
      title: "PME LEGEND POLO ",
      price: 79.99,
      description: "PIQUE LYCRA POLO",
      category: "Men's Clothing",
      composition: "90-10% Pique Lycra",
      image:
        "https://thefashionstore.b-cdn.net/products/2023/06/26/232234/0955f4b6-cd71-423e-9076-c43ae8ff187f_size608x912_cropCenter.jpg",
      rating: { rate: 7, count: 5901 },
    },
    {
      id: 4,
      title: " PME LEGEND BASIC T.SHIRT",
      price: 135.99,
      description: "SINGLE LYCRA BASIC",
      category: "Men's clothing",
      composition: "95-5% Cotton Lycra",
      image:
        "https://img01.ztat.net/article/spp-media-p1/99a72960ad3b42d7ae24b40c2f4c4df1/2cd13b57c3d041b48cb3439b8fb17234.jpg?imwidth=780",
      rating: { rate: 4.3, count: 958 },
    },
    {
      id: 5,
      title: "PME LEGEND SWEATSHIRT",
      price: 689,
      description: "SWEATSHIRT 3T COTTON ",
      composition: "100% COTTON",
      category: "Men's clothing",
      image:
        "https://webcdn.justbrands.nl/imgproxy/dzoxNTAw/w:1500/aHR0cHM6Ly93d3cucG1lLWxlZ2VuZC5jb20vbWVkaWEvMTczNjg4MzMzOC9jYXRhbG9nL3Byb2R1Y3QvdXBsb2FkL1BTVzAwMDA0NDAtNzAxMV9tb2RlbF8xLmpwZw",
      rating: { rate: 4.6, count: 400 },
    },
    // {
    // id: 6,
    //   // title: "Burgee-Z",
    //   // price: 49,
    //   // description: "Burgee Men Hoodie.",
    //   // category: "Men's Clothing",
    //   // image:
    //   //   "https://dz3aw12iizk17.cloudfront.net/cache/catalog/Napapijri/napapijri_alymer_hoodie_black_1-870x1110.jpg",
    //   // rating: { rate: 3.3, count: 400 },
    // },
  ];

  return (
    <div className="cards">
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p> Composition: {item.composition}</p>
          <p>
            Rating: {item.rating.rate} ({item.rating.count} reviews)
          </p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
