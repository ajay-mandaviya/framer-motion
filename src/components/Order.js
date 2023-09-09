import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'
const containerVariants = {
  hidden: { // initial key animation
    x: "100vw",
    opacity: 0,
  },
  visible: { // animate key animation
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay: 0.5,
      when: "beforeChildren",
      mass: 0.4, // high mass mean move slower nad lower mass means mean think quickers
      damping: 2,  // control animation quick 0 means nothing
      staggerChildren: 0.4 // animation gap btwn two elements 
    },

  },
}


const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  }
}


const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = React.useState(true)

  setTimeout(() => {
    setShowTitle(false)
    setShowModal(true)
  }, 4000)


  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
    >

      <h2>Thank you for your order :)</h2>
      {/* <AnimatePresence>
        {showTitle && <motion.h2
          exit={{ y: -1000 }}
        >Thank you for your order :)</motion.h2>}
      </AnimatePresence> */}
      <motion.p variants={childVariants} >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}

      </motion.div>
    </motion.div>
  )
}

export default Order;


//Using AnimatePresence we must wrap chil to motion and exit animation prop in motion 