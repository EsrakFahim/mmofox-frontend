import NewsCard from '@/Components/Cards/NewsCard/NewsCard'
import { RightArrow } from '@/Components/Icons/Icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LatestNews = () => {
      return (
            <div
                  className='max-w-4/5 mx-auto my-20'
            >
                  <div className="relative my-10 flex items-center justify-center">
                        {/* Centered Title with Icons */}
                        <div className="flex items-center gap-4">
                              <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
                                    Latest News
                              </h2>
                              <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                        </div>

                        {/* More Games Button aligned right */}
                        <div className="absolute right-0">
                              <Link href="/news">
                                    <button className="text-textPrimary text-sm sm:text-lg font-semibold hover:underline flex items-center gap-2">
                                          More News
                                          <RightArrow />
                                    </button>
                              </Link>
                        </div>
                  </div>
                  <div
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 '
                  >
                        <NewsCard
                              imageSrc="/news.png"
                              title="New Game Release: Adventure Awaits!"
                              description="Discover the latest in gaming with our new release. Dive into a world of adventure, challenges, and excitement. Don't miss out on the action!"
                        />
                        <NewsCard
                              imageSrc="/news.png"
                              title="New Game Release: Adventure Awaits!"
                              description="Discover the latest in gaming with our new release. Dive into a world of adventure, challenges, and excitement. Don't miss out on the action!"
                        />
                        <NewsCard
                              imageSrc="/news.png"
                              title="New Game Release: Adventure Awaits!"
                              description="Discover the latest in gaming with our new release. Dive into a world of adventure, challenges, and excitement. Don't miss out on the action!"
                        />
                        <NewsCard
                              imageSrc="/news.png"
                              title="New Game Release: Adventure Awaits!"
                              description="Discover the latest in gaming with our new release. Dive into a world of adventure, challenges, and excitement. Don't miss out on the action!"
                        />
                  </div>
            </div>
      )
}

export default LatestNews