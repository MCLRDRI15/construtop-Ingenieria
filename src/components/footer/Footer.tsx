import React from "react";
import Image from "next/image";
import {
  PhoneIncomingIcon,
  MailOpenIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import construtop from "../../assets/footerImage.png";

const CustomFooter = () => {
  return (
    <footer className="bg-gray-100 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] md:p-1">
        <div className="flex sm:w-96 items-center p-2">
          <div className="rounded-lg mr-3">
            <Image
              height={50}
              width={60}
              src={construtop}
              alt="Construtop"
              className="rounded-3xl shadow shadow-gray-300"
            />
          </div>
          <div className="w-68">
            <h1 className="text-sm lg:leading-normal font-semibold text-gray-600">
              <span className="text-yellow-500 font-serif font-bold">
                Somos |
              </span>
              | Construtop Ingenieria S.A.S
            </h1>
          </div>
        </div>
        <div className="border shadow-lg rounded-lg p-2 hidden md:inline-flex">
          <div className="flex flex-wrap text-white text-center">
            <div className="flex items-center mr-2">
              <div className="border p-1 rounded-full bg-gray-400 items-center">
                <PhoneIncomingIcon className="w-3 h-3" />
              </div>
              <span className="text-gray-700 text-xs font-sans font-medium">
                (06)8914477 - 3206939832 - 3137165788
              </span>
            </div>
            <div className="flex items-center mr-2">
              <div className="border p-1 rounded-full bg-gray-400 items-center">
                <MailOpenIcon className="w-3 h-3" />
              </div>
              <span className="text-gray-700 text-xs font-sans font-medium">
                construtopingenieria@gmail.com
              </span>
            </div>
            <div className="flex items-center mr-2">
              <div className="border p-1 rounded-full bg-gray-400 items-center">
                <LocationMarkerIcon className="w-3 h-3" />
              </div>
              <span className="text-gray-700 text-xs font-sans font-medium">
                Calle 58A #24 - 28 Barrio la estrella - Manizales Caldas -
                Colombia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
