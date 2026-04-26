import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"   // ✅ TRIGGERS ON SCROLL
      viewport={{ once: false, amount: 0.5 }}  // ✅ re-animates on scroll
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;