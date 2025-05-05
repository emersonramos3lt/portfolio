import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorAnimation, setCursorAnimation] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#D75B5B",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorAnimation("text");
  const textLeave = () => setCursorAnimation("default");

  useState(() => {
    AOS.init();
  }, []);

  return (
    <header className="max-w-[90%] m-auto">
      <motion.div
        className="bg-rose-500 h-7 w-7 rounded-full hidden lg:block fixed top-0 left-0 pointer-events-none z-50"
        variants={variants}
        animate={cursorAnimation}
      />

      <nav
        className="p-2 pt-5 sm:p-8 sm:pt-auto flex justify-between items-center"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        <span className="sm:text-[1.4rem] font-extrabold cursor-pointer uppercase">
          Emerson Ramos<span className="text-rose-500">.</span>
        </span>

        <motion.a
          href="/curriculo.pdf"
          aria-label="Download my resume"
          download
          className="uppercase text-sm sm:text-lg font-extrabold transition-colors hover:text-zinc-700"
          title="Download Resume"
          whileHover={{ scale: 1.2, rotate: [0, 20, 0] }}
        >
          Resume
        </motion.a>
      </nav>

      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-center text-3xl sm:text-6xl lg:text-8xl font-extrabold lg:leading-[120px] text-zinc-900 mt-14"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        FULL STACK DEVELOPER WITH A PASSION FOR WEB DESIGN, UI/UX, AND CREATING
        STUNNING APPLICATIONS.
      </h1>
    </header>
  );
};

export default Header;
