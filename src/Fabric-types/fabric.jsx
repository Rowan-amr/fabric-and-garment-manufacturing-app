import React, { useState } from "react";
import "./fabric.css";

const fabricData = [
  {
    title: "Single Jersey Fabrics",
    definition:
      "Single jersey is a lightweight knitted fabric made using a single set of needles, producing a smooth front and a slightly textured back.",
    types: [
      "Regular Single Jersey",
      "Pique Single Jersey",
      "Interlock Jersey",
      "Ribbed Jersey",
      "Jacquard Jersey",
      "Slub Jersey",
    ],
    applications: [
      "T-shirts",
      "Casual wear",
      "Baby clothes",
      "Cuffs, Collars, and Fitted garments",
      " High-end fashion garments.",
      "Relaxed casual wear",
    ],
    image:
      "https://4.imimg.com/data4/UA/WO/MY-28105299/single-jersey-fabric-1000x1000.jpg",
  },
  {
    title: "Rib Fabrics",
    definition:
      "A knitted textile with raised and recessed lines running parallel, commonly used for cuffs, collars, and trims.",
    types: ["1×1 Rib", "2×1 Rib", "2×2 Rib"],
    applications: ["Cuffs", "Necklines", "Waistbands"],
    image:
      "https://runtangtex.com/wp-content/uploads/2023/12/400gsm-5Wool-31Modal-58Polyester-6Spandex-Elastane-Rib-Knit-Fabric-155cm-LW26010-1.jpg",
  },
  {
    title: "Fleece Fabrics",
    definition:
      "A soft, warm, and insulating material made from synthetic fibers or blended with cotton.",
    types: ["2T Fleece", "3T Fleece"],
    applications: ["Hoodies", "Winter Clothing", "Tracksuits"],
    image:
      "https://gkfashionfabrics.com/cdn/shop/products/alpine-fleece-plain-fabric-with-matching-rib-336877_700x.jpg?v=1666814195",
  },
  {
    title: "Interlock Fabrics",
    definition:
      "A double-knit fabric made from two rows of interconnecting stitches, providing increased thickness and durability.",
    types: [],
    applications: ["Premium T-shirts", "Sportswear", "Babywear"],
    image:
      "https://www.croftmill.fr/images/pictures/2022/07-july-2022/interlocked_moss_green_jersey_fabric_cu_1-(product-player).jpg",
  },
  {
    title: "Piqué Fabric",
    definition: "A textured knit fabric with a raised, waffle-like pattern.",
    types: ["Single Piqué", "Double Piqué"],
    applications: ["Polo Shirts", "Golf Shirts"],
    image:
      "https://omtextilestore.com/wp-content/uploads/2024/01/Poly-cotton-pique.jpg",
  },
  {
    title: "Terry Fabric",
    definition:
      "Terry fabric is a knitted fabric with soft loops, often used for sweatshirts and towels due to its absorbency and texture.",
    types: ["French Terry", "Loopback Terry"],
    applications: ["Sweatshirts", "Loungewear", "Baby Clothing"],
    image:
      "https://runtangtex.com/wp-content/uploads/2023/11/420gsm-100Cotton-French-Terry-Knitted-Fabric-165cm.jpg",
  },
  {
    title: "Lycra/Spandex Fabrics",
    definition:
      "Lycra is a synthetic fiber known for its exceptional elasticity. It is often blended with other fibers for stretch and comfort.",
    types: ["Cotton Lycra", "Polyester Lycra"],
    applications: ["Leggings", "Athletic wear", "Swimwear"],
    image:
      "https://5.imimg.com/data5/WB/WN/MY-6778535/spandex-fabric-1000x1000.jpg",
  },
];

const FabricsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFabrics = fabricData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fabrictypes">
      <h2>Fabric Types</h2>
      <input
        type="text"
        placeholder="Search by fabric name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {filteredFabrics.map((item, index) => (
        <div className="fabric-card" key={index}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} className="fabric-image" />
          <p>{item.definition}</p>

          {item.types.length > 0 && (
            <div className="fabric-table">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Application</th>
                  </tr>
                </thead>
                <tbody>
                  {item.types.map((type, i) => (
                    <tr key={i}>
                      <td>{type}</td>
                      <td>{item.applications[i] || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {item.types.length === 0 && (
            <>
              <strong>Applications:</strong>
              <ul>
                {item.applications.map((app, i) => (
                  <li key={i}>{app}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FabricsPage;
