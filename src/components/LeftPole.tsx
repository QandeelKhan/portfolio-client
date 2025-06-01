import React from "react";
import { motion } from "framer-motion";
import "./css/left-pole.css";

interface DateObj {
    month: string;
    year: string;
}

interface LeftPoleProps {
    from: DateObj;
    to: DateObj;
}

const LeftPole: React.FC<LeftPoleProps> = ({ from, to }) => {
    const isPresent = to.month === "Present";

    const circleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const lineVariants = {
        hidden: { scaleY: 0, transformOrigin: "top" },
        visible: {
            scaleY: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
            }
        }
    };

    const dateVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    return (
        <div className="pole-container" style={{ height: "100%", display: "flex" }}>
            <div className="pole-wrapper">
                <div className="line-container">
                    <motion.div
                        className="circle top-circle"
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                    />

                    <motion.div
                        className="line"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                    />

                    <motion.div
                        className={`circle bottom-circle ${ isPresent ? 'pulse' : '' }`}
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </div>

                <div className="text-container">
                    <motion.div
                        className="date-group top-date"
                        variants={dateVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="date">
                            {from.month} <span className="separator">~</span> {from.year}
                        </span>
                    </motion.div>

                    <motion.div
                        className="date-group bottom-date"
                        variants={dateVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className={`date ${ isPresent ? 'present' : '' }`}>
                            {to.month} <span className="separator">~</span> {to.year}
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LeftPole;