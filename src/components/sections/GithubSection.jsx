import { GithubIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import GitHubCalendar from "react-github-calendar";

function GithubSection() {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-8 justify-center">
        <div className="w-full flex md:flex-row flex-col items-center justify-center gap-4">
          <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
            <Image src="/img/person-bw.png" className="mx-auto" alt="person" width={120} height={120} />
            <div className="flex gap-1">
              <GithubIcon className="w-5" />
              <h1 className="text-center">kryptonxarmy</h1>
            </div>
          </div>
          <div className="bg-white/10 flex w-[80vw] items-center p-4 rounded-xl backdrop-blur-sm">
            <GitHubCalendar blockMargin={4} blockSize={16} username="kryptonxarmy" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubSection;
