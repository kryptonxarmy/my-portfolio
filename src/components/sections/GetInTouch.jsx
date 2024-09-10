import React, { forwardRef } from "react";
import { MyForm } from "../my-component/MyForm";
import { Github, Linkedin, LinkedinIcon, Twitter } from "lucide-react";

const GetInTouch = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} id="main" className="w-full flex flex-col items-center px-4 pt-12 md:pt-[7em] bg-white text-black justify-center">
        <h1 className="text-6xl text-center font-extrabold text-gray-800">Get In Touch</h1>
        <div className="flex md:w-[70%] border rounded-xl shadow-2xl mt-6 flex-wrap justify-between items-center ">
          <div className="w-full md:w-1/3 p-6 ">
            <h1 className="text-3xl text-center md:text-start font-semibold tracking-wide">Please Give Me A Feedback 😊</h1>
            <p class="text-lg md:text-xl text-gray-400 mt-4">Your feedback helps me improve and deliver better results. Feel free to reach out and share your thoughts.</p>
            <div className="flex flex-col justify-start">
              <div className="mt-12 text-gray-400">
                <p>Follow me on:</p>
                <div className="flex space-x-4 mt-2">
                  <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-blue-500 transition">
                    <Twitter className="hover:text-sky-500" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-500 transition">
                    <LinkedinIcon className="hover:text-blue-600" />
                  </a>
                  <a href="https://github.com/kryptonxarmy" target="_blank" className="text-gray-400 hover:text-blue-500 transition">
                    <Github className="hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 md:h-[80vh] ">
            <div className="w-full p-8">
              <MyForm />
            </div>
          </div>
        </div>
        <footer className="w-full mt-10 md:mt-16 pb-12 md:pb-8 text-black text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Danu Wardana. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
});

export default GetInTouch;
