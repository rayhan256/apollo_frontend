import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import PricingBox from "../components/PricingBox";
export default function Pricing() {
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
                <Zoom in>
                  <div className="col-lg-3 col-md-6">
                    <PricingBox />
                  </div>
                </Zoom>
                <Zoom in>
                  <div className="col-lg-3 col-md-6">
                    <div className="box">
                      <span className="featured">Featured</span>
                      <h3 style={{ color: "#65c600" }}>Starter Plan</h3>
                      <div className="price">
                        <sup>$</sup>19<span> / mo</span>
                      </div>
                      <img
                        src="assets/img/pricing-starter.png"
                        className="img-fluid"
                        alt=""
                      />
                      <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li>
                      </ul>
                      <a href="#" className="btn-buy">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </Zoom>
                <Zoom in>
                  <div className="col-lg-3 col-md-6">
                    <div className="box">
                      <h3 style={{ color: "#ff901c" }}>Business Plan</h3>
                      <div className="price">
                        <sup>$</sup>29<span> / mo</span>
                      </div>
                      <img
                        src="assets/img/pricing-business.png"
                        className="img-fluid"
                        alt=""
                      />
                      <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li>Massa ultricies mi</li>
                      </ul>
                      <a href="#" className="btn-buy">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </Zoom>
                <Zoom in>
                  <div className="col-lg-3 col-md-6">
                    <div className="box">
                      <h3 style={{ color: "#ff0071" }}>Ultimate Plan</h3>
                      <div className="price">
                        <sup>$</sup>49<span> / mo</span>
                      </div>
                      <img
                        src="assets/img/pricing-ultimate.png"
                        className="img-fluid"
                        alt=""
                      />
                      <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li>Massa ultricies mi</li>
                      </ul>
                      <a href="#" className="btn-buy">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </Zoom>
              </div>
            </Fade>
          </div>
        </Fade>
      </section>
    </div>
  );
}
