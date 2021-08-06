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
              <p>The Value If You're Using Our Services</p>
            </header>
            <div className="row">
              <div className="col-lg-4">
                <ValueBox
                  title="Make Your Bussiness Management More Structured"
                  desc="With the solutions we offer, we are committed to helping make your business management more structured."
                />
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <ValueBox
                  image="assets/img/values-2.png"
                  title="Go Online and Get More Profit"
                  desc="We'll help get your business on air. With that, your business will be known by many people both at home and abroad country."
                />
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <ValueBox
                  image="assets/img/values-3.png"
                  title="Make Your Task Easier"
                  desc="We offer solutions that can make your tasks complete quickly and structured."
                />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
