import { Fire, ShoppingCart } from '@/Components/Icons/Icons';
import Image from 'next/image';
import React from 'react';

interface GameCardProps {
      imageSrc: string;
      title: string;
      isOnSale: boolean;
      isHotOffer: boolean;
      price: number;
      offer: string[];
}

const GameCard: React.FC<GameCardProps> = ({
      price,
      offer,
      imageSrc,
      title,
      isOnSale,
      isHotOffer,
}) => {
      return (
            <div className="relative max-w-[320px] bg-cardPrimary rounded-xl shadow-lg  flex flex-col items-center justify-between gap-4 border border-stroke overflow-hidden">

                  {/* Image with gradient overlay */}
                  <div className="relative w-full h-52 rounded-t-lg overflow-hidden">
                        <Image
                              src={imageSrc}
                              alt={title}
                              fill
                              className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cardPrimary to-transparent px-4 flex items-end">
                              <h2 className="text-lg sm:text-xl font-semibold text-textPrimary pb-2">
                                    {title}
                              </h2>
                        </div>
                  </div>

                  <div className="w-[90%]">
                        <ul
                              className="pl-5 space-y-2 text-textPrimary font-semibold"
                        >
                              {
                                    offer.map((item: any, index: number) => (
                                          <li key={index} className="text-sm text-textSecondary hover:text-primary">
                                                <Image
                                                      src="/Polygon1.png"
                                                      alt="Checkmark"
                                                      width={8}
                                                      height={8}
                                                      className="inline-block mr-2"
                                                />
                                                {item}
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>

                  {/* Price & Buy Button */}
                  <div className="w-[90%] flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
                        <div className="text-3xl font-bold text-secondary">
                              <span className="text-3xl font-bold">
                                    <span className="text-textPrimary">$</span>
                                    {price.toString().split('.')[0]}
                              </span>
                              <span className="text-lg">
                                    .{price.toString().split('.')[1] ?? '00'}
                              </span>
                        </div>

                        <button className="flex h-12 items-stretch rounded-lg overflow-hidden shadow hover:shadow-md transition">
                              {/* Text Section */}
                              <span className="bg-primary text-white px-6 flex items-center gap-2 h-full">
                                    Buy
                              </span>
                        </button>
                  </div>

                  {/* Hot Offer Badge */}
                  {isHotOffer && (
                        <div className="absolute top-0 left-0 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-br-2xl flex items-center gap-1">
                              <Fire />
                              Hot Offer
                        </div>
                  )}
            </div>
      );
};

export default GameCard;
