import Document, { Head, Html, Main, NextScript } from 'next/document';

export const GoogleFontUrl = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital@1&family=Inter:wght@400;600';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="de" id="top">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href={`${GoogleFontUrl}&display=swap`} rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-white-200 text-black">
          {/* Needed as workaround until https://github.com/vercel/next.js/issues/18769 is resolved ¯\_(ツ)_/¯ */}
          <script>0</script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
