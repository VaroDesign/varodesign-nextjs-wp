import Head from 'next/document';
import Photos from '../components/portfolio/photos'

export default function Portfolio() {
  return (
        <div className="container row">
          <Photos/>
        </div>
  )
}