import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </Head>
      <body className="p-0 m-0 min-h-dvh overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
