import React from "react";
import TextReveal from "../magicui/text-reveal";

function QuotesSection() {
  return (
    <>
      <div className="h-[200vh]">
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-transparent dark:bg-black">
          <TextReveal text={"We all need people who will give us feedback. That’s how we improve. - Bill Gates."} />
        </div>
      </div>
    </>
  );
}

export default QuotesSection;
