'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { Controller, RedFire, SearchIcon } from '../Icons/Icons';
import Image from 'next/image';
import gameImage from "@/public/Test/token.png"

type SearchBarProps = {
      searchbarOpen: boolean;
      setSearchbarOpen: (open: boolean) => void;
};

const games = [
      { letter: 'A', games: ['Among Us', "Assassin's Creed", 'ARK: Survival Evolved'] },
      { letter: 'B', games: ['Battlefield', 'Bioshock', 'Borderlands'] },
      { letter: 'C', games: ['Call of Duty', 'Cyberpunk 2077', 'Control'] },
      { letter: 'D', games: ['DOOM', 'Destiny 2', 'Dark Souls'] },
      { letter: 'E', games: ['Elden Ring', 'Escape from Tarkov', 'EarthBound'] },
      { letter: 'F', games: ['Fortnite', 'Fallout', 'FIFA 23'] },
      { letter: 'G', games: ['Genshin Impact', 'God of War', 'GTA V'] },
      { letter: 'H', games: ['Halo Infinite', 'Hades', 'Hollow Knight'] },
      { letter: 'I', games: ['Inside', 'It Takes Two', 'Immortals Fenyx Rising'] },
      { letter: 'J', games: ['Journey', 'Just Cause', 'Jump Force'] },
      { letter: 'K', games: ['Kingdom Hearts', 'Kena: Bridge of Spirits', 'Killing Floor'] },
      { letter: 'L', games: ['League of Legends', 'Lego Star Wars', 'Left 4 Dead 2'] },
      { letter: 'M', games: ['Minecraft', 'Mass Effect', 'Monster Hunter'] },
      { letter: 'N', games: ['Need for Speed', "No Man's Sky", 'Nier: Automata'] },
      { letter: 'O', games: ['Overwatch', 'Outlast', 'Ori and the Blind Forest'] },
      { letter: 'P', games: ['Portal 2', 'PUBG', 'Persona 5'] },
      { letter: 'Q', games: ['Quantum Break', 'Q.U.B.E. 2', 'Quake'] },
      { letter: 'R', games: ['Red Dead Redemption 2', 'Resident Evil', 'Rocket League'] },
      { letter: 'S', games: ['Skyrim', 'Sekiro', 'Spider-Man'] },
      { letter: 'T', games: ['The Witcher 3', 'Terraria', 'Titanfall 2'] },
      { letter: 'U', games: ['Undertale', 'Until Dawn', 'Uncharted 4'] },
      { letter: 'V', games: ['Valorant', 'Vampyr', 'Visage'] },
      { letter: 'W', games: ['Warframe', 'Watch Dogs', 'World of Warcraft'] },
      { letter: 'X', games: ['XCOM 2', 'Xenoblade Chronicles', 'Xenogears'] },
      { letter: 'Y', games: ['Yakuza 0', 'Yooka-Laylee', 'Ys VIII'] },
      { letter: 'Z', games: ['Zelda: Breath of the Wild', 'Zombie Army 4', 'Ziggurat'] },
];

const SearchBar = ({ searchbarOpen, setSearchbarOpen }: SearchBarProps) => {
      const barRef = useRef<HTMLDivElement>(null);
      const [searchTerm, setSearchTerm] = useState('');

      // Build a Set of popular game names (first 5 letters, first 2 games)
      const popularGamesSet = useMemo(() => {
            return new Set(
                  games
                        .slice(0, 5)
                        .flatMap(group => group.games.slice(0, 2))
            );
      }, []);

      // Close on outside click
      useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                  if (barRef.current && !barRef.current.contains(event.target as Node)) {
                        setSearchbarOpen(false);
                  }
            };
            if (searchbarOpen) {
                  document.addEventListener('mousedown', handleClickOutside);
            }
            return () => {
                  document.removeEventListener('mousedown', handleClickOutside);
            };
      }, [searchbarOpen, setSearchbarOpen]);

      // Filtered search results
      const filteredGames = games
            .map(group => ({
                  letter: group.letter,
                  games: group.games.filter(game =>
                        game.toLowerCase().includes(searchTerm.toLowerCase())
                  ),
            }))
            .filter(group => group.games.length > 0);

      return (
            <div
                  className={`fixed inset-0 z-[9999] transition-opacity duration-150 ${searchbarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
            >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Panel */}
                  <div
                        ref={barRef}
                        className={`absolute left-0 w-full lg:max-h-[500px] bg-cardPrimary transition-transform duration-500 ease-in-out overflow-hidden ${searchbarOpen ? 'translate-y-[0px]' : '-translate-y-full'
                              }`}
                  >
                        {/* Close */}
                        <div className="flex justify-end p-4">
                              <button
                                    onClick={() => setSearchbarOpen(false)}
                                    className="text-textPrimary text-2xl hover:text-primary"
                              >
                                    ×
                              </button>
                        </div>

                        {/* Search Input */}
                        <div className="px-6">
                              <div className="flex items-center w-full bg-navigationBar text-textPrimary rounded-lg px-4 py-3 shadow-md">
                                    <SearchIcon className="w-5 h-5 mr-3" />
                                    <input
                                          type="text"
                                          placeholder="Search..."
                                          value={searchTerm}
                                          onChange={e => setSearchTerm(e.target.value)}
                                          className="w-full bg-transparent outline-none text-lg placeholder:text-textPrimary text-textPrimary"
                                          autoFocus
                                    />
                              </div>
                        </div>

                        {/* Results */}
                        <div className="flex flex-col-reverse lg:flex-row items-start gap-10 px-6 py-4">
                              {/* Popular Games */}
                              <div
                                    className="w-full lg:w-1/4 rounded-lg lg:overflow-hidden hidden lg:flex flex-col lg:max-h-[550px]"
                              >
                                    <h1 className="text-2xl font-bold text-textPrimary px-6 py-4 flex items-center gap-2 ">
                                          <RedFire
                                                width={25}
                                                height={25}
                                          />
                                          <span>
                                                Popular Games
                                          </span>
                                    </h1>
                                    <div className="px-6 pb-4">
                                          <ul className="flex flex-wrap gap-2 text-textPrimary">
                                                {games.slice(0, 5).flatMap(group =>
                                                      group.games.slice(0, 2).map(game => (
                                                            <li
                                                                  key={game}
                                                                  className={`
                                                                              flex items-center space-x-3 text-secondary hover:text-primary cursor-pointer transition-colors duration-200 bg-btnPrimaryRegular rounded-lg px-3 py-2 text-sm
                                                                        `}
                                                            >
                                                                  <Image
                                                                        src={gameImage}
                                                                        alt={game}
                                                                        width={25}
                                                                        height={25}
                                                                  />
                                                                  <span>{game}</span>
                                                            </li>
                                                      ))
                                                )}
                                          </ul>
                                    </div>
                              </div>

                              {/* Divider */}
                              <div className="lg:h-[350px] w-px bg-stroke" />

                              {/* Search Results */}
                              <div className="w-full lg:w-9/12 overflow-y-auto max-h-[350px] custom-scrollbar flex flex-col lg:max-h-[550px]">
                                    <h1 className="text-2xl font-bold text-textPrimary py-4 flex items-center gap-2 ">
                                          <Controller
                                                width={25}
                                                height={25}
                                          />
                                          <span>
                                                Search Results
                                          </span>
                                    </h1>
                                    {filteredGames.length > 0 ? (
                                          filteredGames.map(group => (
                                                <div key={group.letter} className="mb-4 flex items-center gap-5">
                                                      <h2 className="text-lg font-semibold text-textPrimary mb-1">
                                                            {group.letter}
                                                      </h2>
                                                      <ul className="flex flex-wrap gap-2">
                                                            {group.games.map(game => (
                                                                  <li
                                                                        key={game}
                                                                        className={`
                                                                              flex items-center space-x-3 hover:text-primary cursor-pointer transition-colors duration-200 bg-btnPrimaryRegular rounded-lg px-3 py-2 text-sm 
                                                                              ${popularGamesSet.has(game) ? 'text-secondary' : 'text-textPrimary'}
                                                                        `}
                                                                  >
                                                                        <Image
                                                                              src={gameImage}
                                                                              alt={game}
                                                                              width={25}
                                                                              height={25}
                                                                        />
                                                                        <span>{game}</span>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                </div>
                                          ))
                                    ) : (
                                          <p className="text-textPrimary mt-4">No matching games found.</p>
                                    )}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SearchBar;
