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
}
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{
                scale: 1.2,
                color: '#f8e112',
                originX: 0 // scale 1.2 but in current position
              }}
              transition={{
                type: "spring",
                stiffness: 350
              }}
              key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </motion.div>
  )
}

export default Toppings;