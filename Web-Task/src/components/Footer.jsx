import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="egov-footer">

      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-4">
            <h3 className="egov-logo">
              <span className="text-danger">e</span>Gov
            </h3>

            <p className="egov-desc">
              Catalysing digital transformation in public service delivery at speed & scale.
            </p>

            <div className="egov-social">
              <span>f</span>
              <span>x</span>
              <span>in</span>
              <span>▶</span>
            </div>
          </div>

          <div className="col-lg-4">
            <h5 className="egov-footer-title">Useful Links</h5>

            <div className="row">
              <div className="col-6 footer-links">
                <a href="#">Home</a>
                <a href="#">Our Impact</a>
                <a href="#">DIGIT Sandbox</a>
              </div>

              <div className="col-6 footer-links">
                <a href="#">Our People</a>
                <a href="#">Financials</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <h5 className="egov-footer-title">Subscribe Now</h5>

            <p className="egov-sub-text">
              Receive regular updates of our monthly newsletter DOT – in your inbox.
            </p>

            <div className="egov-subscribe">
              <input type="email" placeholder="Enter Your Email" />
              <button>➤</button>
            </div>
          </div>

        </div>
      </div>

      <div className="egov-footer-bottom">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">

          <p className="mb-0">©2024. eGov. All Rights Reserved.</p>

          <div className="egov-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;