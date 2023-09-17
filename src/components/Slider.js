import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, } from 'react'
import impges from '../assets/images'
const Slider = () => {

    const [width, setWidth] = React.useState()
    const [isOpen, setIsOpen] = React.useState(false)
    const carousel = React.useRef()


    // offset => item width visibl in side carousel
    useEffect(() => {
        carousel?.current && setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth)
    }, [])

    return (
        <>
            {/* <div className='slider-page'>
                <motion.div className='carousel' ref={carousel}
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div className='inner-carousel' drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                    >
                        {impges.map((img) => {
                            return (
                                <motion.div className='item'>
                                    <img src={img} alt='img' />
                                </motion.div >
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div> */}
            <motion.div
                layout
                transition={{
                    layout: { duration: 1, type: "spring" }
                }}
                layoutTransition="position"
                className='info-card'
                onClick={() => setIsOpen(!isOpen)}>
                <motion.h2 layoutTransition="position" >Framer motion</motion.h2>
                <motion.div initial={{
                    opacity: 0
                }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    {isOpen && (
                        <><p>lorem20
                            carousel?.current && setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth)
                        </p><p>lorem20
                            carousel?.current && setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth)
                            </p></>
                    )}


                </motion.div>
            </motion.div>
        </>
    )
}

export default Slider