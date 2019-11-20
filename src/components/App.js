import React from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./pages/home/Home";
import NosProduits from "./pages/nosProduits/NosProduits";
import NousTrouver from "./pages/nosTrouver/NousTrouver";
import Footer from "./footer/Footer";
import history from "../history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/nos-produits" exact component={NosProduits} />
        <Route path="/nous-trouver" exact component={NousTrouver} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
