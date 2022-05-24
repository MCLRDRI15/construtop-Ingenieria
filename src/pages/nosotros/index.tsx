import Head from "next/head";
import { MainLayout } from "@layouts";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { Tooltip } from "src/components/inputs/tooltip/Tooltip";
import CustomFooter from "src/components/footer/Footer";
import Image from "next/image";
import brujula from "src/assets/nosotros/brujula.png";
import casco from "src/assets/nosotros/casco.png";
import retroexcavadora from "src/assets/nosotros/retroexcavadora.png";
import identifica from "src/assets/identifica/identifica-1.png";
import identifica2 from "src/assets/identifica/identifica-2.png";

export default function NosotrosPage() {
  return (
    <>
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
      <MainLayout currentPage={"Nosotros"} data={""}>
        <div className={`relative top-24 md:top-28`}>
          <div className="py-10 bg-gray-50">
            <div className="mx-10 text-center">
              <span className="text-3xl font-serif text-yellow-500 font-semibold">
                LO QUE NOS IDENTIFICA
              </span>
            </div>
            <div className="mx-10 my-6 border border-gray-100 rounded-t-2xl shadow-sm shadow-gray-400 lg:flex lg::content-around">
              <div className="p-10">
                <Image
                  src={identifica2}
                  alt="Obras civiles"
                  className="rounded-3xl"
                />
              </div>
              <div className="lg:w-2/3 md:my-auto mx-10">
                <span className="text-3xl font-serif font-semibold">
                  MISIÓN
                </span>
                <p className="mx-1 my-5 text-md font-serif">
                  Somos una empresa dedicada a diferentes actividades de la
                  ingeniería civil como construcción de obras civiles, Obras de
                  urbanismo y Obras de estabilidad, ofrecemos nuestro servicios
                  a empresas públicas y / o privadas y personas naturales,
                  siempre enmarcados dentro de una política de calidad en la
                  ejecución de las obras, compromiso social y el progreso para
                  la comunidad y un desarrollo humano sostenible en función del
                  bien común liderando el mercado por medio de la
                  responsabilidad, y eficiencia, lograr que todo nuestro
                  personal se sienta motivado y orgulloso de pertenecer a
                  nuestra organización, fomentando el control y la calidad en el
                  servicio, contando con mano de obra profesional idónea y con
                  experiencia en el área, utilizando las mejores prácticas de la
                  Ingeniería, utilizando tecnología de punta y fomentando la
                  investigación, con orientación a satisfacer las necesidades de
                  nuestros clientes.
                </p>
              </div>
            </div>
            <div className="mx-10 my-6 border border-gray-100 rounded-b-2xl shadow-sm shadow-gray-400 lg:flex lg::content-around">
              <div className="p-10 text-center">
                <Image
                  src={identifica}
                  alt="Obras civiles"
                  className="rounded-3xl"
                />
              </div>
              <div className="lg:w-2/3 md:my-auto mx-10">
                <span className="text-3xl font-serif font-semibold">
                  VISIÓN
                </span>
                <p className="mx-1 my-5 text-md font-serif">
                  Ser reconocidos como una empresa líder en la construcción de
                  obras civiles, Obras de Urbanismo y Obras de estabilidad, que
                  cuenta con tecnología de punta, tenemos Equipos, maquinaria,
                  para atender a nuestros clientes, nos dedicamos a la
                  Construcción de obras satisfaciendo a nuestros clientes por
                  medio de la Exigencia en el control de calidad de nuestros
                  productos terminados. Buscando siempre dar más de sí mismos y
                  con esto lograr la satisfacción del Cliente.
                </p>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="mx-10">
              <span className="text-3xl font-serif font-semibold">
                POLITICA DE CALIDAD
              </span>
              <p className="mx-1 my-5 text-md font-serif">
                CONSTRUTOP INGENIERIA S.A.S., realiza la construcción de obras
                civiles, Obras de Urbanismo y Obras estabilidad cumpliendo las
                especificaciones, siguiendo los Procedimientos debidamente
                preestablecidos, y utilizando los recursos Apropiados, que
                garanticen la satisfacción del cliente y la búsqueda de la
                Mejora continua.
              </p>
              <span className="text-3xl font-serif font-semibold">
                OBJETIVOS
              </span>
              <p className="mx-1 my-5 text-md font-serif">
                Tiene como objetivo general la construcción de obras de
                ingeniería civil, urbanismo y estabilidad y todos aquellos
                trabajos conexos de acondicionamiento en instalaciones
                hidráulicas, reparación y, mantenimiento preventivo y demás
                actividades relacionadas con nuestros servicios. Buscando
                satisfacer las necesidades del cliente, y tener un equilibrio
                con el medio ambiente.
              </p>
            </div>
            <div className="mx-auto lg:m-10 p-3 sm:flex sm:flex-wrap sm:content-around my-10">
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
                      src={retroexcavadora}
                      alt="Obras civiles"
                      className="shadow shadow-gray-300"
                    />
                  </div>
                  <div className="my-3 text-center mx-2">
                    <span className="font-serif">
                      Instalaciones hidráulicas y trabajos conexos.
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
    </>
  );
}
