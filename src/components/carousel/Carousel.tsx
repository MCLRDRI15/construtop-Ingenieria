import React from "react";
import Image from "next/image";
import Slider from "react-slick";

interface CarouselDataProps {
  dataImg: any[];
}

const Carousel = ({ dataImg }: CarouselDataProps) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="p-7 sm:p-10 border bg-gray-300 lg:rounded-xl shadow-lg shadow-gray-500">
      <Slider {...settings}>
        {dataImg.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden">
            <div>
              <Image
                width={950}
                height={550}
                src={item.image}
                alt={item.title}
                className="rounded-xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
