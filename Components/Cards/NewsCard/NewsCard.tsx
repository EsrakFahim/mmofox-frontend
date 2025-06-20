import { Fire, ShoppingCart } from '@/Components/Icons/Icons';
import Image from 'next/image';
import React from 'react';

interface NewsCardProps {
      imageSrc: string;
      title: string;
      description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
      imageSrc,
      title,
      description
}) => {
      return (
            <div className="relative p-0.5 rounded-xl overflow-hidden bg-gradient-to-bl from-white/60 via-transparent to-transparent max-w-[320px]">
                  <div className="bg-cardPrimary rounded-xl shadow-lg flex flex-col items-center justify-between gap-4 overflow-hidden">
                        {/* Image with gradient overlay */}
                        <div className="relative w-full h-52 overflow-hidden">
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

                        <div className="w-[90%] text-textSecondary mb-5">
                              {description}
                        </div>

                        <div className="absolute top-4 right-4 border border-black rounded-full text-textPrimary bg-black/50 text-xs font-semibold px-2 py-1 flex items-center gap-1">
                              cici / 569 / 2024-05-24
                        </div>
                  </div>
            </div>
      );
};

export default NewsCard;
