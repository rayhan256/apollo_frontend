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
                <h2>
                  Expedita voluptas omnis cupiditate totam eveniet nobis sint
                  iste. Dolores est repellat corrupti reprehenderit.
                </h2>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate sed
                  et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                  corrupti.
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
