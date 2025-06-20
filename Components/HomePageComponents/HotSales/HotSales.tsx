"use client";

import CustomUnitSaleCard from '@/Components/Cards/CustomUnitSaleCard/CustomUnitSaleCard';
import GameCard from '@/Components/Cards/GameCard/GameCard';
import Image from 'next/image';
import React from 'react';

const HotSales = () => {
      const [saleUnitAmount, setSaleUnitAmount] = React.useState(100);

      return (
            <div className="max-w-[90vw] md:max-w-4xl lg:max-w-4/5 mx-auto my-10 px-4 py-8">
                  {/* Section Title */}
                  <div className="relative my-5 flex items-center justify-center">
                        <div className="flex items-center gap-4">
                              <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">Hot Sales</h2>
                              <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                        </div>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                        <CustomUnitSaleCard
                              imageSrc="/product.png"
                              title="Special Offer"
                              isOnSale={true}
                              saleUnitAmount={saleUnitAmount}
                              isHotOffer={true}
                              setSaleUnitAmount={setSaleUnitAmount}
                        />

                        <GameCard
                              imageSrc="/game.png"
                              title="Game One"
                              isOnSale={true}
                              isHotOffer={true}
                              price={59.99}
                              offer={[
                                    "Exclusive in-game items",
                                    "Free DLC with purchase",
                                    "Limited time offer"
                              ]} 
                        />
                        <GameCard
                              imageSrc="/game.png"
                              title="Game Two"
                              isOnSale={true}
                              isHotOffer={false}
                              price={39.99}
                              offer={[
                                    "Exclusive in-game items",
                                    "Free DLC with purchase",
                                    "Limited time offer"
                              ]}
                        />
                        <GameCard
                              imageSrc="/game.png"
                              title="Game Three"
                              isOnSale={false}
                              isHotOffer={true}
                              price={19.99}
                              offer={[
                                    "Exclusive in-game items",
                                    "Free DLC with purchase",
                                    "Limited time offer"
                              ]}
                        />
                  </div>
            </div>
      );
};

export default HotSales;
