import React from "react";
import "./section.css";
import rolls from "./rolls.jpg";
const Section = () => {
  return (
    <section className="content-section">
      <div className="smallcontainer">
        <div className="text-content">
          <h2>Texile Planning </h2>
          <p>
            Fabric planning is a vital aspect of the apparel supply chain,
            ensuring the seamless coordination of material sourcing, allocation,
            and production timelines. It involves selecting the right fabrics
            based on quality, cost, and performance while aligning with brand
            specifications and manufacturing needs. Efficient fabric planning
            helps minimize waste, optimize inventory levels, and prevent
            production delays, ultimately improving supply chain efficiency and
            cost-effectiveness. Beyond procurement and allocation, fabric
            planning also integrates quality control, supplier evaluation, and
            risk management, ensuring materials meet durability, sustainability,
            and compliance standards. As the fashion industry evolves,
            leveraging data analytics and technology in fabric planning enhances
            forecasting accuracy, streamlines decision-making, and drives
            continuous process improvements
          </p>
        </div>
        <div className="image-content">
          <img src={rolls} alt="rolls" className="rolls" />
        </div>
      </div>
      <div className="styles-content">
        <h2>Textile Styles & Process Overview </h2>
        <p>
          Throughout my work in fabric planning and procurement, I’ve been
          involved in handling various styles for brands like{" "}
          <b>VF Corporation</b>,<b> Just Brands</b>, and <b>PVH</b>. This
          section showcases different fabric types, styles, and process flows
          used in production.
          <br />
          The goal is to present a structured overview of the materials and
          their applications while integrating some basic data analysis and
          process mapping. It’s a simple way to document and visualize my
          experience, combining both technical aspects of
          <br />
          fabric selection and production workflows.
        </p>
      </div>
    </section>
  );
};

export default Section;
