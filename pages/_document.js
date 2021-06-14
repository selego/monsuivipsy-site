import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <script dangerouslySetInnerHTML={{__html:
        `var isProduction = window.location.href.indexOf("https://monsuivipsy") !== -1;
        (function (l, u, m, i, E, r, e) {
        l[m] = function () {
            (l[m].q = l[m].q || []).push(arguments);
        };
        var c = u.createElement("script"),
            h = u.getElementsByTagName("head")[0];
        c.type = "text/javascript";
        c.async = true;
        c.src = "https://lumiere.cleverapps.io/lib.js?a=" + i + "&n=" + E + "&c=" + JSON.stringify(r) + "&t=" + Date.now();
        h.appendChild(c);
        })(window, document, "lumiere", "app_h3LEvGuH6y7VzFNyWh9t0", "website", {
        debug: !isProduction,
        disable: !isProduction,
        recordNavigation: isProduction,
        recordUX: isProduction,
        });`
        .split("\n")
        .map((e) => e.trim())
        .join(""),
        }}
        />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;