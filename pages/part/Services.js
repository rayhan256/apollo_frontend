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
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>

            <div className="row gy-4">
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox icon="bi bi-arrow-right" color="orange" />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox color="green" />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox color="red" />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox color="purple" />
                </div>
              </Fade>
              <Fade up>
                <div className="col-lg-4 col-md-6">
                  <ServiceBox color="pink" />
                </div>
              </Fade>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
