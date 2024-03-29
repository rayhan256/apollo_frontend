import React from "react";
import Fade from "react-reveal";
export default function Teams() {
  return (
    <div>
      <section id="team" className="team">
        <Fade up>
          <div className="container">
            <header className="section-header">
              <h2>Team</h2>
              <p>Our hard working team</p>
            </header>
            <div className="row gy-4">
              <Fade up>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Rayhan Rahmat Aziz</h4>
                      <span>
                        Programmer <br /> Marketing
                      </span>
                      <p>
                        Velit aut quia fugit et et. Dolorum ea voluptate vel
                        tempore tenetur ipsa quae aut. Ipsum exercitationem iure
                        minima enim corporis et voluptate.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>

              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Ai Tiya Suryani</h4>
                    <span>
                      Designer <br /> Marketing
                    </span>
                    <p>
                      Quo esse repellendus quia id. Est eum et accusantium
                      pariatur fugit nihil minima suscipit corporis. Voluptate
                      sed quas reiciendis animi neque sapiente.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Iqbal Zaenal Muttaqin</h4>
                    <span>
                      Programmer <br />
                      Marketing
                    </span>
                    <p>
                      Vero omnis enim consequatur. Voluptas consectetur unde qui
                      molestiae deserunt. Voluptates enim aut architecto porro
                      aspernatur molestiae modi.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Fachrizal Abi</h4>
                    <span>
                      Designer <br />
                      Marketing
                    </span>
                    <p>
                      Rerum voluptate non adipisci animi distinctio et deserunt
                      amet voluptas. Quia aut aliquid doloremque ut possimus
                      ipsum officia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
