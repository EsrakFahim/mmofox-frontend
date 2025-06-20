// components/Footer.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import { div } from 'framer-motion/client';

const Footer = () => (
      <footer>
            <div className="bg-navigationBar text-white py-12 px-6">
                  <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                              {/* Logo */}
                              <div className="md:col-span-1 flex flex-col items-start">
                                    <Image
                                          src="/Assets/logo.png"
                                          alt="Logo"
                                          width={200}
                                          height={40}
                                          className="rounded-full mb-4"
                                    />
                              </div>

                              {/* Buy */}
                              <div className="md:col-span-1">
                                    <h3 className="text-lg font-semibold mb-4 uppercase pb-2">
                                          Buy
                                    </h3>
                                    <ul className="space-y-2">
                                          {['How To Buy', 'Payment', 'Refund Policy'].map(link => (
                                                <li key={link}>
                                                      <Link
                                                            href="#"
                                                            className="text-textPrimary hover:text-white hover:underline transition-colors"
                                                      >
                                                            {link}
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              {/* Legal */}
                              <div className="md:col-span-1">
                                    <h3 className="text-lg font-semibold mb-4 uppercase pb-2">
                                          Legal
                                    </h3>
                                    <ul className="space-y-2">
                                          {['Privacy Policy', 'Terms & Conditions'].map(link => (
                                                <li key={link}>
                                                      <Link
                                                            href="#"
                                                            className="text-textPrimary hover:text-white hover:underline transition-colors"
                                                      >
                                                            {link}
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              {/* Products */}
                              <div className="md:col-span-1">
                                    <h3 className="text-lg font-semibold mb-4 uppercase pb-2">
                                          Products
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                          {Array(2).fill([
                                                'Game Name 1',
                                                'Game Name 2',
                                                'Game Name 3',
                                          ]).map((games, col) => (
                                                <ul key={col} className="space-y-2">
                                                      {games.map((name: string) => (
                                                            <li key={name}>
                                                                  <Link
                                                                        href="#"
                                                                        className="text-textPrimary hover:text-white hover:underline transition-colors"
                                                                  >
                                                                        {name}
                                                                  </Link>
                                                            </li>
                                                      ))}
                                                </ul>
                                          ))}
                                    </div>
                              </div>

                              {/* Contact */}
                              <div className="md:col-span-1">
                                    <h3 className="text-lg font-semibold mb-4 uppercase pb-2">
                                          Contact Us
                                    </h3>
                                    <div className="space-y-4">
                                          <a
                                                href="mailto:mmofox@gmail.com"
                                                className="block bg-secondary text-white py-2 rounded-lg text-center font-medium hover:bg-secondary/80 transition"
                                          >
                                                mmofox@gmail.com
                                          </a>
                                          <div className="flex space-x-3">
                                                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                                      <Link
                                                            href="#"
                                                            key={i}
                                                            className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-transform transform hover:scale-110"
                                                      >
                                                            <Icon size={20} />
                                                      </Link>
                                                ))}
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
            <div
                  className='flex items-center justify-center text-textPrimary py-4'
            >
                  <p>
                        Copyright © 2021-2024 CICIPLAY.COM LIMITED Privacy policy and Terms & Conditions
                  </p>
            </div>
      </footer>
);

export default Footer;
