import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path='/' Component={LandingPage}/>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
