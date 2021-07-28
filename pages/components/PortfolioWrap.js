import React from "react";
import Link from "next/link";
export default function PortfolioWrap() {
  return (
    <div>
      <div className="portfolio-wrap">
        <img
          src="assets/img/portfolio/portfolio-1.jpg"
          className="img-fluid"
          alt=""
        />
        <div className="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <div className="portfolio-links">
            <a
              href="assets/img/portfolio/portfolio-1.jpg"
              data-gallery="portfolioGallery"
              className="portfoio-lightbox"
              title="App 1"
            >
              <i className="bi bi-plus"></i>
            </a>
            <a href="#" title="More Details">
              <i className="bi bi-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
