import React from "react";
import Fade from "react-reveal/Fade";
import ServiceBox from "../components/ServiceBox";
export default function Services() {
  return (
    <div>
      <section id="services" className="services">
        <Fade up>
          <div className="container">
            <header className="section-header">
              <h2>Services</h2>
              <p>This Is The Service We Offer For Your Business</p>
            </header>
            <div className="row gy-4">
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox
                    title="Web Application"
                    color="orange"
                    desc="Need a full customize website ? we can handle it"
                  />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox
                    icon="bi bi-arrow-right"
                    color="blue"
                    title="Mobile Application"
                    desc="We're creating a mobile apps with newest technology"
                  />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox
                    color="green"
                    title="Web Design"
                    desc="We're create a full custom website design for your bussiness"
                  />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox
                    color="red"
                    title="Logo Design"
                    desc="Need a logo ? we can create it for your brands"
                  />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox
                    color="purple"
                    title="Product Design"
                    desc="We create a product mockup design for your product"
                  />
                </div>
              </Fade>
              {/* <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox color="pink" />
                </div>
              </Fade> */}
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
