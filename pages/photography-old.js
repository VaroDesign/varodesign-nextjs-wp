import Head from 'next/document';
import Navbar from '../components/Navbar';
import Photos from '../components/portfolio/photos';
import React, { useEffect } from "react";

export default function Portfolio() {
  useEffect(function mount() {
    if (window.location.href.indexOf('photography') > -1) {
      document.getElementsByClassName('portfolio')[0].attributes[0].value="/icons/portfolio-active.svg";
  }
  });
  return (
        <div className="container row">
          <Navbar/>
          <Photos/>
        </div>
  )
}