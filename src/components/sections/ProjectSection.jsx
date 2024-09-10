import React from "react";
import { CardProject } from "../my-component/CardProject";
import { ArrowRightIcon } from "lucide-react";

function ProjectSection() {
  return (
    <>
      <div className="w-full mt-[5em]">
        <h1 className="text-center text-2xl md:text-4xl font-bold ">💻My Recent Project💻</h1>
        <div className="w-full flex flex-wrap justify-center gap-8 mt-8">
          <CardProject title={"Sehatku"} description={"Sebuah website sederhana untuk menyediakan layanan kesehatan"} />
          <CardProject title={"Sehatku"} description={"Sebuah website sederhana untuk menyediakan layanan kesehatan"} />
          <CardProject title={"Sehatku"} description={"Sebuah website sederhana untuk menyediakan layanan kesehatan"} />
          <CardProject title={"Sehatku"} description={"Sebuah website sederhana untuk menyediakan layanan kesehatan"} />
          <CardProject title={"Sehatku"} description={"Sebuah website sederhana untuk menyediakan layanan kesehatan"} />
        </div>
        <div className="flex w-full justify-center items-center  mt-10">
          <h1 className="text-center text-2xl font-bold">See More Project</h1>
          <ArrowRightIcon className="font-bold text-2xl" />
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
