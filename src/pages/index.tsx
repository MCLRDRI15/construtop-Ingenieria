import { MainLayout } from "@layouts";
import Image from "next/image";
import portada from "../assets/portada.jpeg";
import Carousel from "src/components/carousel/Carousel";
import Head from "next/head";

export default function Inicio() {
  return (
    <div>
      <Head>
        <title>Construtop Ingenieria</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <MainLayout currentPage={"Inicio"} data={""}>
        <div className={""}>
          <Carousel />
        </div>
      </MainLayout>
    </div>
  );
}
