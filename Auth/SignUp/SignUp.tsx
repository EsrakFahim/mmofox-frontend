"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
      Discord,
      Facebook,
      Google,
      Lock,
      Mail,
      Microsoft,
      Phone,
      User
} from '@/Components/Icons/Icons';
import Link from 'next/link';

interface LoginProps {
      fadeVariants?: any;
      setModalType: (type: string) => void;
}

const Signup: React.FC<LoginProps> = ({ fadeVariants, setModalType }) => {
      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();

      return (
            <motion.div
                  key="signup"
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeVariants}
                  transition={{ duration: 0.3 }}
                  className="bg-cardPrimary rounded-2xl p-7 shadow-lg text-textPrimary w-[90vw] md:w-[380px] mx-auto border border-stroke"
            >
                  <h1 className="text-3xl font-bold mb-6 uppercase leading-tight">Sign Up</h1>

                  <form onSubmit={handleSubmit(data => console.log(data))} className="space-y-4">
                        {[
                              { name: 'firstName', icon: <User width={20} />, type: 'text', placeholder: 'Your First Name' },
                              { name: 'lastName', icon: <User width={20} />, type: 'text', placeholder: 'Your Last Name' },
                              { name: 'email', icon: <Mail width={20} />, type: 'email', placeholder: 'Your Email' },
                              { name: 'phone', icon: <Phone width={20} />, type: 'tel', placeholder: 'Your Phone Number' },
                              { name: 'password', icon: <Lock width={20} />, type: 'password', placeholder: 'Your Password' },
                              { name: 'confirmPassword', icon: <Lock width={20} />, type: 'password', placeholder: 'Confirm Your Password' }
                        ].map(({ name, icon, type, placeholder }) => (
                              <div className="relative" key={name}>
                                    <span className="absolute left-3 top-2.5">{icon}</span>
                                    <input
                                          type={type}
                                          placeholder={placeholder}
                                          {...register(name as any, { required: `${placeholder} is required` })}
                                          className={`pl-12 pr-10 w-full py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
                                                            ${errors[name as keyof typeof errors] ? 'border-error' : 'border-stroke'}
                                          `}
                                    />
                                    {errors[name as keyof typeof errors] && (
                                          <span className="absolute right-3 top-2.5 text-error text-lg font-bold">!</span>
                                    )}
                              </div>
                        ))}

                        {/* Terms Checkbox */}
                        <div>
                              <div className="flex items-center space-x-2">
                                    <input
                                          type="checkbox"
                                          id="terms"
                                          className="h-4 w-4 rounded-xl accent-primary focus:ring-primary"
                                          {...register('terms', { required: true })}
                                    />
                                    <label htmlFor="terms" className="text-sm text-textSecondary cursor-pointer">
                                          Accept Terms and Conditions
                                    </label>
                                    {errors.terms && (
                                          <span className="text-error text-lg font-bold block mt-1">!</span>
                                    )}
                              </div>
                        </div>

                        {/* Submit Button */}
                        <button
                              type="submit"
                              className="w-full bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded-md transition"
                        >
                              Sign Up
                        </button>
                  </form>

                  {/* Switch Modal */}
                  <div className="mt-4 text-center">
                        <button
                              onClick={() => setModalType('login')}
                              className="text-textSecondary hover:underline text-sm"
                        >
                              Already have an account? Login
                        </button>
                  </div>

                  {/* Divider */}
                  <div className="my-4 flex items-center justify-center">
                        <div className="border-t border-stroke w-full"></div>
                        <span className="mx-4 text-textSecondary">or</span>
                        <div className="border-t border-stroke w-full"></div>
                  </div>

                  {/* Terms Info */}
                  <div>
                        <p className="text-xs text-textSecondary mt-4 text-center">
                              By signing up, you agree to our{' '}
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

export default Signup;
