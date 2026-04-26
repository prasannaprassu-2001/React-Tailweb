import { useEffect, useState } from "react";

const ScrollButtons = () => {
  const [show, setShow] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10;

      setAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        background: "#e53935",
        color: "white",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        zIndex: 999,
      }}
      title={atBottom ? "Go to Top" : "Go to Bottom"}
    >
        <span style={{ color: "#000", fontSize: "20px", fontWeight: "bold" }}>
        {atBottom ? "↑" : "↓"}
      </span>
    </button>
  );
};

export default ScrollButtons;