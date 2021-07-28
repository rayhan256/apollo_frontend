import React from "react";
import ValueBox from "../components/ValueBox";
import Fade from "react-reveal/Fade";
export default function Values() {
  return (
    <div>
      <section id="values" className="values">
        <Fade up>
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Our Values</h2>
              <p>Odit est perspiciatis laborum et dicta</p>
            </header>
            <div className="row">
              <div className="col-lg-4">
                <ValueBox />
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <ValueBox image="assets/img/values-2.png" />
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <ValueBox image="assets/img/values-3.png" />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
