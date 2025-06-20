"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Discord, Facebook, Google, Lock, Mail, Microsoft, X } from '@/Components/Icons/Icons';
import Link from 'next/link';

interface LoginProps {
      fadeVariants?: any;
      setModalType: (type: string) => void;
}

const Login: React.FC<LoginProps> = ({ fadeVariants, setModalType }) => {
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();

      return (
            <motion.div
                  key="login"
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeVariants}
                  transition={{ duration: 0.3 }}
                  className="bg-cardPrimary rounded-2xl p-7 shadow-lg text-textPrimary w-[90vw] md:w-[380px] mx-auto border border-stroke"
            >
                  <h1 className="text-3xl font-bold mb-6 uppercase leading-tight">Login</h1>

                  <form onSubmit={handleSubmit(data => console.log(data))} className="space-y-4">

                        {/* Email Field */}
                        <div className="relative">
                              <span className="absolute left-3 top-2.5">
                                    <Mail
                                          width={20}
                                    />
                              </span>
                              <input
                                    type="email"
                                    placeholder="Your Email"
                                    {...register('email', { required: 'Email is required' })}
                                    className={`pl-12 w-full py-2 border ${errors.email ? 'border-error' : 'border-stroke'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                              />
                              <p className="text-error text-xs mt-1 min-h-[16px]">
                                    {typeof errors.email?.message === 'string' ? errors.email.message : ''}
                              </p>
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                              <span className="absolute left-3 top-2.5 ">
                                    <Lock
                                          width={20}
                                    />
                              </span>
                              <input
                                    type="password"
                                    placeholder="Your Password"
                                    {...register('password', { required: 'Password is required' })}
                                    className={`pl-12 w-full py-2 border ${errors.password ? 'border-error' : 'border-stroke'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
                              />
                              <p className="text-error text-xs mt-1 min-h-[16px]">
                                    {typeof errors.password?.message === 'string' ? errors.password.message : ''}
                              </p>
                        </div>

                        <div
                              className="flex items-center justify-between mt-4 text-textSecondary"
                        >
                              <div className="flex items-center space-x-2">
                                    <input
                                          type="checkbox"
                                          name="remember"
                                          id="remember"
                                          className="h-4 w-4 rounded-xl accent-primary focus:ring-primary"
                                    />
                                    <label
                                          htmlFor="remember"
                                          className="text-sm text-textSecondary cursor-pointer"
                                    >
                                          Remember me
                                    </label>
                              </div>

                              {/* Forget Password */}
                              <div className="">
                                    <a href="#" className="text-sm text-primary hover:underline">
                                          Forget Password?
                                    </a>
                              </div>
                        </div>


                        {/* Submit */}
                        <button
                              type="submit"
                              className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded-md  transition"
                        >
                              Login
                        </button>
                  </form>

                  {/* Switch Modal */}
                  <div className="mt-4 text-center">
                        <button
                              onClick={() => setModalType('signup')}
                              className="text-textSecondary hover:underline text-sm"
                        >
                              Don't have an account? Sign Up
                        </button>
                  </div>

                  {/* Divider */}

                  <div className="my-4 flex items-center justify-center">
                        <div className="border-t border-stroke w-full"></div>
                        <span className="mx-4 text-textSecondary">or</span>
                        <div className="border-t border-stroke w-full"></div>
                  </div>


                  {/* Social Login */}
                  <div className="">
                        <div className="flex items-center justify-start space-x-3 ">
                              <span
                              className='bg-background border border-stroke rounded-xl p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors'
                              >
                                    <Google
                                          width={20}
                                    />
                              </span>
                              <span
                              className='bg-background border border-stroke rounded-xl p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors'
                              >
                                    <Facebook
                                          width={20}
                                    />
                              </span>
                              <span
                              className='bg-background border border-stroke rounded-xl p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors'
                              >
                                    <Discord
                                          width={20}
                                    />
                              </span>
                              <span
                              className='bg-background border border-stroke rounded-xl p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors'
                              >
                                    <Microsoft
                                          width={20}
                                    />
                              </span>
                              <span
                              className='bg-background border border-stroke rounded-xl p-2 cursor-pointer hover:bg-primary hover:text-white transition-colors'
                              >
                                    <X
                                          width={20}
                                    />
                              </span>
                        </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div>
                        <p className="text-xs text-textSecondary mt-4 text-center">
                              By logging in, you agree to our{' '}
                              <Link href="#" className="text-primary hover:underline">
                                    Terms of Service
                              </Link>{' '}
                              and{' '}
                              <Link href="#" className="text-primary hover:underline">
                                    Privacy Policy
                              </Link>.
                        </p>
                  </div>

            </motion.div>
      );
};

export default Login;
