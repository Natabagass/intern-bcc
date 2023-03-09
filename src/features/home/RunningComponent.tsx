import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import { kataMereka, kataMereka2 } from "../../models/dummy/kataMereka";


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
                                    <div className='bg-white flex flex-col mr-5 sm:mr-10 shadow-lg justify-center items-center rounded-xl p-2 sm:p-3 lg:p-5' key={index}>
                                        <div className="flex justify-center font-inter flex-col text-left w-[300px]">
                                            <h1 className="font-bold text-[16px] sm:text-[18px] lg:text-[24px]">{data.nama}</h1>
                                            <h3 className="mt-3 text-[12px] sm:text-[14px] lg:text-[16px]">{data.review}</h3>
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
                            kataMereka2.map((data, index) => {
                                return (
                                    <div className='bg-white flex flex-col mr-5 sm:mr-10 shadow-lg justify-center items-center rounded-xl p-2 sm:p-3 lg:p-5' key={index} >
                                        <div className="flex justify-center font-inter flex-col text-left w-[300px]">
                                            <h1 className="font-bold text-[16px] sm:text-[18px] lg:text-[24px]">{data.nama}</h1>
                                            <h3 className="mt-3 text-[12px] sm:text-[14px] lg:text-[16px]">{data.review}</h3>
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