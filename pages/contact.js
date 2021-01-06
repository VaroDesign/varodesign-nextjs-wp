import Link from 'next/link';
import Head from 'next/head'

export default function Contact() {
  return (
    <div className="container">
    <div className="split left">
      <div className="centered">
        <h2>Jane Flex</h2>
        <p>Some text.</p>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <h2>John Doe</h2>
        <p>Some text here too.</p>
      </div>
    </div>
</div>
  )
}
