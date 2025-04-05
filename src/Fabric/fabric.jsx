import React from "react";
import "./services.css"; 
import processMap from "./processmap.png"; 

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Garment Manufacturing Process Map</h1>

      <div className="process-map">
        <img
          src={processMap}
          alt="Factory Process Map"
          className="process-image"
        />
      </div>

      <div className="process-steps">
        <h2>1. Fabric Reception & Pre-Production Stage</h2>
        <p>
          <strong>Receiving & Weighing Fabric:</strong> The fabric is received
          in large quantities, weighed, and checked for quality. This is a
          critical step to ensure the material meets the required
          specifications.
        </p>
        <p>
          <strong>Lab Testing & Approval:</strong> Before production begins,
          fabric is sent for lab testing. This includes testing for color
          fastness, shrinkage, strength, and other fabric properties. The
          approved fabric is marked for use.
        </p>
        <p>
          <strong>Quality Control at Incoming Stage:</strong> A thorough quality
          check is performed to ensure that the fabric meets industry standards
          for color, texture, and weight. Any defects found are documented and
          rectified.
        </p>
        <p>
          <strong>Pattern Making:</strong> Patterns are made.These are templates
          for garment sizes, ensuring consistency across production.
        </p>
        <p>
          <strong>Marker Making:</strong> The marker is a layout for fabric
          cutting. The most efficient layout is created to minimize waste,
          ensuring optimal fabric utilization.
        </p>
        <p>
          <strong>Fabric Preparation:</strong> Depending on the fabric, it may
          undergo pre-treatment such as washing or dyeing to achieve the desired
          color, texture, or finish before cutting.
        </p>

        <h2>2. Fabric Cutting & Printing</h2>
        <p>
          <strong>Fabric Cutting:</strong> The fabric is cut according to the
          patterns created earlier. This can be done manually or using automated
          cutting machines that provide precision and speed.
        </p>
        <p>
          <strong>Sticker Making & Labeling:</strong> Stickers and fabric labels
          are printed, which will be used for branding, care instructions, and
          size labeling. These are then attached to the cut fabric.
        </p>
        <p>
          <strong>Printing & Embellishment:</strong> This step includes any form
          of fabric printing, including screen printing or digital printing.
          Patterns, logos, or designs are applied at this stage. Additionally,
          embroidery may be done to add detailed designs.
        </p>
        <p>
          <strong>Vaseline or Elastane Application (if needed):</strong> If the
          garment requires elasticity (especially in activewear or stretch
          garments), elastane or vaseline is applied to the fabric for added
          stretch.
        </p>

        <h2>3. Sewing & Assembly</h2>
        <p>
          <strong>Sewing & Stitching:</strong> Fabric pieces are then sewn
          together on specialized machines. The sewing process involves
          attaching different parts of the garment (e.g., sleeves, collar,
          waistband) through a series of stitching operations.
        </p>
        <p>
          <strong>Washing:</strong> After sewing, garments go through a washing
          process (pre-wash or garment wash). This helps soften the fabric and
          pre-shrink it before final finishing.
        </p>
        <p>
          <strong>Ironing:</strong> Each garment is ironed to remove wrinkles
          and set the stitching. This process also helps ensure the final
          appearance is sharp and consistent.
        </p>

        <h2>4. Quality Control & Packing</h2>
        <p>
          <strong>Quality Control (AQL - Acceptable Quality Level):</strong> A
          thorough inspection process ensures that the garments meet the quality
          standards. A sample from each batch is checked for stitching, fabric
          defects, and finishing.
        </p>
        <p>
          <strong>Packing:</strong> Once the garments pass inspection, they are
          carefully folded, tagged, and packed into boxes. Each package is
          labeled with product details and shipped to distribution centers or
          directly to retailers.
        </p>

        <h2>5. Warehouse & Shipping</h2>
        <p>
          <strong>Unpacking & Double Check:</strong> The packed garments are
          received at the warehouse, where they are unpacked and double-checked
          for any mistakes or defects.
        </p>
        <p>
          <strong>Metal Detector:</strong> To ensure that no metal objects
          (e.g., pins, needles) remain in the garments, they are passed through
          a metal detector.
        </p>
        <p>
          <strong>Final Inspection:</strong> A final inspection is conducted to
          ensure that all products meet the brand’s standards for quality and
          compliance. Any garments that do not meet the specifications are
          removed from the shipment.
        </p>
        <p>
          <strong>Shipping:</strong> The garments are packed into shipping
          containers and dispatched to retailers or customers based on orders.
          This stage marks the completion of the garment production process.
        </p>
      </div>
    </div>
  );
};

export default Services;
