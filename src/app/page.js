"use client";

import Particles from "@/components/magicui/particles";
import GoToTopButton from "@/components/my-component/GoToTopButton";
import Navbar from "@/components/my-component/Navbar";
import GetInTouch from "@/components/sections/GetInTouch";
import GithubSection from "@/components/sections/GithubSection";
import MainSection from "@/components/sections/MainSection";
import ProjectSection from "@/components/sections/ProjectSection";
import QuotesSection from "@/components/sections/QuotesSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TechStack from "@/components/sections/TechStack";
import GetInTouchSection from "@/components/sections/GetInTouch";
import { useRef } from "react";

export default function Home() {
  const mainRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const quoteRef = useRef(null);
  const githubRef = useRef(null);
  const projectRef = useRef(null);
  const getInTouchRef = useRef(null);

  return (
    <>
      <div className="bg-black text-white">
        <Particles className="absolute inset-0" quantity={200} ease={80} color={"#ffffff"} refresh />
        <Navbar refs={{ mainRef, servicesRef, skillsRef, quoteRef, githubRef, getInTouchRef }} className={"hidden md:flex"} />
        <div className="flex flex-col mx-8">
          <MainSection ref={mainRef} />
          <ServiceSection ref={servicesRef} />
          <TechStack ref={skillsRef} />
          <GithubSection ref={githubRef} />
          <ProjectSection ref={projectRef} />
          <QuotesSection ref={quoteRef} />
        </div>
        <GetInTouchSection ref={getInTouchRef} />
        <GoToTopButton targetRef={mainRef} />
      </div>
    </>
  );
}
