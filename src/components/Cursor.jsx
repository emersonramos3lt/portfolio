import { useEffect, useState } from "react"
import { motion } from "motion/react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0, });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x:e.clientX, y:e.clientY })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

  return (
    <motion.div className='w-[30px] h-[30px] rounded-[50%] bg-rose-500 fixed z-10 hidden lg:block' animate={{ x: position.x+2, y: position.y+2 }} >
    </motion.div>
  )
}

export default Cursor