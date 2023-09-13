import { Inter } from "@next/font/google";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
        body {
          background-color: #0b0b0b;
          color: #fff;
        }
      `}</style>
      <Head>
        <title>Lukas Greičius</title>
        <meta property="og:title" content="Lukas Greičius" />
        <meta property="og:site_name" content="Lukas Greičius"></meta>
        <meta
          name="description"
          content="Personal page of Lukas Greičius"
        ></meta>
        <meta
          property="og:description"
          content="Personal page of Lukas Greičius"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          media="(prefers-color-scheme: light)"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          media="(prefers-color-scheme: dark)"
          href="/favicon-white.ico"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
