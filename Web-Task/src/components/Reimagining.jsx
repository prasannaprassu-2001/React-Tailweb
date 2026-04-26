import { useState } from "react";
import "../styles/Reimagining.css";

import digit from "../assets/images/digit.png";
import AnimatedText from "./AnimatedText";


const data = [
  {
    id: 1,
    name: "Sundar Pichai",
    quote: "A trusted partner in our digital journey towards Viksit Bharat.",
    img: digit
  },
  {
    id: 2,
    name: "Sudha Murty",
    quote: "eGov’s solutions have helped us deliver faster and more transparently.",
    img: digit
  },
  {
    id: 3,
    name: "Sundar Pichai",
    quote: "Innovation must be accessible to all.",
    img: digit
  },
  {
    id: 4,
    name: "Sudha Murty",
    quote: "Impact comes from consistent small steps.",
    img: digit
  }
];

const Reimagining = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = data.slice(index, index + 2);

  return (
    <section className="reimagining-section">
      <div className="container text-center">

        <p className="small-title">OUR IMPACT</p>

        <h2 className="main-title">
          20 years of reimagining for citizens and
          <span> <AnimatedText text="sustaining change"/></span>
        </h2>

        <p className="description">
          E-Governance is more than a suite of products — it enables transparent,
          accountable and inclusive systems across India.
        </p>

        <div className="row justify-content-center mt-5 g-4">

          {visibleCards.map((item) => (
            <div className="col-md-5" key={item.id}>
              <div className="impact-card-new">

                <div className="card-left">
                  <div className="quote-box">
                    <p>{item.quote}</p>
                    <span className="quote-icon">❝</span>
                  </div>
                </div>

                <div className="card-right">
                  <img src={item.img} alt={item.name} />
                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="dots mt-4">
          {data.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>

        <button className="about-btn mt-4" onClick={() => {
    const el = document.getElementById("about-us");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}>About Us</button>

      </div>
    </section>
  );
};

export default Reimagining;