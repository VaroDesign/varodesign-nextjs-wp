import Link from 'next/link';
import Head from 'next/head'
import Navbar from '../components/Navbar';

import Video from '../components/homepage/video';

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <Navbar/>
        <h2>Contact</h2>
        <Video/>
      </div>
    </div>
  )
}
