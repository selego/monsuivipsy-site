import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head />
        <body id="page-top">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
