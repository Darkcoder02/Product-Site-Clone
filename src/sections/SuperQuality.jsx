import React from "react";
import Button from "../components/Button.jsx";
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-blue-500"> Super</span>
          <span className="text-blue-500"> Quality</span> shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Our meticulously crafted footwear is designed to enhance your
          experience, offering a blend of premium comfort and style. It delivers
          unparalleled quality, innovation, and a touch of elegance, ensuring
          your utmost satisfaction.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our commitment to meticulous attention and unwavering pursuit of
          excellence guarantees your contentment.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt='product detail'
          width={570}
          height={522}
          className='object-contain'></img>
      </div>
    </section>
  );
};

export default SuperQuality;
