import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

function GoToTopButton({ targetRef }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <button className="fixed bottom-10 right-10 bg-red-600 text-white p-3 rounded-full" onClick={() => targetRef.current.scrollIntoView({ behavior: "smooth" })}>
        <ArrowUp />
      </button>
    )
  );
}

export default GoToTopButton;
