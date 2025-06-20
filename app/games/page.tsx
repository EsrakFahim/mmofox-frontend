'use client';

import GamePrimaryCards from '@/Components/Cards/GamePrimaryCards/GamePrimaryCards';
import { Controller, UpArrow } from '@/Components/Icons/Icons';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const gameData = [
      { letter: 'A', games: ['Among Us', "Assassin's Creed", 'ARK: Survival Evolved', 'Alan Wake', 'Apex Legends', 'Age of Empires', 'Alien: Isolation', 'A Plague Tale', 'Alto’s Odyssey', 'Asphalt 9', 'Arkham Knight', 'Astroneer'] },
      { letter: 'B', games: ['Battlefield', 'Bioshock', 'Borderlands', 'Bayonetta', 'Batman: Arkham City', 'Black Desert Online', 'Broforce', 'Battletoads', 'Bloodborne', 'Beyond Two Souls', 'Bomberman', 'Baldur’s Gate'] },
      { letter: 'C', games: ['Call of Duty', 'Cyberpunk 2077', 'Control', 'Crash Bandicoot', 'Crusader Kings III', 'Cities: Skylines', 'Cuphead', 'Crysis', 'Code Vein', 'Chrono Trigger', 'Celeste', 'Castle Crashers'] },
      { letter: 'D', games: ['DOOM', 'Destiny 2', 'Dark Souls', 'Dead Cells', 'Dying Light', 'Dragon Age', 'Death Stranding', 'Dishonored', 'Diablo III', 'Detroit: Become Human', 'Dota 2', 'Days Gone'] },
      { letter: 'E', games: ['Elden Ring', 'Escape from Tarkov', 'EarthBound', 'Empire Earth', 'Eve Online', 'Enter the Gungeon', 'Elex', 'Eternal Sonata', 'Everdell', 'Echo', 'Evil Within', 'Edge of Eternity'] },
      { letter: 'F', games: ['Fortnite', 'Fallout', 'FIFA 23', 'Far Cry 5', 'Forza Horizon', 'Frostpunk', 'Firewatch', 'Fable III', 'Fez', 'Final Fantasy XV', 'Furi', 'Five Nights at Freddy’s'] },
      { letter: 'G', games: ['Genshin Impact', 'God of War', 'GTA V', 'GRID Legends', 'Gris', 'Guilty Gear', 'Geometry Dash', 'Ghost of Tsushima', 'Gorn', 'Glover', 'Galaga', 'Giana Sisters'] },
      { letter: 'H', games: ['Halo Infinite', 'Hades', 'Hollow Knight', 'Hitman 3', 'Hotline Miami', 'Horizon Zero Dawn', 'Hyper Light Drifter', 'Hearthstone', 'Half-Life', 'Heavy Rain', 'Hellblade', 'Heroes of Might & Magic'] },
      { letter: 'I', games: ['Inside', 'It Takes Two', 'Immortals Fenyx Rising', 'Infamous Second Son', 'Icewind Dale', 'Injustice 2', 'Invisible Inc.', 'I Am Setsuna', 'Icarus', 'Ittle Dew', 'Iron Harvest', 'Into the Breach'] },
      { letter: 'J', games: ['Journey', 'Just Cause', 'Jump Force', 'Jet Set Radio', 'Jotun', 'Jagged Alliance', 'Jurassic World Evolution', 'Journey to the Savage Planet', 'Just Dance', 'Jade Empire', 'Joe Danger', 'Jumanji'] },
      { letter: 'K', games: ['Kingdom Hearts', 'Kena: Bridge of Spirits', 'Killing Floor', 'Killer Instinct', 'Katana Zero', 'Kerbal Space Program', 'Kona', 'Kingdom Come: Deliverance', 'Knytt Underground', 'Killing Time', 'Kards', 'Krunker'] },
      { letter: 'L', games: ['League of Legends', 'Lego Star Wars', 'Left 4 Dead 2', 'Limbo', 'Little Nightmares', 'Lords of the Fallen', 'Life is Strange', 'Loop Hero', 'Lost Ark', 'Lethal League', 'LocoRoco', 'Legend of Dragoon'] },
      { letter: 'M', games: ['Minecraft', 'Mass Effect', 'Monster Hunter', 'Metro Exodus', 'Mad Max', 'Mortal Kombat 11', 'Metal Gear Solid V', 'Mafia III', 'Max Payne 3', 'Manhunt', 'Mark of the Ninja', 'Marvel’s Avengers'] },
      { letter: 'N', games: ['Need for Speed', "No Man's Sky", 'Nier: Automata', 'Nioh 2', 'Naruto Shippuden', 'NBA 2K23', 'Necropolis', 'Night in the Woods', 'Neo: The World Ends With You', 'Nidhogg', 'Nuclear Throne', 'Neon Abyss'] },
      { letter: 'O', games: ['Overwatch', 'Outlast', 'Ori and the Blind Forest', 'Outer Worlds', 'One Piece Odyssey', 'Octopath Traveler', 'Outer Wilds', 'Oxenfree', 'Observer', 'Overcooked', 'Onrush', 'Outriders'] },
      { letter: 'P', games: ['Portal 2', 'PUBG', 'Persona 5', 'Prey', 'Pikmin 3', 'Plants vs Zombies', 'Payday 2', 'Papers Please', 'Prince of Persia', 'Path of Exile', 'Project Zomboid', 'PowerWash Simulator'] },
      { letter: 'Q', games: ['Quantum Break', 'Q.U.B.E. 2', 'Quake', 'Quiplash', 'Quantum Conundrum', 'Quest for Glory', 'Qbert', 'Quadrilateral Cowboy', 'QbQbQb', 'Qvadriga', 'Quake II RTX', 'Qbike'] },
      { letter: 'R', games: ['Red Dead Redemption 2', 'Resident Evil', 'Rocket League', 'Rainbow Six Siege', 'Returnal', 'Rust', 'Rage 2', 'RimWorld', 'ReCore', 'Ratchet & Clank', 'Roller Champions', 'Remnant: From the Ashes'] },
      { letter: 'S', games: ['Skyrim', 'Sekiro', 'Spider-Man', 'Starfield', 'Star Wars Battlefront', 'Subnautica', 'Stardew Valley', 'Stray', 'Slay the Spire', 'State of Decay 2', 'Shadow of Mordor', 'Sleeping Dogs'] },
      { letter: 'T', games: ['The Witcher 3', 'Terraria', 'Titanfall 2', 'Tunic', 'The Forest', 'Total War: Warhammer', 'Team Fortress 2', 'Tomb Raider', 'The Long Dark', 'The Messenger', 'The Evil Within 2', 'Trackmania'] },
      { letter: 'U', games: ['Undertale', 'Until Dawn', 'Uncharted 4', 'Untitled Goose Game', 'Unrailed', 'Unravel', 'UNO', 'UFC 4', 'UnderMine', 'Ultimate Chicken Horse', 'Uurnog', 'Uplink'] },
      { letter: 'V', games: ['Valorant', 'Vampyr', 'Visage', 'V Rising', 'Viscera Cleanup Detail', 'Valkyria Chronicles', 'Vampire Survivors', 'Void Bastards', 'Virtua Fighter 5', 'Valheim', 'Volgarr the Viking', 'Vagrant Story'] },
      { letter: 'W', games: ['Warframe', 'Watch Dogs', 'World of Warcraft', 'Wasteland 3', 'We Happy Few', 'Worms W.M.D.', 'Watch Dogs 2', 'WWE 2K22', 'Windjammers 2', 'Wizard of Legend', 'Wolfenstein II', 'Witch It'] },
      { letter: 'X', games: ['XCOM 2', 'Xenoblade Chronicles', 'Xenogears', 'X3: Terran Conflict', 'Xenoblade Chronicles 2', 'X-Plane 11', 'Xenon Racer', 'Xenoraid', 'Xotic', 'X-Men Legends', 'XII', 'Xenogears Remastered'] },
      { letter: 'Y', games: ['Yakuza 0', 'Yooka-Laylee', 'Ys VIII', 'Yoku’s Island Express', 'Yonder', 'Ys IX: Monstrum Nox', 'Yo-kai Watch', 'Yeti Sports', 'YIIK', 'Yars’ Revenge', 'Yaba Sanshiro', 'Yume Nikki'] },
      { letter: 'Z', games: ['Zelda: Breath of the Wild', 'Zombie Army 4', 'Ziggurat', 'Zeno Clash', 'Zanki Zero', 'Ziggurat 2', 'Zombotron', 'Zelda: Twilight Princess', 'Zoo Tycoon', 'Zero Escape', 'ZenoBlade X', 'Zafehouse Diaries'] },
];

const AllGamesPage = () => {
      const [activeLetter, setActiveLetter] = useState('A');
      const [search, setSearch] = useState('');
      const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

      const handleLetterClick = (letter: string) => {
            const section = sectionRefs.current[letter];
            if (section) section.scrollIntoView({ behavior: 'smooth' });
      };

      const filteredGames = gameData.map((group) => ({
            ...group,
            games: group.games.filter((game) =>
                  game.toLowerCase().includes(search.toLowerCase())
            ),
      }));

      const handleGoToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveLetter('A');
            if (sectionRefs.current['A']) {
                  sectionRefs.current['A']!.scrollIntoView({ behavior: 'smooth' });
            }
      };

      useEffect(() => {
            const observer = new IntersectionObserver(
                  (entries) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting) {
                                    const current = entry.target.getAttribute('data-letter');
                                    if (current) setActiveLetter(current);
                              }
                        });
                  },
                  {
                        root: null,
                        rootMargin: '-50% 0px -49% 0px',
                        threshold: 0,
                  }
            );

            filteredGames.forEach(({ letter, games }) => {
                  if (games.length > 0 && sectionRefs.current[letter]) {
                        observer.observe(sectionRefs.current[letter]!);
                  }
            });

            const firstVisible = filteredGames.find(({ letter, games }) => {
                  const el = sectionRefs.current[letter];
                  if (el && games.length > 0) {
                        const rect = el.getBoundingClientRect();
                        return rect.top >= 0 && rect.bottom <= window.innerHeight;
                  }
                  return false;
            });

            if (firstVisible) setActiveLetter(firstVisible.letter);

            return () => observer.disconnect();
      }, [filteredGames]);

      return (
            <div className="font-sans">
                  {/* Full Width Banner */}
                  <div className="relative w-full h-[300px] md:h-[260px] ">
                        <Image
                              src="/game_banner.png"
                              alt="Game Banner"
                              fill
                              sizes="100vw"
                              style={{ objectFit: 'contain' }}
                              priority
                        />
                  </div>

                  {/* Sticky Search */}
                  <div className="sticky top-0 z-50  py-12   flex items-center justify-between bg-background">
                        <h2
                              className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary flex items-center gap-2 justify-center mx-auto max-w-3xl"
                              aria-label="All Games"
                        >
                              <Controller
                                    width={24}
                              />
                              <span>
                                    All Games
                              </span>
                        </h2>
                        <input
                              type="text"
                              placeholder="Search games..."
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className="w-full max-w-xl text-textPrimary bg-cardPrimary border border-stroke rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary mx-auto block"
                              aria-label="Search games"
                        />
                  </div>

                  {/* Main Content Area */}
                  <div className="relative flex h-screen overflow-hidden my-14">
                        {/* Alphabetical Sidebar */}
                        <aside
                              className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-y-auto border border-stroke bg-cardPrimary h-[70%]  z-20 shadow-md rounded-xl p-2 min-w-[3rem]"
                        >
                              {gameData.map(({ letter }) => {
                                    const hasMatch = filteredGames.find((g) => g.letter === letter)?.games.length;
                                    return (
                                          <button
                                                key={letter}
                                                onClick={() => hasMatch && handleLetterClick(letter)}
                                                className={` font-semibold transition-colors  select-none ${activeLetter === letter
                                                      ? 'text-primary'
                                                      : hasMatch
                                                            ? 'text-textPrimary hover:text-primary'
                                                            : 'text-textPrimary cursor-not-allowed'
                                                      }`}
                                                disabled={!hasMatch}
                                                aria-label={`Scroll to letter ${letter}`}
                                                type="button"
                                          >
                                                {letter}
                                          </button>
                                    );
                              })}
                              <button
                                    className='mt-2 bg-primary p-1 rounded-lg cursor-pointer hover:bg-primary/80 transition-colors'
                                    onClick={handleGoToTop}
                                    aria-label="Go to top"
                              >
                                    <UpArrow
                                          width={12}
                                    />
                              </button>
                        </aside>

                        {/* Game List */}
                        <main className="flex-1 overflow-y-scroll hide-scrollbar p-6 pt-6 sm:pt-0 ml-0 lg:ml-[4.5rem] space-y-12 scroll-smooth">
                              {filteredGames.map(({ letter, games }) =>
                                    games.length > 0 ? (
                                          <section
                                                key={letter}
                                                ref={(el) => {
                                                      sectionRefs.current[letter] = el as HTMLDivElement | null;
                                                }}
                                                data-letter={letter}
                                                className="space-y-3 scroll-mt-24"
                                                aria-label={`Games starting with letter ${letter}`}
                                          >
                                                <div className="border-l-2 border-l-primary px-2 py-1 rounded-xl bg-gradient-to-r from-primary/40 to-background shadow-sm mb-4">
                                                      <h2 className="text-primary text-xl">{letter}</h2>
                                                </div>
                                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                                      {games.map((game, idx) => (
                                                            <GamePrimaryCards
                                                                  key={idx}
                                                                  title={game}
                                                                  image="/image.png"
                                                                  logo="/Assets/fav.png"
                                                                  items={['Item 1', 'Item 2', 'Item 3']}
                                                            />
                                                      ))}
                                                </ul>
                                          </section>
                                    ) : null
                              )}
                        </main>
                  </div>
            </div>
      );
};

export default AllGamesPage;
