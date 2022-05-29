import { MainLayout } from "@layouts";
import Carousel from "src/components/carousel/Carousel";
import { carouselData } from "../components/utils/carouselData";
import Head from "next/head";
import Link from "next/link";
import { Tooltip } from "@inputs";
import Image from "next/image";
import CustomFooter from "src/components/footer/Footer";
import aguasIcon from "src/assets/index/AguasIcon.png";
import estIcon from "src/assets/index/estIcon.png";
import urbanIcon from "src/assets/index/urbanIcon.png";
import vialIcon from "src/assets/index/vialIcon.png";
import estabilidad from "src/assets/index/estabilidad.jpeg";
import manejoAguas from "src/assets/index/manejoAguas.jpeg";
import urbanismos from "src/assets/index/urbanismos.jpg";
import viales from "src/assets/index/viales.jpg";
import { HandIcon, LinkIcon } from "@heroicons/react/solid";
import mainImage from "src/assets/index/mainImage.jpg";

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
          <div className="sm:mx-10 lg:mx-40 my-6 sm:border border-gray-200 rounded-t-2xl sm:shadow-md shadow-gray-400">
            <div className="p-3 sm:p-20 overflow-hidden">
              <div className="relative overflow-hidden rounded-3xl items-center align-middle">
                <div className="bg-yellow-200 rounded-3xl z-20 my-1 opacity-0 hover:opacity-60 transition-all duration-800 ease-in w-full h-full absolute bottom-1 overflow-hidden flex flex-col items-center align-middle">
                  <HandIcon className="text-black w-10 sm:w-20 mt-auto text-opacity-100 align-middle" />
                  <span className="text-black text-center mb-auto text-lg sm:text-3xl font-serif whitespace-pre-wrap">
                    Somos una empresa que trabaja con Calidad y responsabilidad
                  </span>
                </div>
                <Image
                  src={mainImage}
                  alt="Obras civiles"
                  className="rounded-3xl z-10 absolute overflow-hidden"
                />
              </div>
            </div>
            <div className="my-6 mx-8 sm:mx-16 text-center">
              <span className="text-3xl font-serif font-semibold">
                Construtop Ingenieria S.A.S
              </span>
              <p className="my-5 text-md font-serif">
                Somos una empresa dedicada a la construcción de obras civiles de
                urbanismos y de estabilidad, estamos comprometidos con la
                protección y promoción de la salud de todos nuestros
                trabajadores, procurando su integridad fisica mediante la
                identificación de peligros, evaluación y valoración de los
                riesgos y sus respectivos controles. El mejoramiento continuo de
                nuestros procesos y la protección del medio ambiente en sus
                diferentes centros de trabajo, reforzar y mantener una actitud
                positiva ante la prevención, preparación y eventual atención de
                una emergencia de cualquier naturaleza, incluyendo las asociadas
                a amenazas biosanitarias como el COVID-19.
              </p>
              <p className="my-5 text-md font-serif">
                Todos los niveles de dirección asumen la responsabilidad de
                promover un ambiente de trabajo sano y seguro, cumpliendo los
                requisitos legales aplicables, vinculando a las partes
                interesadas en el Sistema de Gestion de la Seguridad y la Salud
                en el trabajo y destinando los recursos humanos, fisicos y
                financieros necesarios para la gestión de la salud y la
                seguridad.
              </p>
              <p className="my-5 text-md font-serif">
                En nuestra empresa todos los programas desarrollados estarán
                orientados al fomento de una cultura preventiva y de auto
                cuidado, a la intervención de las condiciones de trabajo que
                puedan causar accidentes o enfermedades laborales, al control
                del ausentismo y a la preparación para emergencias.
              </p>
              <div className="border border-gray-300 rounded-lg shadow-md shadow-gray-200 hover:shadow-gray-400 w-48 inline-block">
                <Link href="/nosotros">
                  <a className="inline-flex w-full h-full p-1 cursor-pointer items-center font-serif text-yellow-500 hover:text-red-600">
                    <LinkIcon className="w-5 h-5 mx-3" /> conócenos mas...
                  </a>
                </Link>
              </div>
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
                    <div className="border-2 border-black bg-gray-50 rounded-full p-2 mx-4 my-4 overflow-hidden">
                      <Image
                        height={60}
                        width={70}
                        src={estIcon}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="text-center mx-2 absolute top-32">
                      <Tooltip
                        mode={"hover"}
                        content={
                          <div className="w-48 h-16 z-50 bg-gray-50 rounded-xl border border-gray-600 shadow-md shadow-gray-600 relative bottom-8 right-24 p-2">
                            <span className="whitespace-pre-line align-middle text-center text-sm text-black">
                              Obras de estabilidad para mitigación del riesgo
                            </span>
                          </div>
                        }
                        direction={"bottom"}
                        additionalCssToolTip={"whitespace-nowrap ml-tooltip"}
                      >
                        <span className="font-serif text-yellow-500 bg-white rounded-lg p-1 font-medium">
                          Obras de estabilidad
                        </span>
                      </Tooltip>
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
                    <div className="border-2 border-black bg-gray-50 rounded-full p-2 mx-4 my-4 overflow-hidden">
                      <Image
                        height={60}
                        width={70}
                        src={aguasIcon}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="my-3 text-center mx-2">
                      <Tooltip
                        mode={"hover"}
                        content={
                          <div className="w-56 h-auto z-50 bg-gray-50 rounded-xl border border-gray-600 shadow-md shadow-gray-600 relative bottom-20 right-28 p-2">
                            <span className="whitespace-pre-line align-middle text-center text-sm text-black">
                              - Construcción de acueducto y alcantarillado.
                            </span>
                            <br></br>
                            <span className="whitespace-pre-line align-middle text-center text-sm text-black">
                              - Viaducto y sistema de telemetría.
                            </span>
                            <br></br>
                            <span className="whitespace-pre-line align-middle text-center text-sm text-black">
                              - Manejo de aguas.
                            </span>
                          </div>
                        }
                        direction={"bottom"}
                        additionalCssToolTip={"whitespace-nowrap ml-tooltip"}
                      >
                        <span className="font-serif text-yellow-500 bg-white rounded-lg p-1 font-medium">
                          Manejo de aguas y BioIngeniería
                        </span>
                      </Tooltip>
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
                    <div className="border-2 border-black bg-gray-50 rounded-full p-2 mx-4 my-4 overflow-hidden">
                      <Image
                        height={60}
                        width={70}
                        src={urbanIcon}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="my-3 text-center mx-2">
                      <Tooltip
                        mode={"hover"}
                        content={
                          <div className="w-48 h-16 z-50 bg-gray-50 rounded-xl border border-gray-600 shadow-md shadow-gray-600 relative bottom-8 right-24 p-2">
                            <span className="whitespace-pre-line align-middle text-center text-sm text-black">
                              Servicios de topografía y obras urbanas.
                            </span>
                          </div>
                        }
                        direction={"bottom"}
                        additionalCssToolTip={"whitespace-nowrap ml-tooltip"}
                      >
                        <span className="font-serif text-yellow-500 bg-white rounded-lg p-1 font-medium">
                          Urbanismos
                        </span>
                      </Tooltip>
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
                    <div className="border-2 border-black bg-gray-50 rounded-full p-2 mx-4 my-4 overflow-hidden">
                      <Image
                        height={60}
                        width={70}
                        src={vialIcon}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="my-3 text-center mx-2">
                      <Tooltip
                        mode={"hover"}
                        content={
                          <div className="w-56 h-auto z-50 bg-gray-50 rounded-xl border border-gray-600 shadow-md shadow-gray-600 relative bottom-16 right-28 p-2">
                            <span className="whitespace-pre-line align-middle text-center text-sm text-black">
                              - Construcción, rehabilitación, Adecuación y
                              Mantenimiento de infraestructura vial.
                            </span>
                            <br></br>
                            <span className="whitespace-pre-line align-middle text-center text-sm text-black">
                              - Movimiento de tierras.
                            </span>
                            <br></br>
                          </div>
                        }
                        direction={"bottom"}
                        additionalCssToolTip={"whitespace-nowrap ml-tooltip"}
                      >
                        <span className="font-serif text-yellow-500 bg-white rounded-lg p-1 font-medium">
                          Obras Viales
                        </span>
                      </Tooltip>
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
