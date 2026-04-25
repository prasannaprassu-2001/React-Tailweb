import "../styles/StatsFeatures.css";
import medical from "../assets/images/medical.png"
const StatsFeatures = () => {
  return (
    <>
      <section className="stats-section">
        <div className="container">

          <div className="row align-items-center text-center text-md-start">

            <div className="col-md-3 mb-3">
              <h2 className="main-stat">1,000,000,100+</h2>
              <p className="stat-desc">
                Citizens impacted across India through digital solutions
              </p>
            </div>

            <div className="col-md-9">
              <div className="row text-center">

                <div className="col-6 col-md-3 stat-box">
                  <div className="stat-icon">👥</div>
                  <h6>1.1 Billion+</h6>
                  <p>Users reached</p>
                </div>

                <div className="col-6 col-md-3 stat-box">
                  <div className="stat-icon">❤️</div>
                  <h6>50+</h6>
                  <p>Partners</p>
                </div>

                <div className="col-6 col-md-3 stat-box">
                  <div className="stat-icon">🏛</div>
                  <h6>210+</h6>
                  <p>Projects delivered</p>
                </div>

                <div className="col-6 col-md-3 stat-box">
                  <div className="stat-icon">⚙️</div>
                  <h6>2 Bn</h6>
                  <p>Transactions processed</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="features-section container">

        <div className="row align-items-center">

          <div className="col-lg-4 mb-4">
            <h2 className="feature-title">
              Big problems need <br />
              <span>bold approaches</span>
            </h2>

            <div className="feature-buttons">
              <button className="btn active">Public Health</button>
              <button className="btn">Public Finance</button>
              <button className="btn">Local Governance</button>
              <button className="btn">Water & Sanitation</button>
            </div>
          </div>

<div className="col-lg-4 mb-4">
  <div className="feature-card pink">

    <div className="card-content">
      <h3>210+</h3>
      <p>Health Infrastructure Projects</p>
       <button className="btn btn-outline-danger btn-sm">Explore</button>
    </div>

    <div className="card-footer">
     
      <img src={medical} alt="medical" />
    </div>

  </div>
</div>

<div className="col-lg-4 mb-4">
  <div className="feature-card light">

    <div className="card-content">
      <h3>2 Bn</h3>
      <p>Digital Transactions Enabled</p>
      <button className="btn btn-outline-danger btn-sm">Explore</button>
    </div>

    <div className="card-footer">
    
      <img src={medical} alt="medical"/>
    </div>

  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default StatsFeatures;