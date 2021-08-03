import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import PricingBox from "../components/PricingBox";
export default function Pricing() {
  // "#65c600";
  // "#ff901c";
  // "#07d5c0":
  const features = [
    {
      name: "Basic",
      data: [
        "Personal Website/Portfolio",
        "1 page",
        "Responsive Design",
        "Source Code",
        "2x Revision",
        "1 day",
      ],
      price: 15,
      color: "#65c600",
    },
    {
      name: "Standart",
      data: [
        "Company Profile",
        "4 page",
        "Responsive Design",
        "Source Code",
        "Content Management System",
        "2x Revision",
        "Upload Content",
        "14 Days",
      ],
      price: 150,
      color: "#ff901c",
    },
    {
      name: "Bussiness",
      data: [
        "Full Custome Website ( Based On Requirement )",
        "Responsive Design",
        "Source Code",
        "Content Management System",
        "5x Revision",
        "Full Service",
        "30 days",
      ],
      price: "Contact Us",
      color: "#07d5c0",
    },
  ];
  return (
    <div>
      <section id="pricing" className="pricing">
        <Fade up>
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Pricing</h2>
              <p>Check our Pricing</p>
            </header>
            <Fade left>
              <div className="row gy-4" data-aos="fade-left">
                {features.map((val) => (
                  <Zoom in>
                    <div className="col-lg-4 col-md-6">
                      <PricingBox
                        key={Math.random()}
                        color={val.color}
                        plan={val.name}
                        price={val.price}
                        feature={val.data}
                      />
                    </div>
                  </Zoom>
                ))}
              </div>
            </Fade>
          </div>
        </Fade>
      </section>
    </div>
  );
}
