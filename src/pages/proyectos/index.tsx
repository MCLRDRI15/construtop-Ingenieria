import Head from "next/head";
import { MainLayout } from "@layouts";
import CustomFooter from "src/components/footer/Footer";
import Modal from "src/components/modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalView,
  toggleModal,
  setProjectOrPersonForEdit,
} from "@actions/global";
import {
  bioIngenieria,
  estabilidad,
  cimentacion,
  aguas,
  viales,
  alcantarillado,
  acueducto,
} from "../../components/utils/projectsData";
import Image from "next/image";

export default function ProyectosPage() {
  const dispatch = useDispatch();
  const isOpen = useSelector<any, boolean>(
    (state) => state.globalReducer.isOpen
  );
  const modalView = useSelector<any, string>(
    (state) => state.globalReducer.modalView
  );

  const handleCloseModal = (): void => {
    dispatch(toggleModal());
  };
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
      <MainLayout currentPage={"Proyectos"} data={""}>
        <div className={`relative top-20 md:top-28`}>
          <div className="py-28 bg-gray-50">
            <div className="text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Obras de BioIngeniería
              </span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {bioIngenieria.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-2xl bg-gray-200 relative top-20 w-72 h-96 shadow-xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in my-3 mx-auto"
                  onClick={() => {
                    dispatch(setModalView("showImg")),
                      dispatch(toggleModal()),
                      dispatch(setProjectOrPersonForEdit(item));
                  }}
                >
                  <div className="p-3">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt="Obras civiles"
                      className="rounded-3xl z-10 absolute overflow-hidden object-cover"
                    />
                  </div>
                  <div className="text-center bg-gray-50 mx-2 rounded-md">
                    <span className="text-sm font-serif">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-28">
            <div className="text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Obras de Estabilidad
              </span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {estabilidad.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-2xl bg-gray-200 relative top-20 w-72 h-96 shadow-xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in my-3 mx-auto"
                  onClick={() => {
                    dispatch(setModalView("showImg")),
                      dispatch(toggleModal()),
                      dispatch(setProjectOrPersonForEdit(item));
                  }}
                >
                  <div className="p-3">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt="Obras civiles"
                      className="rounded-3xl z-10 absolute overflow-hidden object-cover"
                    />
                  </div>
                  <div className="text-center bg-gray-50 mx-2 rounded-md">
                    <span className="text-sm font-serif">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-28 bg-gray-50">
            <div className="text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Obras de manejo de Aguas y Escorrentía
              </span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {aguas.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-2xl bg-gray-200 relative top-20 w-72 h-96 shadow-xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in my-3 mx-auto"
                  onClick={() => {
                    dispatch(setModalView("showImg")),
                      dispatch(toggleModal()),
                      dispatch(setProjectOrPersonForEdit(item));
                  }}
                >
                  <div className="p-3">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt="Obras civiles"
                      className="rounded-3xl z-10 absolute overflow-hidden object-cover"
                    />
                  </div>
                  <div className="text-center bg-gray-50 mx-2 rounded-md">
                    <span className="text-sm font-serif">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-28">
            <div className="text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Obras de Alcantarillado
              </span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {alcantarillado.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-2xl bg-gray-200 relative top-20 w-72 h-96 shadow-xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in my-3 mx-auto"
                  onClick={() => {
                    dispatch(setModalView("showImg")),
                      dispatch(toggleModal()),
                      dispatch(setProjectOrPersonForEdit(item));
                  }}
                >
                  <div className="p-3">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt="Obras civiles"
                      className="rounded-3xl z-10 absolute overflow-hidden object-cover"
                    />
                  </div>
                  <div className="text-center bg-gray-50 mx-2 rounded-md">
                    <span className="text-sm font-serif">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-28 bg-gray-50">
            <div className="text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Obras de adecuación y construcción de Acueductos
              </span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {acueducto.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-2xl bg-gray-200 relative top-20 w-72 h-96 shadow-xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in my-3 mx-auto"
                  onClick={() => {
                    dispatch(setModalView("showImg")),
                      dispatch(toggleModal()),
                      dispatch(setProjectOrPersonForEdit(item));
                  }}
                >
                  <div className="p-3">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt="Obras civiles"
                      className="rounded-3xl z-10 absolute overflow-hidden object-cover"
                    />
                  </div>
                  <div className="text-center bg-gray-50 mx-2 rounded-md">
                    <span className="text-sm font-serif">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-28 ">
            <div className="text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Obras de Cimentación
              </span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {cimentacion.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-2xl bg-gray-200 relative top-20 w-72 h-96 shadow-xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in my-3 mx-auto"
                  onClick={() => {
                    dispatch(setModalView("showImg")),
                      dispatch(toggleModal()),
                      dispatch(setProjectOrPersonForEdit(item));
                  }}
                >
                  <div className="p-3">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt="Obras civiles"
                      className="rounded-3xl z-10 absolute overflow-hidden object-cover"
                    />
                  </div>
                  <div className="text-center bg-gray-50 mx-2 rounded-md">
                    <span className="text-sm font-serif">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-28 bg-gray-50">
            <div className="text-center">
              <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                Obras de urbanismos y Pavimentos.
              </span>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {viales.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-2xl bg-gray-200 relative top-20 w-72 h-96 shadow-xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in my-3 mx-auto"
                  onClick={() => {
                    dispatch(setModalView("showImg")),
                      dispatch(toggleModal()),
                      dispatch(setProjectOrPersonForEdit(item));
                  }}
                >
                  <div className="p-3">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt="Obras civiles"
                      className="rounded-3xl z-10 absolute overflow-hidden object-cover"
                    />
                  </div>
                  <div className="text-center bg-gray-50 mx-2 rounded-md">
                    <span className="text-sm font-serif">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border bg-gray-200 relative mx-auto mt-40 p-20">
              <div className="text-center mb-10">
                <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                  Construcción pavimentos Bosques del Cerro.
                </span>
              </div>
              <video
                width="500"
                height="140"
                controls
                className="m-auto rounded-lg shadow-2xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in"
              >
                <source src="../viales/viales-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="border bg-gray-200 relative mx-auto p-20">
              <div className="text-center mb-10">
                <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                  Obra de estabilidad reserva de Milán para la constructora Camú.
                </span>
              </div>
              <video
                width="500"
                height="140"
                controls
                className="m-auto rounded-lg shadow-2xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in"
              >
                <source src="../estabilidad/proyecto-camu.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="border bg-gray-200 relative mx-auto p-20">
              <div className="text-center mb-10">
                <span className="text-lg sm:text-3xl lg:text-5xl font-serif text-yellow-500 font-semibold">
                  Obras de alcantarillado Industria Licorera de Caldas.
                </span>
              </div>
              <video
                width="500"
                height="140"
                controls
                className="m-auto rounded-lg shadow-2xl shadow-gray-400 hover:shadow-blue-300 hover:scale-105 transition-all cursor-pointer duration-300 ease-in"
              >
                <source src="../manejoAguas/ILC.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full z-40">
          <CustomFooter />
        </div>
        <Modal
          showModal={isOpen}
          handleClose={() => dispatch(toggleModal())}
          setCloseModal={handleCloseModal}
          id={"ImageModalView"}
        ></Modal>
      </MainLayout>
    </>
  );
}
