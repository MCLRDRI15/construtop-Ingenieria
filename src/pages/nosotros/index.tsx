import Head from "next/head";
import { MainLayout } from "@layouts";
import {
  FingerPrintIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  SparklesIcon,
  ScaleIcon,
  LightBulbIcon,
  OfficeBuildingIcon,
  BriefcaseIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import CustomFooter from "src/components/footer/Footer";
import Image from "next/image";
import brujula from "src/assets/nosotros/brujula.png";
import casco from "src/assets/nosotros/casco.png";
import retroexcavadora from "src/assets/nosotros/retroexcavadora.png";
import admin from "src/assets/nosotros/admin.png";
import tecnico from "src/assets/nosotros/tecnico.png";
import mercadeo from "src/assets/nosotros/mercadeo.png";
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
        <div className={`relative top-20 md:top-28`}>
          <div className="py-10 bg-gray-50">
            <div className="mx-10 my-10 text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                LO QUE NOS IDENTIFICA
              </span>
            </div>
            <div className="sm:mx-10 lg:mx-40 my-6 sm:border border-gray-200 rounded-t-2xl sm:shadow-md shadow-gray-400 lg:flex lg::content-around">
              <div className="p-3 sm:p-10 overflow-hidden">
                <div className="relative overflow-hidden rounded-3xl items-center align-middle">
                  <div className="bg-blue-400 rounded-3xl z-20 my-1 opacity-0 hover:opacity-60 transition-all duration-800 ease-in w-full h-full absolute bottom-1 overflow-hidden flex flex-col items-center align-middle">
                    <FingerPrintIcon className="text-black w-10 sm:w-20 mt-auto text-opacity-100 align-middle" />
                    <span className="text-black text-center mb-auto text-lg sm:text-3xl font-serif">
                      Nuestra huella en cada obra
                    </span>
                  </div>
                  <Image
                    src={identifica2}
                    alt="Obras civiles"
                    className="rounded-3xl z-10 absolute overflow-hidden"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 md:my-6 mx-4 sm:mx-10">
                <span className="text-3xl font-serif font-semibold">
                  MISIÓN
                </span>
                <p className="my-5 text-md font-serif">
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
            <div className="sm:mx-10 lg:mx-40 my-6 sm:border border-gray-200 rounded-b-2xl sm:shadow-md shadow-gray-400 lg:flex lg::content-around">
              <div className="p-3 sm:p-10 text-center">
                <div className="relative overflow-hidden rounded-3xl text-center items-center align-middle">
                  <div className="bg-blue-400 rounded-3xl z-20 my-1 opacity-0 hover:opacity-60 transition-all duration-800 ease-in w-full h-full absolute bottom-1 text-center overflow-hidden flex flex-col items-center align-middle">
                    <ShieldCheckIcon className="text-black w-10 sm:w-20 mt-auto text-opacity-100 align-middle" />
                    <span className="text-black text-center mb-auto text-lg sm:text-3xl font-serif">
                      Nos inspira la Calidad
                    </span>
                  </div>
                  <Image
                    width={900}
                    height={600}
                    src={identifica}
                    alt="Obras civiles"
                    className="rounded-3xl"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 md:my-auto mx-4 sm:mx-10">
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
            <div className="mx-3 sm:mx-10">
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
            <div className="mx-auto lg:m-10 p-3 sm:flex sm:flex-wrap sm:content-around">
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
          <div className="bg-gray-50 py-10">
            <div className="mx-10 my-10 text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-gray-700 font-semibold">
                Nuestros Valores
              </span>
            </div>
            <div className="relative text-gray-700 mx-4 sm:mx-20 lg:mx-72 overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              ></input>
              <div className="bg-yellow-500 h-12 w-full pl-5 flex items-center rounded-t-xl border-b-2 shadow-md shadow-gray-400">
                <SparklesIcon className="w-7 h-6 mr-2 text-white" />
                <h1 className="text-lg font-semibold text-white">Excelencia</h1>
              </div>
              <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-180 peer-checked:rotate-0">
                <ChevronDownIcon className="w-7 h-7" />
              </div>
              <div className="bg-gray-200 mx-2 overflow-hidden transition-all duration-500 max-h-40 peer-checked:max-h-0">
                <div className="p-4">
                  <p>
                    Lograr los objetivos mediante la gestión eficiente de los
                    recursos.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative text-gray-700 mx-4 sm:mx-20 lg:mx-72  overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              ></input>
              <div className="bg-yellow-500 h-12 w-full pl-5 flex items-center shadow-md border-b-2 shadow-gray-400">
                <ScaleIcon className="w-7 h-6 mr-2 text-white" />
                <h1 className="text-lg font-semibold text-white">Integridad</h1>
              </div>
              <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <ChevronDownIcon className="w-7 h-7" />
              </div>
              <div className="bg-gray-200 mx-2 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="p-4">
                  <p>Actuar siempre de forma ética y transparente.</p>
                </div>
              </div>
            </div>
            <div className="relative text-gray-700 mx-4 sm:mx-20 lg:mx-72 overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              ></input>
              <div className="bg-yellow-500 h-12 w-full pl-5 flex items-center shadow-md border-b-2 shadow-gray-400">
                <LightBulbIcon className="w-7 h-6 mr-2 text-white" />
                <h1 className="text-lg font-semibold text-white">Innovación</h1>
              </div>
              <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <ChevronDownIcon className="w-7 h-7" />
              </div>
              <div className="bg-gray-200 mx-2 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="p-4">
                  <p>
                    Fomentar una cultura de mejora continua y el desarrollo de
                    nuevas soluciones.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative text-gray-700 mx-4 sm:mx-20 lg:mx-72  overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              ></input>
              <div className="bg-yellow-500 h-12 w-full pl-5 flex items-center shadow-md border-b-2 shadow-gray-400">
                <OfficeBuildingIcon className="w-7 h-6 mr-2 text-white" />
                <h1 className="text-lg font-semibold text-white">Trabajo</h1>
              </div>
              <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <ChevronDownIcon className="w-7 h-7" />
              </div>
              <div className="bg-gray-200 mx-2 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="p-4">
                  <p>
                    Trabajar de forma coordinada sobre la base de relaciones de
                    confianza con un objetivo común.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative text-gray-700 mx-4 sm:mx-20 lg:mx-72  overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              ></input>
              <div className="bg-yellow-500 h-12 w-full pl-5 flex items-center shadow-md border-b-2 shadow-gray-400">
                <BriefcaseIcon className="w-7 h-6 mr-2 text-white" />
                <h1 className="text-lg font-semibold text-white">
                  Orientación
                </h1>
              </div>
              <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <ChevronDownIcon className="w-7 h-7" />
              </div>
              <div className="bg-gray-200 mx-2 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="p-4">
                  <p>
                    Entender las necesidades de nuestros clientes y buscar altos
                    niveles de satisfacción.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative text-gray-700 mx-4 sm:mx-20 lg:mx-72 rounded-b-xl overflow-hidden">
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              ></input>
              <div className="bg-yellow-500 h-12 w-full pl-5 flex items-center rounded-b-xl shadow-md shadow-gray-400">
                <GlobeIcon className="w-7 h-6 mr-2 text-white" />
                <h1 className="text-lg font-semibold text-white">
                  Sustentabilidad
                </h1>
              </div>
              <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <ChevronDownIcon className="w-7 h-7" />
              </div>
              <div className="bg-gray-200 mx-2 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="p-4">
                  <p>
                    Actuar en armonía con el medio ambiente y las comunidades de
                    nuestra zona de influencia, promover la seguridad y cuidar
                    la salud de nuestros colaboradores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`py-10 mb-44`}
            style={{ background: "linear-gradient(to top, #8e9eab, #F8F8F8)" }}
          >
            <div className="p-4 shadow-lg shadow-gray-500 bg-gray-200 rounded-xl mx-4 md:mx-20 lg:mx-44">
              <div className="mx-auto rounded-xl lg:w-2/3 bg-gray-300 hover:bg-yellow-50">
                <div className="flex flex-col content-around items-center">
                  <div className="text-center my-4">
                    <div className="border border-gray-500 rounded-full p-2 mx-4">
                      <Image
                        height={60}
                        width={70}
                        src={mercadeo}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300"
                      />
                    </div>
                    <span className="font-serif text-2xl text-gray-600">
                      Mercadeo
                    </span>
                  </div>

                  <div className="my-3 text-center mx-2">
                    <p className="font-serif">
                      Hacer un análisis de lo general a lo particular de la
                      situación del mercado, para determinar la situación
                      social, económica y financiera, nivel de confiabilidad del
                      proyecto, oportunidades del mercado, existencia de
                      clientes, y cantidad demanda del tipo de proyecto.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto rounded-xl lg:w-2/3 my-5 bg-gray-300 hover:bg-yellow-50">
                <div className="flex flex-col content-around items-center">
                  <div className="text-center my-4">
                    <div className="border border-gray-500 rounded-full p-2 mx-4">
                      <Image
                        height={60}
                        width={70}
                        src={tecnico}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300"
                      />
                    </div>
                    <span className="font-serif text-2xl text-gray-600">
                      Técnico
                    </span>
                  </div>

                  <div className="my-3 text-center mx-2">
                    <p className="font-serif">
                      Realizar el análisis técnico, para definir bases en las
                      cuales debe enfocarse una arquitectura capaz de satisfacer
                      realmente las necesidades de la sociedad actual y que se
                      mantenga en equilibrio con nuestro medio ambiente y
                      cultural. Y definir proceso de construcción básico para el
                      desarrollo de proyectos de Obras Civiles, urbanismo y
                      estabilidad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto rounded-xl lg:w-2/3 my-5 bg-gray-300 hover:bg-yellow-50">
                <div className="flex flex-col content-around items-center">
                  <div className="text-center my-4">
                    <div className="border border-gray-500 rounded-full p-2 mx-10">
                      <Image
                        height={60}
                        width={70}
                        src={admin}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300"
                      />
                    </div>
                    <span className="font-serif text-2xl text-gray-600">
                      Administrativo
                    </span>
                  </div>

                  <div className="my-3 text-center mx-2">
                    <p className="font-serif">
                      Realizar un análisis administrativo, para definir las
                      necesidades de perfil del grupo empresarial y de personal
                      tanto de planta como del proyecto. estructura
                      organizacional, los estilos de dirección, los mecanismos
                      de control y políticas.
                    </p>
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
