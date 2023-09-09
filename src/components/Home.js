import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
const btnVarients = {

  visible: {
    x: [9, -30, 30, -30, 30, 0], // keyframe
    transition: {
      delay: 2
    }
  },
  hover: {
    scale: 1.1, // key freme
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255, 255,255)",
    transition: {
      yoyo: 10, // repeating keyfreame 10 times frame repet from it's original state(1) scale
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.3, duration: 1.3 }
  },
  exit: {
    x: "-100vw",
    transition: { base: "baseInOut" }
  }
}
const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    // initial={{
    //   opacity: 0
    // }}
    // animate={{ opacity: 1 }}
    // transition={{
    //   delay: 1.5,
    //   duration: 5,
    // }}
    >
      <motion.h2 animate={{

      }} >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={btnVarients}
          animate="visible"
          whileHover={"hover"}
        // whileHover={{
        //   scale: 1.1,
        //   textShadow: "0px 0px 8px rgb(255,255,255)",
        //   boxShadow: "0px 0px 8px rgb(255, 255,255)"
        // }}

        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}


// x  to left and right x+ => right , x- => left
// y  to up and y+ => down , y- => up 


export default Home;