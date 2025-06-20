import { Rocket, Money, Safety, Star } from '@/Components/Icons/Icons';
import React from 'react';



const content = [
      {
            icon: <Rocket />,
            title: 'Fast Delivery Guaranteed',
            description: 'We ensure that your digital products are delivered swiftly and securely, so you can start enjoying them right away.'
      },
      {
            icon: <Money />,
            title: 'Secure Transactions',
            description: 'Your security is our priority. We use advanced encryption to protect your personal and payment information.'
      },
      {
            icon: <Safety />,
            title: '24/7 Customer Support',
            description: 'Our dedicated support team is available around the clock to assist you with any questions or issues.'
      },
      {
            icon: <Star />,
            title: 'Wide Range of Products',
            description: 'From games to software, we offer a diverse selection of digital products to meet your needs.'
      }
]



const WhyWe = () => {
      return (
            <section className="py-10 px-4 my-20">
                  <div className="max-w-4/5 mx-auto">
                        {/* <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                              {/* Card */}
                              {
                                    content.map((item, index) => (
                                          <div
                                                key={index}
                                                className="bg-cardPrimary p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex gap-6 items-center "
                                          >
                                                {/* Icon + Divider */}
                                                <div className="flex flex-col items-center justify-center">
                                                      {item.icon}
                                                      <div className="w-[2px] h-12 bg-white/30 mt-2" />
                                                </div>

                                                {/* Content */}
                                                <div>
                                                      <h3 className="text-xl font-semibold text-textPrimary mb-1">
                                                            {item.title}
                                                      </h3>
                                                      <p className="text-sm text-textSecondary leading-relaxed">
                                                            {item.description}
                                                      </p>
                                                </div>
                                          </div>
                                    ))
                              }

                              {/* You can duplicate this card and change icon, title, and content for more features */}
                        </div>
                  </div>
            </section>
      );
};

export default WhyWe;
