"use client";

import Image from "next/image";
import { CustomButton } from "@/components";
import HeroImage from "@/../public/hero.png";

export function Hero() {
  function handleScroll() {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily !
        </h1>

        <p className="hero_subtitle">
          Streamline your car rental experience with or effortless booking
          process.
        </p>
        <h1 className="text-sm">testes</h1>
        <CustomButton
          title="Explore Cars"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full  mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative wl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src={HeroImage} alt="hero" fill className="object-contain" />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </div>
  );
}
