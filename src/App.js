import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
