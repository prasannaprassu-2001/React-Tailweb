import "../styles/Hero.css";
import banner from "../assets/images/banner.png"
import AnimatedText from "./AnimatedText";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 hero-content">
            <p className="hero-subtitle">
              20 YEARS OF DIGITAL TRANSFORMATION
            </p>

            <h1>
              20 years of digital transformation in public service delivery
              <span className="highlight-text"> <AnimatedText text="It's Possible."/> </span>
            </h1>

            <p className="hero-desc">
              E-Governance initiatives are revolutionizing the way governments
              serve citizens—digitally by design, inclusive by default, and
              built for impact.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary-custom">Get in touch</button>

              <button className="btn-outline-custom d-flex align-items-center gap-2">
                ▶ Our journey
              </button>
            </div>
          </div>

          <div className="col-lg-6 hero-img-wrapper">
            <img src={banner} alt="hero" className="hero-img" />
          </div>

        </div>
      </div>

      <div className="hero-bg-shape"></div>
    </section>
  );
};

export default Hero;