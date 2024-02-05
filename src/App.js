import React from "react";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/homePage/Footer";
import StartPage from "./components/pages/StartPage";
import Loader from "./components/homePage/Loader";

const App = () => {
  return (
    <div>
      <Navbar />
      <StartPage />
      <Footer />
      <Loader />
    </div>
  );
};

export default App;
