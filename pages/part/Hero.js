import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <Fade up>
                <h1>We offer modern solutions for growing your business</h1>
              </Fade>
              <Fade up>
                <h2>
                  We are team of talented developers making websites and making
                  your idea live with us.
                </h2>
              </Fade>
              <Fade up>
                <div>
                  <div className="text-center text-lg-start">
                    <Link href="#about">
                      <div className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Get Started</span>
                        <i className="bi bi-arrow-right"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
            <Zoom out>
              <div className="col-lg-6 hero-img">
                <img
                  src="assets/img/hero-img.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </div>
  );
}
