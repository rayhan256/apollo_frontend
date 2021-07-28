import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link href="/">
            <div className="logo d-flex align-items-center">
              <img src="/assets/img/asset-logo.png" alt="" />
              <span>Apollo</span>
            </div>
          </Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" href="#hero">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="#about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="#portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="#team">
                  Team
                </Link>
              </li>
              <li>
                <Link href="blog.html">Blog</Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="#contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="getstarted scrollto" href="#about">
                  Get Started
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}
