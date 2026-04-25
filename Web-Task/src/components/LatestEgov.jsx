import { useState, useEffect } from "react";
import "../styles/LatestEgov.css";
import productsData from "../api/products";

const categories = ["All", "What's New", "Articles", "Case Studies", "Strategy Papers", "News & Media", "Videos"];

const ITEMS_PER_PAGE = 3;

const LatestEgov = ({ search }) => {
  const [products] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState("All");

  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // DEBOUNCE
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // LOADING SIMULATION
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [debouncedSearch, activeCategory]);

  //  FILTER
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

  //  PAGINATION
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedData = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  //  HIGHLIGHT TEXT
  const highlightText = (text) => {
    if (!debouncedSearch) return text;

    const regex = new RegExp(`(${debouncedSearch})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  };

  return (
    <section className="egov-latest py-5">
      <div className="container">

        <h2 className="egov-title">
          Latest at <span>eGov</span>
        </h2>

        <div className="egov-tabs mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`egov-tab ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="row g-4">

              {paginatedData.length > 0 ? (
                paginatedData.map((item) => (
                <div className="col-md-4" key={item.id}>
  <div className="egov-card h-100">

    <div className="egov-img-wrapper">
      <img src={item.image} alt="" />
    </div>

    <div className="egov-card-body">
      <h6
        dangerouslySetInnerHTML={{
          __html: highlightText(item.name),
        }}
      ></h6>

      <p className="price">{item.price}</p>

      <span className="badge bg-light text-dark">
        {item.category}
      </span>
    </div>

  </div>
</div>
                ))
              ) : (
                <p className="text-center mt-4">No results found</p>
              )}

            </div>

            <div className="pagination mt-4 text-center">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`page-btn ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default LatestEgov;