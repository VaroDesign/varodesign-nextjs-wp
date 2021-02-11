import Head from 'next/document';
import Navbar from '../components/Navbar';
import Photos from '../components/portfolio/photos'

export default function Portfolio() {
  return (
        <div className="container row">
          <Navbar/>
          <Photos/>
        </div>
  )
}