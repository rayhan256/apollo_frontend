import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";
export default function About() {
  return (
    <div>
      <section id="about" className="about">
        <Fade up>
          <div className="container"></div>
        </Fade>
        <div className="row gx-0">
          <Fade up>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="content">
                <h3>Who We Are</h3>
                <h2>We Are The Solution Of Your Business</h2>
                <p>
                  Apollo is a startup engaged in graphic design and information
                  technology. if you want to grow your business, have your own
                  profile page, and have a logo for your business. Then
                  you&apos;re in the right place.
                </p>
                <div className="text-center text-lg-start">
                  <Link href="#">
                    <div className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
          <Zoom out>
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
          </Zoom>
        </div>
      </section>
    </div>
  );
}
