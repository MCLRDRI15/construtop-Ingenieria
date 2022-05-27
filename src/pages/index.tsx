import { MainLayout } from "@layouts";
import Carousel from "src/components/carousel/Carousel";
import { carouselData } from "../components/utils/carouselData";
import Head from "next/head";
import Image from "next/image";
import CustomFooter from "src/components/footer/Footer";

import brujula from "src/assets/nosotros/brujula.png";
import estabilidad from "src/assets/index/estabilidad.jpeg";
import manejoAguas from "src/assets/index/manejoAguas.jpeg";
import urbanismos from "src/assets/index/urbanismos.jpg";
import viales from "src/assets/index/viales.jpg";

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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <MainLayout currentPage={"Inicio"} data={""}>
        <div className={"bg-gray-50 relative top-20 md:top-28"}>
          <div className="text-center text-black py-1 lg:py-10">
            <div className="lg:px-56">
              <Carousel dataImg={carouselData} />
            </div>
          </div>
          <div className="py-20">
            <div className="mx-10 text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Nos especializamos en:
              </span>
            </div>
            <div className="p-5">
              <div className="flex flex-col items-center md:grid md:grid-col-2 md:grid-rows-2 md:grid-flow-col md:gap-4">
                <div className="relative w-full md:w-80 lg:w-96 h-48 overflow-hidden border-2 bg-gray-100 border-gray-600 hover:border-yellow-500 hover:shadow-xl hover:shadow-gray-500 my-3 md:ml-auto rounded-2xl">
                  <div className="absolute w-full z-10 opacity-80">
                    <Image
                      height={500}
                      width={800}
                      src={estabilidad}
                      alt="Obras civiles"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute w-full flex flex-col content-around items-center z-20">
                    <div className="border-2 border-black bg-gray-50 rounded-full p-2 mx-4 my-4">
                      <Image
                        height={60}
                        width={70}
                        src={brujula}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="my-3 text-center mx-2">
                      <span className="font-serif text-yellow-500 bg-white rounded-lg p-1 font-medium">
                        Obras de estabilidad
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-80 lg:w-96 h-48 overflow-hidden border-2 bg-gray-100 border-gray-600 hover:border-yellow-500 hover:shadow-xl hover:shadow-gray-500 my-3  md:ml-auto rounded-2xl">
                  <div className="absolute w-full z-10 opacity-80">
                    <Image
                      height={500}
                      width={800}
                      src={manejoAguas}
                      alt="Obras civiles"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute w-full flex flex-col content-around items-center z-20">
                    <div className="border-2 border-black bg-gray-50 rounded-full p-2 mx-4 my-4">
                      <Image
                        height={60}
                        width={70}
                        src={brujula}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="my-3 text-center mx-2">
                      <span className="font-serif text-yellow-500 bg-white rounded-lg p-1 font-medium">
                        Manejo de aguas y de BioIngeniería
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-80 lg:w-96 h-48 overflow-hidden border-2 bg-gray-100 border-gray-600 hover:border-yellow-500 hover:shadow-xl hover:shadow-gray-500  my-3  md:mr-auto rounded-2xl">
                  <div className="absolute w-full z-10 opacity-80">
                    <Image
                      height={500}
                      width={800}
                      src={urbanismos}
                      alt="Obras civiles"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute w-full flex flex-col content-around items-center z-20">
                    <div className="border-2 border-black bg-gray-50 rounded-full p-2 mx-4 my-4">
                      <Image
                        height={60}
                        width={70}
                        src={brujula}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="my-3 text-center mx-2">
                      <span className="font-serif text-yellow-500 bg-white rounded-lg p-1 font-medium">
                        Urbanismos
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-80 lg:w-96 h-48 overflow-hidden border-2 bg-gray-100 border-gray-600 hover:border-yellow-500 hover:shadow-xl hover:shadow-gray-500 my-3  md:mr-auto rounded-2xl">
                  <div className="absolute w-full z-10 opacity-80">
                    <Image
                      height={500}
                      width={800}
                      src={viales}
                      alt="Obras civiles"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute w-full flex flex-col content-around items-center z-20">
                    <div className="border-2 border-black bg-gray-50 rounded-full p-2 mx-4 my-4">
                      <Image
                        height={60}
                        width={70}
                        src={brujula}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="my-3 text-center mx-2">
                      <span className="font-serif text-yellow-500 bg-white rounded-lg p-1 font-medium">
                        Obras Viales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full z-40">
          <CustomFooter />
        </div>
      </MainLayout>
    </div>
  );
}
