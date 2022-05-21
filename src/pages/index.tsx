import { MainLayout } from "@layouts";
import Carousel from "src/components/carousel/Carousel";
import { carouselData } from "../components/utils/carouselData";
import Head from "next/head";
import CustomFooter from "src/components/footer/Footer";

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
        <div className={"bg-gray-100 relative top-24 md:top-32"}>
          <Carousel dataImg={carouselData} />
        </div>
        <div className="fixed bottom-0 w-full z-40">
          <CustomFooter />
        </div>
      </MainLayout>
    </div>
  );
}