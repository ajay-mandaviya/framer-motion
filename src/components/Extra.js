import React from "react";
import { motion } from "framer-motion";
const Extra = () => {
    const articles = [
        { id: 1, title: "Great times", excerpt: "Await you" },
        { id: 2, title: "Great times", excerpt: "Await you" },
        { id: 3, title: "Great times", excerpt: "Await you" },
        { id: 4, title: "Great times", excerpt: "Await you" },
        { id: 5, title: "Great times", excerpt: "Await you" },
        { id: 6, title: "Great times", excerpt: "Await you" },
    ];
    const [isBack, setIsBack] = React.useState(false);

    return (
        <div className="box-container">
            <div className={"articles"}>
                {articles.map((article, i) => (
                    <motion.div
                        key={article.id}
                        className={"article"}
                        initial={{
                            opacity: 0,
                            // translateX: i % 2 === 0 ? -50 : 50,
                            // translateY: -50,
                            // translateX: -50,
                            // translateY: -50
                        }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: i * 0.2
                        }}
                    >
                        <h2>{article.title}</h2>
                        <p>{article.excerpt}</p>
                    </motion.div>
                ))}
            </div>
            {/* <motion.div className="box"

                animate={{
                    x: isBack ? 850 : 0,
                    rotate: isBack ? 360 : 0,
                }}
                initial={{
                    opacity: 0.1
                }}
                transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 40,

                }}
                onClick={() => setIsBack(prev => !prev)}
            >
                <p>BOx container</p>
            </motion.div> */}
            {/* <div>
                <motion.div
                    className="box"
                    animate={{
                        scale: [1, 1.4, 1.4, 1, 1],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        transition: {
                            duration: 2
                        }
                    }}
                ></motion.div>
            </div> */}

        </div>
    );
};

export default Extra;
