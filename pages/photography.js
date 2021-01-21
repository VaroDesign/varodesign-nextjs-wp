import Head from 'next/document';
import React, { useState } from 'react';

export default function Portfolio() {
  const show = "show"
  const [firstName, setFirstName] = useState(show)
  const [secondName, setSecondName] = useState(show)
  const [thirdName, setThirdName] = useState(show)

  const allClass = () => {
    setFirstName(show)
    setSecondName(show)
    setThirdName(show)
  }
  const firstClass = () => {
    if (secondName || thirdName  === show){
      setFirstName(show)
      setSecondName("")
      setThirdName("")
    }
    else setFirstName(show)
  }
  const secondClass = () => {
      if (firstName || thirdName === show){
        setFirstName("")
        setSecondName(show)
        setThirdName("")
      }
      else setSecondName(show)
  }
  const thirdClass = () => {
    if (firstName || secondName === show){
      setFirstName("")
      setSecondName("")
      setThirdName(show)
    }
    else setThirdName(show)
}

  return (
    <div className="container">
    <button onClick={allClass}>all</button>
    <button onClick={firstClass}>first</button>
    <button onClick={secondClass}>second</button>
    <button onClick={thirdClass}>third</button>
    <div className={`img ${firstName}`}>11111111111111</div>
    <div className={`img ${secondName}`}>22222222222222</div>
    <div className={`img ${thirdName}`}>33333333333333</div>
  </div>
  )
}