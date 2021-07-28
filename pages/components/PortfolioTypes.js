import React from "react";
import Fade from "react-reveal/Fade";
export default function PortfolioTypes() {
  return (
    <div>
      <Fade up>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
}
