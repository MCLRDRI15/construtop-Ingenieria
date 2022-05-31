import Head from "next/head";
import { MainLayout } from "@layouts";
import CustomFooter from "src/components/footer/Footer";
import { Tooltip } from "@inputs";
import Image from "next/image";

import alvaro from "src/assets/workTeam/alvaro.jpg";
import jennifer from "src/assets/workTeam/jennifer.jpg";
import contador from "src/assets/workTeam/contador.png";
import nelson from "src/assets/workTeam/nelson.png";

export default function BlogPage() {
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
      <MainLayout currentPage={"Blog"} data={""}>
        <div className={`bg-gray-50 relative top-20 md:top-28`}>
          <div className="py-16">
            <div className="mx-10 text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Conoce nuestro equipo
              </span>
            </div>
            <div className="p-5">
              <div className="flex flex-col items-center md:grid md:grid-col-2 md:grid-rows-2 md:grid-flow-col md:gap-4">
                <div className="relative w-full md:w-80 lg:w-96 h-64 overflow-hidden shadow-xl shadow-gray-500 my-3 md:ml-auto rounded-3xl">
                  <div className="absolute w-full flex flex-col content-around items-center z-20">
                    <div className="border-2 border-black  rounded-full  mx-4 my-4 overflow-hidden">
                      <Image
                        height={150}
                        width={150}
                        src={alvaro}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="text-center mx-2 absolute top-48">
                      <Tooltip
                        mode={"hover"}
                        content={
                          <div className="w-48 h-12 z-50 bg-gray-50 rounded-xl border border-gray-600 shadow-md shadow-gray-600 relative bottom-8 right-24 p-2">
                            <span className="whitespace-pre-line align-middle text-center text-lg font-serif text-black">
                              Representante Legal
                            </span>
                          </div>
                        }
                        direction={"bottom"}
                        additionalCssToolTip={"whitespace-nowrap ml-tooltip"}
                      >
                        <span className="font-serif text-yellow-500 text-lg rounded-lg p-1 font-medium">
                          Alvaro Castaño P.
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-80 lg:w-96 h-64 overflow-hidden shadow-xl shadow-gray-500 my-3 md:ml-auto rounded-3xl">
                  <div className="absolute w-full flex flex-col content-around items-center z-20">
                    <div className="border-2 border-black rounded-full mx-4 my-4 overflow-hidden">
                      <Image
                        height={150}
                        width={150}
                        src={nelson}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="text-center mx-2 absolute top-48">
                      <Tooltip
                        mode={"hover"}
                        content={
                          <div className="w-48 h-12 z-50 bg-gray-50 rounded-xl border border-gray-600 shadow-md shadow-gray-600 relative bottom-8 right-24 p-2">
                            <span className="whitespace-pre-line align-middle text-center font-serif text-lg text-black">
                              Profesional SST
                            </span>
                          </div>
                        }
                        direction={"bottom"}
                        additionalCssToolTip={"whitespace-nowrap ml-tooltip"}
                      >
                        <span className="font-serif text-yellow-500 text-lg rounded-lg p-1 font-medium">
                          Nelson Rios R.
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-80 lg:w-96 h-64 overflow-hidden shadow-xl shadow-gray-500 my-3 md:mr-auto rounded-3xl">
                  <div className="absolute w-full flex flex-col content-around items-center z-20">
                    <div className="border-2 border-black  rounded-full mx-4 my-4 overflow-hidden">
                      <Image
                        height={150}
                        width={150}
                        src={jennifer}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="text-center mx-2 absolute top-48">
                      <Tooltip
                        mode={"hover"}
                        content={
                          <div className="w-48 h-12 z-50 bg-gray-50 rounded-xl border border-gray-600 shadow-md shadow-gray-600 relative bottom-8 right-24 p-2">
                            <span className="whitespace-pre-line align-middle text-center font-serif text-lg text-black">
                              Asistente Contable
                            </span>
                          </div>
                        }
                        direction={"bottom"}
                        additionalCssToolTip={"whitespace-nowrap ml-tooltip"}
                      >
                        <span className="font-serif text-yellow-500 text-lg rounded-lg p-1 font-medium">
                          Jennifer Paola C.
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-80 lg:w-96 h-64 overflow-hidden shadow-xl shadow-gray-500 my-3 md:mr-auto rounded-3xl">
                  <div className="absolute w-full flex flex-col content-around items-center z-20">
                    <div className="border-2 border-black  rounded-full mx-4 my-4 overflow-hidden">
                      <Image
                        height={150}
                        width={150}
                        src={contador}
                        alt="Obras civiles"
                        className="shadow shadow-gray-300 object-cover"
                      />
                    </div>
                    <div className="text-center mx-2 absolute top-48">
                      <Tooltip
                        mode={"hover"}
                        content={
                          <div className="w-48 h-12 z-50 bg-gray-50 rounded-xl border border-gray-600 shadow-md shadow-gray-600 relative bottom-8 right-24 p-2">
                            <span className="whitespace-pre-line align-middle font-serif text-center text-lg text-black">
                              Contador
                            </span>
                          </div>
                        }
                        direction={"bottom"}
                        additionalCssToolTip={"whitespace-nowrap ml-tooltip"}
                      >
                        <span className="font-serif text-yellow-500 text-lg rounded-lg p-1 font-medium">
                          Jhon Jamer R.
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
    </>
  );
}
