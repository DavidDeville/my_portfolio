import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>David De ville | Développeur back-end</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Presentation/>
      </div>
      <Footer/>
    </div>
  );
}
