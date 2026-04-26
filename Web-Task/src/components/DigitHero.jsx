import "../styles/DigitHero.css";
import digitImg from "../assets/images/digit.png";
import AnimatedText from "./AnimatedText";

const DigitHero = () => {
  return (
    <section className="digit-hero">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 hero-left">

            <div className="logo">
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="dot blue"></span>
              <span className="dot red"></span>
              <span className="logo-text">DIGIT</span>
            </div>

            <p className="subtext">Our open source</p>

            <h1 className="title">
              <AnimatedText text="technology-for-good platform"/>
            </h1>

            <p className="desc">
              DIGIT, short for Digital Infrastructure for Governance,
              Inclusion and Transformation is eGov's open-source platform
              with reusable building blocks and shared data registries that
              can be used to build solutions in multiple sectors.
            </p>

            <button className="explore-btn">Explore the platform</button>
          </div>

          <div className="col-lg-6 text-center hero-right">
            <img src={digitImg} alt="digit" className="img-fluid" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitHero;