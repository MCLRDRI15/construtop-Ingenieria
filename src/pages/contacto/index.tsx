import { useRef } from "react";
import Head from "next/head";
import { MainLayout } from "@layouts";
import Image from "next/image";
import {
  PhoneIncomingIcon,
  MailOpenIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import emailjs from "emailjs-com";
import contact from "../../assets/contact/contact.jpg";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

export default function BlogPage() {
  const captcha = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      emailjs
        .sendForm(
          "service_b2zho5t",
          "template_o7a2wit",
          e.target,
          "kTshzYUZarB9XBLtU"
        )
        .then((response) =>
          toast.success(`Tu mensaje ha sido enviado!`, {
            transition: bounce,
          })
        )
        .catch((error) =>
          toast.error(`Ha ocurrido un error en el envio!`, {
            transition: bounce,
          })
        );
      e.target.reset();
    } else {
      toast.error(`Por Favor acepta el Captcha`, {
        transition: bounce,
      });
    }
  };

  function onChange() {
    if (captcha.current.getValue()) {
      console.log("Usuario Verificado");
    }
  }
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
      <MainLayout currentPage={"Contacto"} data={""}>
        <div className={`relative top-32 md:top-40`}>
          <div className="sm:border rounded-lg border-gray-200 bg-gray-200 shadow-xl sm:shadow-gray-400 sm:p-4 mx-auto items-center w-11/12 sm:w-2/3">
            <div className="flex flex-col border items-center bg-gray-200 rounded-lg mb-10">
              <div>
                <Image
                  src={contact}
                  alt="Construtop"
                  className="rounded-t-lg"
                />
              </div>
              <div className="border border-gray-300 rounded-b-lg shadow w-full">
                <div className="text-center font-serif">
                  <span className="text-2xl">Contactanos.</span>
                  <form onSubmit={sendEmail}>
                    <div className="p-10 text-left lg:text-center">
                      <span className="text-sm font-semibold text-yellow-500">
                        Nombre:
                      </span>
                      <br></br>
                      <input
                        className="w-full lg:w-2/4 text-sm p-1 rounded-lg shadow-md border border-gray-400 my-1 focus:ring focus:outline-none focus:ring-yellow-500"
                        type="text"
                        name="Nombre"
                        placeholder="Nombre Persona/Empresa"
                        required
                      ></input>
                      <br></br>
                      <span className="text-sm font-semibold text-yellow-500">
                        Email:
                      </span>
                      <br></br>
                      <input
                        className="w-full lg:w-2/4 text-sm p-1 rounded-lg shadow-md border border-gray-400 my-1 focus:ring focus:outline-none focus:ring-yellow-500"
                        type="email"
                        name="Email"
                        placeholder="Email"
                        required
                      ></input>
                      <br></br>
                      <span className="text-sm font-semibold text-yellow-500">
                        Déjanos tu mensaje:
                      </span>
                      <br></br>
                      <textarea
                        className="w-full lg:w-2/4 text-sm p-1 rounded-lg shadow-md border border-gray-400 my-1 focus:ring focus:outline-none focus:ring-yellow-500"
                        name="Message"
                        placeholder="Mensaje"
                        required
                      ></textarea>
                      <br></br>
                      <div className="mx-auto flex content-center">
                        <div className="relative right-9 sm:right-0 sm:mx-auto">
                          <ReCAPTCHA
                            ref={captcha}
                            sitekey="6LcYHRMgAAAAALWi0p6cHdZxSvlFn07KDhEaMwpe"
                            onChange={onChange}
                            className="scale-75 sm:scale-100 items-center"
                          />
                        </div>
                      </div>
                      <br></br>
                      <button
                        type="submit"
                        className="w-full lg:w-1/4 text-lg rounded-lg shadow-md border text-white border-blue-400 bg-blue-400 my-1 focus:ring focus:outline-none focus:ring-yellow-500"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="items-center">
                <div className="py-4">
                  <div className="text-white text-center">
                    <div className="flex flex-col sm:flex-row items-center mr-2 mb-2">
                      <div className="border p-1 rounded-full bg-gray-400 items-center">
                        <PhoneIncomingIcon className="w-5 h-5 sm:w-3 sm:h-3" />
                      </div>
                      <span className="text-gray-700 text-xs font-sans font-medium ml-2 whitespace-pre-line">
                        (06)8914477 - 3206939832 - 3137165788
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row  items-center mr-2 mb-2">
                      <div className="border p-1 rounded-full bg-gray-400 items-center">
                        <MailOpenIcon className="w-5 h-5 sm:w-3 sm:h-3" />
                      </div>
                      <span className="text-gray-700 text-xs font-sans font-medium ml-2 whitespace-pre-line">
                        construtopingenieria@gmail.com
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row  items-center mr-2 mb-2">
                      <div className="border p-1 rounded-full bg-gray-400 items-center">
                        <LocationMarkerIcon className="w-5 h-5 sm:w-3 sm:h-3" />
                      </div>
                      <span className="text-gray-700 text-xs font-sans font-medium ml-2 whitespace-pre-line">
                        Calle 58A #24 - 28 Barrio la estrella - Manizales Caldas
                        - Colombia
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-4 items-center">
                  <iframe
                    className="border border-gray-300 rounded-xl shadow-xl shadow-gray-400 w-64 mx-auto sm:w-full sm:h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.2705101910665!2d-75.49245484914852!3d5.059840396309411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47659e08ffa95d%3A0x4c808078f8e6ed31!2sCl.%2058A%20%2324-24%2C%20Manizales%2C%20Caldas!5e0!3m2!1ses!2sco!4v1653164396789!5m2!1ses!2sco"
                    width="auto"
                    height="auto"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer transition={bounce} />
      </MainLayout>
    </>
  );
}
