import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import { kataMereka } from "../../models/dummy/kataMereka";


const rightVariants = {
    hidden: {
        y: 0
    },
    animate: {
        x: [50, -2250],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
            },
        },
    },
};

const leftVariants = {
    hidden: {
        y: 0
    },
    animate: {
        x: [-2250, 50],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
            },
        },
    },
};

const RunComponent = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <AnimatePresence>
                    <motion.div
                        variants={rightVariants}
                        animate='animate'
                        transition={{ type: "spring" }}
                        className="flex flex-row mt-8">
                        {
                            kataMereka.map((data, index) => {
                                return (
                                    <div className='bg-white flex flex-col mr-10 shadow-lg justify-center items-center rounded-xl p-5' key={index}>
                                        <div className="flex justify-center font-inter flex-col text-left w-[300px]">
                                            <h1 className="font-bold text-[24px]">{data.nama}</h1>
                                            <h3 className="mt-3">{data.review}</h3>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </motion.div>
                    <motion.div
                        variants={leftVariants}
                        animate='animate'
                        transition={{ type: "spring" }}
                        className="flex flex-row my-8">
                        {
                            kataMereka.map((data, index) => {
                                return (
                                    <div className='bg-white flex flex-col ml-10 shadow-lg justify-center items-center rounded-xl p-5' key={index}>
                                        <div className="flex justify-center font-inter flex-col text-left w-[300px]">
                                            <h1 className="font-bold text-[24px]">{data.nama}</h1>
                                            <h3 className="mt-3">{data.review}</h3>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
}

export default RunComponent;