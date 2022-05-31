import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { LinkIcon, ViewGridAddIcon } from "@heroicons/react/solid";

interface CarouselDataProps {
  dataImg: any[];
}

const MultipleCarousel = ({ dataImg }: CarouselDataProps) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="p-7 sm:p-10 border bg-yellow-500 lg:rounded-xl shadow-lg shadow-gray-500">
      <div className="p-3">
        <span className="text-xl md:text-3xl font-serif font-semibold text-gray-700">
          Nuestro Trabajo
        </span>
      </div>

      <Slider {...settings}>
        {dataImg.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <div className="mx-1">
              <Image
                width={950}
                height={750}
                src={item.image}
                alt={item.title}
                className="rounded-xl"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="border border-gray-300 rounded-lg shadow-md shadow-gray-400 hover:shadow-gray-500 bg-gray-200 mt-12 w-48 inline-block">
        <Link href="/proyectos">
          <a className="inline-flex w-full h-full p-1 cursor-pointer items-center font-serif text-gray-700 hover:text-red-600">
            <ViewGridAddIcon className="w-5 h-5 mx-3" /> Visita la Galeria...
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MultipleCarousel;
