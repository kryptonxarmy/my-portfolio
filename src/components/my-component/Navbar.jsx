import React from "react";

function Navbar({ refs, className }) {
  const { mainRef, servicesRef, skillsRef, blogRef, contactRef } = refs;

  const handleScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={"w-screen hidden md:flex max-w-scren h-[10vh] fixed backdrop-blur-lg py-3 px-8 z-[99]"}>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4">
            <h1 className="text-3xl font-extrabold">
              D<span className="text-red-600">W</span>
            </h1>
          </div>
          <div className="">
            <ul className="flex gap-4 font-semibold">
              <li onClick={() => handleScrollToSection(mainRef)}>Home</li>
              <li onClick={() => handleScrollToSection(servicesRef)}>Services</li>
              <li onClick={() => handleScrollToSection(skillsRef)}>Skills</li>
              {/* <li onClick={() => handleScrollToSection(blogRef)}>Blog</li>
              <li onClick={() => handleScrollToSection(contactRef)}>Contact</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
