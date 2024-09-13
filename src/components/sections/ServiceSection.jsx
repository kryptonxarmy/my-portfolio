import React, { forwardRef } from "react";
import { CardService } from "../my-component/Card";
import { Camera, Code, PencilRuler } from "lucide-react";
import { BorderBeamDemo } from "../my-component/BorderBeamDemo";

const ServiceSection = () => {
  return (
    <div id="services">
      <div className="flex flex-col min-h-screen max-w-screen mt-14">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-xl text-red-600 font-semibold text-center">SERVICE</h1>
          <h1 className="text-3xl md:text-5xl text-center font-semibold">What Am I Providing</h1>
          <p className="text-center md:w-1/2 mx-auto">If you want only of the following service please go on the contact section for special request, I'm so open to receive your request order</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 md-:gap-0 justify-around mt-10">
          <CardService title="UI/UX & Poster Design" description="Crafting visually stunning and user-friendly interfaces, along with captivating poster designs that leave a lasting impression." icon={<PencilRuler className="size-16" />} />
          <CardService title="Web Development" description="Building responsive, high-performance websites tailored to your business needs, ensuring seamless user experiences across all devices." icon={<Code className="size-16" />} />
          <CardService
            title="Photo & Videography"
            description="Capturing moments with precision and creativity, providing high-quality photos and videos that tell your story in the most compelling way."
            icon={<Camera className="size-16" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
