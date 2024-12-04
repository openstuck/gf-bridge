const Footer = () => {
  return (
    <div className="footer-area pt-100">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="single-footer-widget">
              <img src="/logo.svg" alt="greenfolio" />

              <p>
                Greenfolio is driven by Roburna Labs, a prominent company
                specializing in the development of technological solutions for
                both web2 and web3.
              </p>
            </div>
          </div>

          <div className=" col-md-3" style={{ paddingLeft: "40px" }}>
            <div className="single-footer-widget">
              <h3>Follow Us</h3>

              <ul className="socil-link">
                <li>
                  <a
                    href="mailto:info@greenfolio.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-envelope" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/greenfoliotoken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/greenfolioannouncements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area pt-70">
        <div className="container">
          <div className="copy-right-wrap">
            <div className="text-center">
              <p>© 2024 Greenfolio . All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
