import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import js from '@eslint/js';

function SignUp() {
    // ============================ State Management ===========================

    // sign up or sign mode
    const [mode, setMode] = useState("sign up");

    // password visibility
    const [isVisible, setIsVisible] = useState(false)

    // ============================ react-hook-form setup ===========================
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            terms: false,
        }
    })

    // ============================ state handlinng functions ===========================

    // handle to switch between sign up to sign in and vise versa
    const handleSignupToSingin = () => {
        setMode(prev => prev === "sign up" ? "sign in" : "sign up");
    };

    // handle form validation
    const onSubmit = (formData) => {
        if (mode === "sign up") {
            // store data to local storage for autehentication
            localStorage.setItem("signup", JSON.stringify(formData))

            toast.success("🎉 Account created! Please sign in.");
            reset()
            setMode("signin")
        } else {
            console.log("sign in username", formData.username.trim())
            console.log("sign in password", formData.password.trim())
            // handle sign in functionality
            const lsFormData = JSON.parse(localStorage.getItem("signup"))
            if (formData.username.trim() === lsFormData.username.trim() && formData.password.trim() === lsFormData.password.trim()) {
                toast.success("Logged in successfully!")
                localStorage.setItem("isLoggedIn", "true")
                window.location.reload()
            } else {
                toast.error("username or password is incorrect")
            }
        }


    }

    // handle isVisible icon
    const handleIsVisible = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-full min-h-screen flex flex-col min-[1149px]:flex-row max-[1149px]:items-center justify-center bg-gradient-to-r from-[#F6F1EB] via-[#EDE7E0] to-[#F6F1EB]">
            {/* Image and logo container */}
            <div className="image-container w-full max-w-[600px] min-h-[600px] relative">
                <img src="/imgs/signup-sofa.png" alt="sofa image" className="w-full max-w-[600px] min-[1149px]:max-h-screen object-cover" />
                <h1 className="absolute top-8 min-[1149px]:top-5 inset-x-0 flex justify-center text-[40px] min-[1149px]:text-[24px] font-[500] font-poppins">
                    Wood Haven
                </h1>
            </div>

            {/* Signup/Signin form */}
            <div className="login bg-white w-full max-w-[600px] min-h-[600px] flex flex-col justify-center gap-[32px] px-10 min-[1149px]:pl-16 min-[1149px]:pr-24 font-poppins">

                {/* Sign up or Sign In  */}
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

                {/* already have an account? or Don't have an account? */}
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

                        {/* sign up or sign switch button */}
                        <button
                            onClick={handleSignupToSingin}
                            className="text-[#38CB89] font-semibold cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-[#2ea76d]"
                        >
                            {mode === "sign up" ? "Sign in" : "create new account"}
                        </button>
                    </motion.p>
                </AnimatePresence>

                {/* input fields like name, username, email, password */}
                <AnimatePresence mode="wait">
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        key={mode}
                        initial={{ opacity: 0, y: 5 }} // small shift only
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="flex flex-col gap-4"
                    >
                        {mode === "sign up" && (
                            <>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Your name"
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: { value: 3, message: "Minimum 3 characters" }
                                    })}
                                    className="w-full p-2 mt-2 border-b border-b-gray-300 text-[#6C7275] focus:outline-none text-sm min-[1149px]:text-base"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs">{errors.name.message}</p>
                                )}
                            </>
                        )}

                        <input
                            type="text"
                            name='username'
                            placeholder="Username"
                            {...register("username", {
                                required: "Username is required",
                                minLength: { value: 3, message: "Minimum 3 characters" }
                            })}
                            className="w-full p-2 mt-2 border-b border-b-gray-300 text-[#6C7275] focus:outline-none text-sm min-[1149px]:text-base"
                        />
                        {errors.username && (
                            <p className='text-red-500 text-xs'>{errors.username.message}</p>
                        )}

                        {mode === "sign up" && (
                            <>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Email address"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                                    })}
                                    className="w-full p-2 mt-2 border-b border-b-gray-300 text-[#6C7275] focus:outline-none text-sm min-[1149px]:text-base"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs">{errors.email.message}</p>
                                )}
                            </>
                        )}

                        <div className="password-field-container relative w-full">
                            <input
                                type={isVisible ? "text" : "password"}
                                name='password'
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-])(?!.*\s)[A-Za-z\d!@#$%^&*()_+\[\]{};':"\\|,.<>/?`~\-]{4,}$/,
                                        message: "Password must have 1 uppercase letter, 1 number & min 4 chars"
                                    }

                                })}
                                className="w-full p-2 mt-2 border-b border-b-gray-300 text-[#6C7275] focus:outline-none text-sm min-[1149px]:text-base"
                            />
                            {errors.password && (
                                <p className='text-red-500 text-xs'>{errors.password.message}</p>
                            )}

                            {/* eye icon */}
                            {isVisible ? (<i onClick={handleIsVisible}
                                className="fa-regular fa-eye absolute right-3 top-[43%] cursor-pointer text-[#6C7275] transition-transform duration-300 hover:scale-110"></i>) : (<i onClick={handleIsVisible} className="fa-regular fa-eye-slash absolute right-3 top-[43%] cursor-pointer text-[#6C7275] transition-transform duration-300 hover:scale-110"></i>)}
                        </div>

                        {mode === "sign up" && (
                            <>
                                <div className="terms flex gap-[12px] items-center">
                                    <input
                                        type="checkbox"
                                        {...register("terms", {
                                            required: "You must accept terms"
                                        })}
                                        className="h-[20px] w-[20px] min-[1149px]:h-[24px] min-[1149px]:w-[24px] cursor-pointer transition-transform duration-300 hover:scale-110"
                                    />
                                    <label className="text-sm min-[1149x]:text-base">
                                        I agree with <b>Privacy Policy</b> and <b>Terms of Use</b>
                                    </label>
                                </div>
                                {errors.terms && (
                                    <p className='text-red-500 text-xs'>{errors.terms.message}</p>
                                )}
                            </>
                        )}

                        {/* sign up or sign in button */}
                        <button
                            type='submit'
                            className="bg-[#141718] h-[40px] min-[1149px]:h-[48px] rounded-[8px] font-inter text-white cursor-pointer text-sm min-[1149px]:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            {mode === "sign up" ? "Sign Up" : "Sign In"}
                        </button>
                    </motion.form>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default SignUp;
