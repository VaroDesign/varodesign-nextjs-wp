import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '../components/Navbar';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Navbar />
          <Main />
          <NextScript />
          <script src="tagcanvas.min.js" type="text/javascript"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument