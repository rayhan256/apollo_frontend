import React from "react";
import Fade from "react-reveal";
import PortfolioTypes from "../components/PortfolioTypes";
import PortfolioWrap from "../components/PortfolioWrap";
export default function Portfolios() {
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <Fade up>
          <div className="container">
            <header className="section-header">
              <h2>Portfolio</h2>
              <p>Check our latest work</p>
            </header>
            <PortfolioTypes />
            <Fade up>
              <div
                className="row gy-4 portfolio-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {[...Array(10)].map((i) => (
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <PortfolioWrap />
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </Fade>
      </section>
    </div>
  );
}
