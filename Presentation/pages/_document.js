/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from "next/document";
const cacheBuster = "ffe7532d";
class CounterCultureDev extends Document {
  render() {
    return (
      <Html lang="en" id="here">
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href={`/manifest.json?ver=${cacheBuster}`} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="An open-source cloud application for counting stuff"
          />
          <meta name="robots" content="all" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@mrtills" />
          <meta property="og:title" content="Counter-Culture" />
          <meta
            property="og:description"
            content="An open-source cloud application for counting stuff"
          />
          <meta property="og:url" content="https://counter-culture.io" />
          <meta
            property="og:image"
            content="https://www.counter-culture.io/images/android-chrome-512x512.png"
          />
          <meta property="og:type" content="website" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`/images/apple-touch-icon.png?ver=${cacheBuster}`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`/images/favicon-32x32.png?ver=${cacheBuster}`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`/images/favicon-16x16.png?ver=${cacheBuster}`}
          />

          <link
            rel="shortcut icon"
            href={`../images/favicon-16x16.png?ver=${cacheBuster}`}
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href={`../css/reset.css?ver=${cacheBuster}`}
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href={`../css/site.css?ver=${cacheBuster}`}
          />
        </Head>
        <body id="menu">
          <Main />
          <NextScript />
          <script src="../js/bulma.js"></script>
        </body>
      </Html>
    );
  }
}

export default CounterCultureDev;
