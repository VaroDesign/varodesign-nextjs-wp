import Head from 'next/document';
import React, { useState } from 'react';

export default function Portfolio() {
  const [className, setClassName] = useState("")
  const myClick = () => {
    setClassName("some-class")
}

  return (
    <div className="container">
    <button onClick={myClick}>Click me</button>
    <div className={className}>Classname gets changes</div>
  </div>
  )
}