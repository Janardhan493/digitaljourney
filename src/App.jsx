import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SEO from "./components/SEO";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import BackgroundGlow from "./components/BackgroundGlow";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      setLoading(false);

      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO />

      <BackgroundGlow />

      <SmoothScroll />

      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;