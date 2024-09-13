import React, { forwardRef } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import BlurIn from "../magicui/blur-in";
import BlurInP from "../magicui/blur-in-p";
import { FadeText } from "../magicui/fade-text";
import { FadeImg } from "../magicui/fade-img";
import NavDock from "@/components/my-component/NavDock";
import GradualSpacing from "../magicui/gradual-spacing";
import TypingAnimation from "../magicui/typing-animation";

const MainSection = () => {
  return (
    <div id="main" className="px-4">
      <div className="flex flex-col md:flex-row pt-[5em] min-h-screen max-w-screen">
        {/* KIRI */}
        <div className="flex md:w-1/3 order-2 md:order-1 flex-col justify-center items-start gap-4 md:gap-6">
          <div className="w-full md:w-fit">
            <GradualSpacing className="font-display text-4xl lg:text-6xl font-bold tracking-[-0.1em] dark:text-white md:text-5xl md:leading-[4rem] lg:leading-[5rem]" text={"Danu Wardana"} />
          </div>
          <div className="w-full">
            <Separator className="w-24 md:w-8 mx-auto md:mx-0 bg-red-600" />
          </div>
          <div className="w-full md:w-fit">
            <TypingAnimation text={"S1 Information System"} className="text-sm md:text-lg lg:text-2xl font-normal dark:text-white" />
          </div>
          <button className="border-red-600 px-4 mx-auto md:mx-0 py-2 border-2 bg-transparent font-bold text-sm md:text-base lg:text-lg">Download CV</button>
        </div>
        {/* KIRI */}

        {/* TENGAH */}
        <div className="md:w-1/3 order-1 justify-center items-center">
          <div className="hidden md:block">
            <NavDock />
          </div>
          <div className="w-full">
            <FadeImg text={"/img/person.png"} />
          </div>
        </div>
        {/* TENGAH */}

        {/* KANAN */}
        <div className="flex order-3 w-full md:w-1/3 flex-col items-start justify-center mt-8 md:mt-0">
          <BlurIn duration={1} className="text-3xl md:text-5xl font-semibold" word={"I'm"} />
          <BlurIn duration={2} className="text-4xl md:text-6xl font-bold" word={"Fullstack Web Developer"} />
          <BlurInP
            className="text-base md:text-xl lg:text-2xl leading-5 md:leading-6 lg:leading-8 mt-4"
            duration={3}
            word={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui perferendis a officiis placeat, nemo quas quisquam voluptate esse iure."}
          />
          <FadeText className="mt-4 flex items-center gap-3 text-red-600 cursor-pointer font-semibold text-sm md:text-base lg:text-lg" text={"Learn More"} />
        </div>
        {/* KANAN */}
      </div>
    </div>
  );
};

export default MainSection;
