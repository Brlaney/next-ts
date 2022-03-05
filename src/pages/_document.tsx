import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Mapbox cdn */}
          <link
            href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
};
