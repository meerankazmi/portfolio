import "../styles/tailwind.css";
import "../styles/main.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio by Kazmi</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
