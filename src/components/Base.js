import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'



const containerVariants = {
  hidden: { // initial key animation
    x: "100vw",
    opacity: 0,
  },
  visible: { // animate key animation
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 1 }
  },
  exit: {
    x: "-100vw",
    transition: { base: "baseInOut" }
  }
}

const nextVarients = {
  initial: {
    x: "-100vw",
  },
  end: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,

    }
  }
}


const btnVarients = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255, 255,255)"
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      // initial={{ x: "100vw", }}
      // animate={{ x: 0 }}
      variants={containerVariants}
      initial="hidden"  // take initial animation from containerVariants hidden
      animate={"visible"} // take animation from containerVariants visible 
      exit={"exit"}
    // transition={{ type: "spring", delay: 1 }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              whileHover={{
                scale: 1.2,
                color: '#f8e112',
                originX: 0 // scale 1.2 but in current position
              }}
              transition={{
                type: "spring",
                stiffness: 350
              }}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVarients}
          initial="initial"
          animate={"end"}

        // initial={{ x: "-100vw" }} // withoutusing varients 
        // animate={{ x: 0 }}
        // transition={{
        //   type: "spring",
        //   stiffness: 120,
        // }}
        >
          <Link to="/toppings">
            <motion.button
              variants={btnVarients}
              animate="visible"
              initial={"hidden"}
              whileHover={"hover"}

            // whileHover={{
            //   scale: 1.1,
            //   textShadow: "0px 0px 8px rgb(255,255,255)",
            //   boxShadow: "0px 0px 8px rgb(255, 255,255)"
            // }}
            >

              Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

// initial animation 
// for end animation animate , 
// 0 means it's actual position


// while using varient we can give any thing key name just make sure
// we pass corrent key value in motion component from the containerVariants 
// so varients is just short form of start and end animation
export default Base;