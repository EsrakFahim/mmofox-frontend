import GamePrimaryCards from '@/Components/Cards/GamePrimaryCards/GamePrimaryCards';
import { RightArrow } from '@/Components/Icons/Icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HotGames = () => {
      return (
            <div className="max-w-[90vw] md:max-w-4xl lg:max-w-4/5 mx-auto my-10 px-4 py-8">
                  <div className="relative my-5 flex items-center justify-center">
                        {/* Centered Title with Icons */}
                        <div className="flex items-center gap-4">
                              <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">Hot Games</h2>
                              <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                        </div>

                        {/* More Games Button aligned right */}
                        <div className="absolute right-0">
                              <Link href="/games">
                                    <button className="text-textPrimary text-sm sm:text-lg font-semibold hover:underline flex items-center gap-2">
                                          More Games
                                          <RightArrow />
                                    </button>
                              </Link>
                        </div>
                  </div>

                  {/* Games Grid or List */}
                  <div className="mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                              {Array.from({ length: 8 }).map((_, index) => (
                                    <GamePrimaryCards
                                          key={index}
                                          title="Game Title"
                                          image="/image.png"
                                          logo="/Assets/fav.png"
                                          items={['Item 1', 'Item 2', 'Item 3']}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default HotGames;
