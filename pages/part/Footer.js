import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        {/* <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div> */}

        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <img src="assets/img/asset-logo.png" alt="" />
                  <span>Apollo</span>
                </a>
                <p>
                  We are team of talented developers making websites and making
                  your idea live with us.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  Jalan Cluster Bali II No. A.39, <br /> Kecamatan Kiaracondong,
                  Kota Bandung, Jawa Barat
                  <br />
                  Indonesia <br />
                  <br />
                  <strong>Phone:</strong> +62 821-1692-1204
                  <br />
                  <strong>Email:</strong> serviceapollo.idn@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright
            <strong>
              <span> Apollo</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
