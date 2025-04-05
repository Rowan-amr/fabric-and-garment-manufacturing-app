import React from "react";
import "./cardComponent.css";

const Card = () => {
  const data = [
    {
      id: 1,
      title: "BURGEE-HZH",
      price: 109.95,
      description: "BURGEE HZH NAPAPIJRI 3 T Fleece",
      category: "Men's Clothing",
      image:
        "https://dogdaysofsummer.at/wp-content/uploads/2022/03/napapijri-hoodie-khakifarben-mit-logo-vintage-online-shop-second-hand-1-jpg.webp",
      rating: { rate: 3.9, count: 120 },
      color: "WHTIE HEREON",
    },
    {
      id: 2,
      title: "E-ZERI ",
      price: 74.3,
      description: "E-ZERI NAPAPIJRI POLO MEN",
      category: "Men's clothing",
      image:
        "https://img01.ztat.net/article/spp-media-p1/116586a105124ef4b332beade99758b2/12bd631e704846f1b787fbda9c346a2e.jpg?imwidth=1800",
      rating: { rate: 4.1, count: 259 },
      color: "APRICOT",
    },
    {
      id: 3,
      title: "K-BURGEE ",
      price: 55.99,
      description: "KIDS 3 T Fleece Hoodie",
      category: "Men's Clothing",
      image:
        "https://dz3aw12iizk17.cloudfront.net/cache/catalog/Napapijri_Kids/napapijri_kids_k_burgee_1_hoodie_blu_cb_1-870x1110.jpg",
      rating: { rate: 4.7, count: 500 },
      color: "BLU MARINE- FRENCH BLUE",
    },
    {
      id: 4,
      title: " BURI-C ",
      price: 135.99,
      description: "WOMEN 3 T Fleece Hoodie",
      category: "Women's clothing",
      image:
        "https://images.napapijri.com/is/image/Napapijri/NA4HJ9176-ALT1?wid=400&hei=464&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=0.9,1.0,8,0",
      rating: { rate: 2.1, count: 430 },
      color: "BLU MARINE",
    },
    {
      id: 5,
      title: "BURGEE-LO",
      price: 695,
      description: "BURGEE-LO 3 T Fleece Men Hoodie.",
      category: "Men's clothing",
      image:
        "https://dz3aw12iizk17.cloudfront.net/cache/catalog/Napapijri/napapijri_alymer_hoodie_black_1-870x1110.jpg",
      rating: { rate: 4.6, count: 400 },
      color: "BLACK BEAUTY",
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
          <p>
            Rating: {item.rating.rate} ({item.rating.count} reviews)
          </p>
          <p>Color: {item.color}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
