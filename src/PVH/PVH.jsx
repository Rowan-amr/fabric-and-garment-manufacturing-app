import React from "react";
import "./PVH.css";
import PVHQualityManual from "./PVHQualityManual.png";

const PVH = () => {
  return (
    <div>
      <div className="GQM-total">
        <div className="GQM">
          <img src={PVHQualityManual} alt="GQM" className="GQM" />
        </div>
        <div className="PVH">
          <h3>PVH Global Quality and Compliance Standards</h3>
          <ul>
            <li>
              <h4>Restricted Substance List (RSL) Compliance:</h4>
              PVH enforces an RSL policy across all brand products, including
              apparel, footwear, trims, packaging, and home goods. This ensures
              that hazardous substances are either prohibited, limited, or
              phased out in accordance with global regulations to protect
              health, safety, and the environment. Suppliers must routinely
              check and update their practices to align with the latest RSL
              policies. Additionally, PVH provides suppliers with training
              materials and compliance workshops to ensure full understanding of
              the latest RSL guidelines.
            </li>

            <li>
              <h4>Raw Materials & Processing:</h4>
              All materials and components used in PVH products must comply with
              the RSL requirements. Suppliers are responsible for ensuring that
              raw materials meet compliance standards and do not introduce
              restricted substances into the supply chain. This includes
              maintaining proper documentation, sourcing materials from approved
              vendors, and conducting periodic compliance testing. Suppliers
              must also participate in scheduled audits and submit material test
              reports regularly.
            </li>
            <li>
              <h4>Worker Health & Safety:</h4>
              To safeguard workers from hazardous chemical exposure, PVH
              mandates strict chemical management policies. Suppliers must
              adhere to PVH's Supplier Guidelines to maintain a safe working
              environment and minimize emissions of volatile compounds. Regular
              audits and training sessions are required to ensure compliance
              with safety standards. Factories must implement proper ventilation
              systems, personal protective equipment (PPE) usage, and emergency
              response protocols for chemical handling.
            </li>
            <li>
              <h4>Finished Product Standards:</h4>
              Every product, component, and material provided to PVH must meet
              global RSL compliance requirements, ensuring safety for workers,
              consumers, and the environment. Suppliers must follow rigorous
              testing protocols and maintain records of compliance to ensure
              transparency and accountability. PVH also requires batch testing
              for high-risk materials and has implemented a digital tracking
              system for real-time monitoring of compliance status.
            </li>
            <li>
              <h4>Waste & Wastewater Management:</h4>
              Suppliers must follow the ZDHC Wastewater Guidelines to prevent
              chemical contamination in waste and wastewater streams. Regular
              monitoring and documentation of wastewater treatment processes are
              required to maintain compliance. Water treatment facilities must
              be periodically inspected, and all suppliers are required to
              submit water quality reports to PVH.
            </li>
            <li>
              <h4>RSL Testing & Compliance:</h4>
              Each chemical listed in the PVH RSL has an assigned CAS Registry
              Number, and approved laboratories conduct verification testing.
              Testing requirements differ by brand, and suppliers should consult
              the PVH Global Quality Manual or reach out to a PVH QA
              representative for specific details. Suppliers must also
              proactively address non-compliance issues and implement corrective
              measures when necessary. PVH provides an escalation protocol for
              repeated compliance failures, which may include additional
              testing, increased audit frequency, or business contract
              termination.
            </li>
            <li>
              <h4>Root Cause Analysis & Corrective Actions:</h4>
              PVH promotes Root Cause Analysis (RCA) for quality assurance. When
              RSL compliance issues arise, corrective actions are categorized
              as:
              <ul>
                <li>
                  <strong>Immediate CAP:</strong> Quick solutions to meet RSL
                  compliance, such as adjusting chemical formulations or
                  modifying production techniques. These are temporary fixes
                  implemented to prevent immediate non-compliance risks.
                </li>
                <li>
                  <strong>Sustainable CAP:</strong> Long-term preventive
                  measures, such as implementing continuous monitoring systems
                  and improving supplier training programs. These solutions aim
                  to eliminate the root cause of non-compliance.
                </li>
              </ul>
              Common causes of non-compliance include:
              <ul>
                <li>Insufficient employee training on RSL policies.</li>
                <li>
                  Failure to verify the compliance of purchased chemical
                  materials.
                </li>
                <li>
                  Process variations leading to contamination (e.g., incorrect
                  cure times, mixing incompatible chemicals).
                </li>
              </ul>
              Sustainable corrective measures may involve enhanced training,
              supplier collaborations, and improved procurement practices. PVH
              also supports suppliers through an improvement plan, which
              includes regular follow-ups and dedicated compliance support.
            </li>
            <li>
              <h4>Subcontractor Onboarding Process:</h4>
              PVH categorizes suppliers into:
              <ul>
                <li>
                  <strong>Level 1 Suppliers:</strong> Primary manufacturers
                  responsible for processes like cut/sew, embroidery, ironing,
                  and finishing. These suppliers are required to submit regular
                  compliance reports and undergo periodic audits. They must also
                  ensure full traceability of their materials and production
                  processes.
                </li>
                <li>
                  <strong>Level 2 Suppliers:</strong> Material suppliers and
                  processing units, including fabric mills, dye houses, trim
                  providers, and tanneries. These suppliers must adhere to
                  environmental and social compliance standards set by PVH. They
                  must also maintain transparency regarding material sourcing
                  and production methods.
                </li>
              </ul>
              Unauthorized subcontracting without PVH approval is considered
              non-compliant. To ensure adherence, vendors must complete the
              following onboarding steps before working with subcontractors:
              <ul>
                <li>
                  Submission of Business Request outlining subcontractor details
                  and intended scope of work.
                </li>
                <li>
                  Approval from PVH compliance team to verify subcontractor
                  credibility and past compliance records.
                </li>
                <li>
                  QA & Compliance Evaluation through site inspections and
                  documentation reviews.
                </li>
                <li>
                  Registration in Supplier Database to track compliance history.
                </li>
                <li>
                  Execution of Required Agreements to formalize commitments to
                  quality and safety standards.
                </li>
                <li>
                  Ongoing Compliance Oversight through audits, training
                  programs, and reporting mechanisms.
                </li>
              </ul>
              Unauthorized subcontracting may result in warnings, termination of
              business relations, or legal repercussions, depending on the
              severity of the violation. PVH also reserves the right to conduct
              surprise inspections at supplier facilities to ensure compliance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PVH;
