import "../styles/Navbar.css";

const Navbar = ({ search, setSearch }) => {

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <nav className="navbar navbar-expand-xl custom-navbar shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold">
          <span className="text-danger">e</span>Gov
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Our Story</a></li>
                <li><a className="dropdown-item" href="#">Team</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Areas of work</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
              >
                Products & Solutions
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Health</a></li>
                <li><a className="dropdown-item" href="#">Finance</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#">Platform</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Ecosystem</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
          </ul>

          <div className="d-flex align-items-center gap-3 flex-wrap">

            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search ? (
                <span className="search-icon clear" onClick={clearSearch}>
                  ✖
                </span>
              ) : (
                <span className="search-icon">
                  🔍
                </span>
              )}
            </div>

            <button className="btn btn-danger px-3">
              Get Started
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;