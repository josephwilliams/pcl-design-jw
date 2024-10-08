import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeUpVariants}
      style={{
        backgroundColor: "#f0f0f0",
        padding: "2rem",
        margin: "1rem 0",
        textAlign: "center",
        fontSize: "1.5rem",
        borderRadius: "8px",
      }}
    >
      Im fading in as you scroll!
    </motion.div>
  );
};

export default FadeInComponent;
