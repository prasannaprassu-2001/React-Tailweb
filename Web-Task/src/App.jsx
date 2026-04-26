import { useState, useRef } from "react";

import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import StatsFeatures from "./components/StatsFeatures";
import Reimagining from "./components/Reimagining";
import DigitHero from "./components/DigitHero";
import LatestEgov from "./components/LatestEgov";
import Supporters from "./components/Supporters";
import Footer from "./components/Footer";
import ScrollButtons from "./components/ScrollButtons";

function App() {
  const [search, setSearch] = useState("");
  const latestRef = useRef(null);

  return (
    <>
      <TopBar />

      <Navbar
        search={search}
        setSearch={(value) => {
          setSearch(value);

          // AUTO SCROLL
          if (value && latestRef.current) {
            latestRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      <Hero />
      <StatsFeatures />
      <Reimagining />
      <DigitHero />

      <div ref={latestRef}>
        <LatestEgov search={search} />
      </div>
      <Supporters/>
      <Footer/>
      <ScrollButtons/>
    </>
  );
}

export default App;