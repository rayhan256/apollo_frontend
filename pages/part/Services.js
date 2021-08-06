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
                  <ServiceBox title="Web Application" color="orange" />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox
                    icon="bi bi-arrow-right"
                    color="blue"
                    title="Mobile Application"
                  />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox color="green" title="Web Design" />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox color="red" title="Logo Design" />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox color="purple" title="Product Design" />
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
