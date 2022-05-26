import { MainLayout } from "@layouts";
import Carousel from "src/components/carousel/Carousel";
import { carouselData } from "../components/utils/carouselData";
import Head from "next/head";
import Image from "next/image";
import CustomFooter from "src/components/footer/Footer";

import brujula from "src/assets/nosotros/brujula.png";
import casco from "src/assets/nosotros/casco.png";
import retroexcavadora from "src/assets/nosotros/retroexcavadora.png";
import admin from "src/assets/nosotros/admin.png";
import tecnico from "src/assets/nosotros/tecnico.png";
import mercadeo from "src/assets/nosotros/mercadeo.png";
import identifica from "src/assets/identifica/identifica-1.png";
import identifica2 from "src/assets/identifica/identifica-2.png";

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
            <div className="lg:m-10 p-3 md:grid md:grid-col-2 md:grid-rows-2 md:grid-flow-col md:gap-4 mx-4 md:mx-14 lg:mx-44">
              <div className="border-2 border-dashed bg-gray-100 border-gray-600 hover:border-yellow-500 my-3  mx-auto rounded-2xl lg:w-96">
                <div className="flex flex-col content-around items-center">
                  <div className="border-2 border-yellow-500 rounded-full p-2 mx-4 my-4">
                    <Image
                      height={60}
                      width={70}
                      src={casco}
                      alt="Obras civiles"
                      className="shadow shadow-gray-300"
                    />
                  </div>
                  <div className="my-3 text-center mx-2">
                    <span className="font-serif">
                      La ejecución de Obras civiles a entidades Públicas y / o
                      Privadas y personas naturales.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed bg-gray-100 border-gray-600 hover:border-yellow-500  my-3  mx-auto rounded-2xl lg:w-96">
                <div className="flex flex-col content-around items-center">
                  <div className="border-2 border-yellow-500 rounded-full p-2 mx-4 my-4">
                    <Image
                      height={60}
                      width={70}
                      src={brujula}
                      alt="Obras civiles"
                      className="shadow shadow-gray-300"
                    />
                  </div>
                  <div className="my-3 text-center mx-2">
                    <span className="font-serif">
                      Actividades de arquitectura e ingeniería y actividades
                      conexas asesoramiento técnico.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed bg-gray-100 border-gray-600 hover:border-yellow-500  my-3  mx-auto rounded-2xl lg:w-96">
                <div className="flex flex-col content-around items-center">
                  <div className="border-2 border-yellow-500 rounded-full p-2 mx-4 my-4">
                    <Image
                      height={60}
                      width={70}
                      src={brujula}
                      alt="Obras civiles"
                      className="shadow shadow-gray-300"
                    />
                  </div>
                  <div className="my-3 text-center mx-2">
                    <span className="font-serif">
                      Actividades de arquitectura e ingeniería y actividades
                      conexas asesoramiento técnico.
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-dashed bg-gray-100 border-gray-600 hover:border-yellow-500  my-3  mx-auto rounded-2xl lg:w-96">
                <div className="flex flex-col content-around items-center">
                  <div className="border-2 border-yellow-500 rounded-full p-2 mx-4 my-4">
                    <Image
                      height={60}
                      width={70}
                      src={brujula}
                      alt="Obras civiles"
                      className="shadow shadow-gray-300"
                    />
                  </div>
                  <div className="my-3 text-center mx-2">
                    <span className="font-serif">
                      Actividades de arquitectura e ingeniería y actividades
                      conexas asesoramiento técnico.
                    </span>
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
