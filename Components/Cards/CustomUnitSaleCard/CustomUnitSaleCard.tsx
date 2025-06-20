import { Fire, ShoppingCart } from '@/Components/Icons/Icons';
import Image from 'next/image';
import React from 'react';

interface CustomUnitSaleCardProps {
      setSaleUnitAmount: React.Dispatch<React.SetStateAction<number>>;
      saleUnitAmount: number;
      imageSrc: string;
      title: string;
      isOnSale: boolean;
      isHotOffer: boolean;
}

const CustomUnitSaleCard: React.FC<CustomUnitSaleCardProps> = ({
      setSaleUnitAmount,
      saleUnitAmount,
      imageSrc,
      title,
      isOnSale,
      isHotOffer,
}) => {
      return (
            <div className="relative max-w-[320px] bg-cardPrimary rounded-xl shadow-lg py-4 flex flex-col items-center justify-between gap-4 border border-stroke overflow-hidden">
                  {/* Image with gradient overlay */}
                  <div className="relative w-full rounded-t-lg overflow-hidden flex justify-center">
                        <Image
                              src={imageSrc}
                              alt={title}
                              width={140}
                              height={200}
                              className="object-cover mx-auto"
                        />

                        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-cardPrimary to-transparent px-4 flex items-end">
                              <h2 className="text-lg sm:text-xl font-semibold text-textPrimary pb-2">
                                    {title}
                              </h2>
                        </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="w-[90%] h-14 flex items-center justify-between gap-2 bg-background border border-stroke p-2 rounded-lg">
                        <button
                              onClick={() => setSaleUnitAmount((q) => Math.max(0, q - 100))}
                              aria-label="Decrease"
                              className="w-10 h-10 rounded-lg text-xl bg-btnPrimaryRegular text-white hover:bg-primary transition"
                        >
                              −
                        </button>
                        <span className="w-16 text-center font-semibold text-textPrimary">{saleUnitAmount}</span>
                        <button
                              onClick={() => setSaleUnitAmount((q) => q + 100)}
                              aria-label="Increase"
                              className="w-10 h-10 rounded-lg text-xl bg-btnPrimaryRegular text-white hover:bg-primary transition"
                        >
                              +
                        </button>
                  </div>


                  {/* Price & Buy Button */}
                  <div className="w-[90%] flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                        <div className="text-3xl font-bold text-secondary">
                              <span className="text-3xl font-bold">
                                    <span className="text-textPrimary">$</span>
                                    {saleUnitAmount.toString().split(".")[0]}
                              </span>
                              <span className="text-lg">
                                    .{saleUnitAmount.toString().split(".")[1] ?? "00"}
                              </span>
                        </div>

                        <button className="flex h-12 items-stretch rounded-lg overflow-hidden shadow hover:shadow-md transition">
                              {/* Icon Section */}
                              <span className="bg-btnSecondaryRegular text-white px-4 flex items-center justify-center h-full">
                                    <ShoppingCart />
                              </span>

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

export default CustomUnitSaleCard;
