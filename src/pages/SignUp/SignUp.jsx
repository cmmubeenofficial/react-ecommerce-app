import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SignUp() {
    const [mode, setMode] = useState("sign up");

    const handleSignupToSingin = () => {
        setMode(prev => prev === "sign up" ? "sign in" : "sign up");
    };

    return (
        <div className="w-full min-h-screen flex flex-col min-[1149px]:flex-row max-[1149px]:items-center justify-center bg-gradient-to-r from-[#F6F1EB] via-[#EDE7E0] to-[#F6F1EB]">
            {/* Image and logo container */}
            <div className="image-container w-full max-w-[600px] relative">
                <img src="/imgs/signup-sofa.png" alt="sofa image" className="w-full max-w-[600px] min-[1149px]:max-h-screen object-cover" />
                <h1 className="absolute top-8 min-[1149px]:top-5 inset-x-0 flex justify-center text-[40px] min-[1149px]:text-[24px] font-[500] font-poppins">
                    Wood Haven
                </h1>
            </div>

            {/* Signup/Signin form */}
            <div className="login bg-white w-full max-w-[600px] min-h-[600px] flex flex-col justify-center gap-[32px] px-10 min-[1149px]:pl-16 min-[1149px]:pr-24 font-poppins">

                <AnimatePresence mode="wait">
                    <motion.h2
                        key={mode + "-title"}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="text-[#141718] text-[40px]"
                    >
                        {mode === "sign up" ? "Sign up" : "Sign In"}
                    </motion.h2>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={mode + "-switch-text"}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="text-[#6C7275] text-sm min-[1149px]:text-base"
                    >
                        {mode === "sign up" ? "Already have an account? " : "Don't have an account? "}
                        <button
                            onClick={handleSignupToSingin}
                            className="text-[#38CB89] font-semibold cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-[#2ea76d]"
                        >
                            {mode === "sign up" ? "Sign in" : "create new account"}
                        </button>
                    </motion.p>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={mode}
                        initial={{ opacity: 0, y: 5 }} // small shift only
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="flex flex-col gap-4"
                    >
                        {mode === "sign up" && (
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full p-2 mt-2 border-b border-b-gray-300 text-[#6C7275] focus:outline-none text-sm min-[1149px]:text-base"
                            />
                        )}

                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-2 mt-2 border-b border-b-gray-300 text-[#6C7275] focus:outline-none text-sm min-[1149px]:text-base"
                        />

                        {mode === "sign up" && (
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full p-2 mt-2 border-b border-b-gray-300 text-[#6C7275] focus:outline-none text-sm min-[1149px]:text-base"
                            />
                        )}

                        <div className="password-field-container relative w-full">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 mt-2 border-b border-b-gray-300 text-[#6C7275] focus:outline-none text-sm min-[1149px]:text-base"
                            />
                            <i className="fa-regular fa-eye absolute right-3 top-[43%] cursor-pointer text-[#6C7275] transition-transform duration-300 hover:scale-110"></i>
                        </div>

                        {mode === "sign up" && (
                            <div className="terms flex gap-[12px] items-center">
                                <input
                                    type="checkbox"
                                    className="h-[20px] w-[20px] min-[1149px]:h-[24px] min-[1149px]:w-[24px] cursor-pointer transition-transform duration-300 hover:scale-110"
                                />
                                <p className="text-sm min-[1149px]:text-base">
                                    I agree with <b>Privacy Policy</b> and <b>Terms of Use</b>
                                </p>
                            </div>
                        )}

                        <button className="bg-[#141718] h-[40px] min-[1149px]:h-[48px] rounded-[8px] font-inter text-white cursor-pointer text-sm min-[1149px]:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            {mode === "sign up" ? "Sign Up" : "Sign In"}
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default SignUp;
