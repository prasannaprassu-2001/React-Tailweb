import "../styles/Supporters.css";

import logo1 from "../assets/logos/co.png";
import logo2 from "../assets/logos/bill.png";
import logo3 from "../assets/logos/bank.png";
import logo4 from "../assets/logos/tata.png";
import logo5 from "../assets/logos/nasa.png";

const supporters = [logo1, logo2, logo3, logo4, logo5];

const Supporters = () => {
  return (
    <section className="egov-supporters py-5">
      <div className="container text-center">

        <h2 className="egov-support-title mb-5">
          <span className="light-text">Our</span> Supporters
        </h2>

        <div className="row justify-content-center align-items-center g-4">
          {supporters.map((logo, index) => (
          <div key={index} className="col-6 col-md-2 text-center">
  <div className="logo-box">
    <img
      src={logo}
      alt="supporter"
      className="support-logo"
    />
  </div>
</div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Supporters;