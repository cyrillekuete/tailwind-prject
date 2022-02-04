import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gray-200 font-sans flex flex-col items-center">
      <Header />
      <Navbar />
      <Main />
      <Footer />
      <div>Hello</div>
    </div>
  );
}

export default App;
