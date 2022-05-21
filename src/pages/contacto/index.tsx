import Head from "next/head";
import { MainLayout } from "@layouts";
import Image from "next/image";
import {
  PhoneIncomingIcon,
  MailOpenIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import construtop from "../../assets/ConstrutopIng.png";
import contact from "../../assets/contact/contact.jpg";

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
      <MainLayout currentPage={"Contacto"} data={""}>
        <div className={`relative top-32 md:top-40`}>
          <div className="sm:border sm:rounded-md border-gray-200 bg-gray-200 shadow-xl sm:shadow-gray-400 sm:p-4 mx-auto items-center sm:w-2/3">
            <div className="flex flex-col border items-center bg-gray-200 rounded-lg">
              <div>
                <Image
                  src={contact}
                  alt="Construtop"
                  className="rounded-t-lg"
                />
              </div>
              <div className="items-center">
                <div className="py-4">
                  <div className="text-white text-center">
                    <div className="flex items-center mr-2 mb-2">
                      <div className="border p-1 rounded-full bg-gray-400 items-center">
                        <PhoneIncomingIcon className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700 text-xs font-sans font-medium ml-2 whitespace-nowrap">
                        (06)8914477 - 3206939832 - 3137165788
                      </span>
                    </div>
                    <div className="flex items-center mr-2 mb-2">
                      <div className="border p-1 rounded-full bg-gray-400 items-center">
                        <MailOpenIcon className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700 text-xs font-sans font-medium ml-2 whitespace-nowrap">
                        construtopingenieria@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center mr-2 mb-2">
                      <div className="border p-1 rounded-full bg-gray-400 items-center">
                        <LocationMarkerIcon className="w-3 h-3" />
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
      </MainLayout>
    </>
  );
}
