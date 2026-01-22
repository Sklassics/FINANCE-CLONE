import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: 1,
        title: "Contact Us",
        desc: "Give us a call or use our contact form to tell us about your hiring requirements. We listen well and get to know your business so that we can recruit the best fit for each vacancy.",
    },
    {
        number: 2,
        title: "Arrange a Meeting",
        desc: "We want to meet you and get a deeper understanding of your business and requirements. Our expert Consultants will work in partnership with you to create a recruitment plan that delivers results.",
    },
    {
        number: 3,
        title: "Process Management & Aftercare",
        desc: "Utilising our many years of experience to ensure we manage the process effectively. We identify the right talent, engage them throughout and guarantee transparent, professional offer management.",
    },
];

const cardVariants = {
    offscreen: { opacity: 0, y: 80 },
    onscreen: (i) => ({
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 0.8, delay: i * 0.18 },
    }),
};

export default function RecruitProcess() {
    return (
        <section className="relative bg-white min-h-auto py-0 px-0 flex justify-center items-start overflow-x-hidden">
            {/* Decorative yellow circle behind the box */}
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-[#FFD54F] rounded-full z-0"></div>
            {/* Main container */}
            <div className="w-full max-w-[1600px] mx-auto px-2 md:px-0 pt-20 pb-20 flex justify-center">
                <div className="relative z-10 bg-[#0C121C] rounded-2xl shadow-2xl p-6 md:p-20 flex flex-col md:flex-row gap-10 md:gap-20 items-stretch max-w-5xl w-full min-h-[650px]">
                    {/* Left: Heading + Card 2 */}
                    <div className="flex flex-col md:w-1/2">
                        <h2 className="text-white font-extrabold text-4xl md:text-5xl leading-tight mb-8 tracking-tight">
                            How We
                            <br />
                            Recruit For
                            <br />
                            You
                            <span className="inline-block w-5 h-5 bg-[#FFD54F] rounded-full ml-2 align-middle"></span>
                        </h2>
                        <motion.div
                            className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start items-start mb-6"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.6 }}
                            custom={1}
                            variants={cardVariants}
                        >
                            <div className="flex items-center mb-2">
                                <span className="bg-[#FFD54F] text-[#181C25] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg mr-3">
                                    {steps[1].number}
                                </span>
                                <span className="text-[#181C25] font-extrabold text-2xl">{steps[1].title}</span>
                            </div>
                            <p className="text-[#181C25] text-base">{steps[1].desc}</p>
                        </motion.div>
                    </div>
                    {/* Right: Card 1 and Card 3 in a grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 md:w-1/2">
                        <motion.div
                            className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start items-start mb-6"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.6 }}
                            custom={0}
                            variants={cardVariants}
                        >
                            <div className="flex items-center mb-2">
                                <span className="bg-[#FFD54F] text-[#181C25] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg mr-3">
                                    {steps[0].number}
                                </span>
                                <span className="text-[#181C25] font-extrabold text-2xl">{steps[0].title}</span>
                            </div>
                            <p className="text-[#181C25] text-base">{steps[0].desc}</p>
                        </motion.div>
                        <motion.div
                            className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-start items-start"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.6 }}
                            custom={2}
                            variants={cardVariants}
                        >
                            <div className="flex items-center mb-2">
                                <span className="bg-[#FFD54F] text-[#181C25] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg mr-3">
                                    {steps[2].number}
                                </span>
                                <span className="text-[#181C25] font-extrabold text-2xl">{steps[2].title}</span>
                            </div>
                            <p className="text-[#181C25] text-base">{steps[2].desc}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}