import Image from 'next/image';
import * as React from 'react';

interface GamePrimaryCardsProps {
      image: string;
      title: string;
      logo: string;
      items: string[];
}

const GamePrimaryCards: React.FC<GamePrimaryCardsProps> = ({
      image,
      title,
      logo,
      items,
}) => {
      return (
            <div
                  className="relative rounded-xl shadow-md overflow-hidden group inline-block
                 w-full max-w-[340px] aspect-[16/9]"
                  style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                  }}
            >
                  {/* Always visible dark overlay */}
                  <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

                  {/* Hover gradient overlay */}
                  <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        style={{
                              background: `
            linear-gradient(
              to top left,
              rgba(246, 237, 255, 0.6) 0%,
              rgba(211, 165, 255, 0.6) 0%,
              rgba(168, 85, 247, 0.6) 10%,
              rgba(168, 85, 247, 0.6) 100%
            )
          `,
                        }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-20">
                        <div className="w-full h-full flex flex-col items-center justify-center text-center text-white">
                              <Image src={logo} alt={`${title} logo`} width={50} height={50} />
                              <h3 className="font-bold text-white mt-2 text-base sm:text-lg">{title}</h3>
                        </div>

                        <ul className="flex flex-wrap justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {items?.map((item, index) => (
                                    <li key={index}>
                                          <button
                                                className="text-xs sm:text-sm font-bold text-textPrimary border border-textPrimary px-3 py-1 rounded-lg bg-white/20 uppercase hover:bg-white hover:text-black transition-colors duration-300"
                                          >
                                                {item}
                                          </button>
                                    </li>
                              ))}
                        </ul>
                  </div>
            </div>
      );
};

export default GamePrimaryCards;
