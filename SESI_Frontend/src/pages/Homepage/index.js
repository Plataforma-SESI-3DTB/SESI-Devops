import React from "react";
import Footer from "../../components/Footer"
import Main from "../../components/Main"
import Header from "../../components/Header"
import './styleHome.css'

export default function Home() {
  return(
    <div className="Main">
      <Header />
      <div className="MainForm">
        <Main />
        <Footer />
      </div>
      
    </div>
  );
}