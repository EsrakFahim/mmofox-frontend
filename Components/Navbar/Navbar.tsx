'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import SearchBar from '../SearchBar/SearchBar';
import { SearchIcon, ShoppingCart } from '../Icons/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '@/lib/slices/modalSlice';
import AuthModals from '@/Auth/Auth';

const navItems = [
      { icon: '🎮', label: 'Home', href: '/' },
      { icon: '💸', label: 'Gold', href: '/gold' },
      { icon: '🧪', label: 'Item', href: '/item' },
      { icon: '👢', label: 'Boot', href: '/boot' },
      { icon: '📰', label: 'News', href: '/news' },
];

export default function Navbar() {
      const [lang, setLang] = useState('EN');
      const [currency, setCurrency] = useState('USD');
      const [menuOpen, setMenuOpen] = useState(false);
      const [langDropdownOpen, setLangDropdownOpen] = useState(false);
      const [searchbarOpen, setSearchbarOpen] = useState(false);

      const dispatch = useDispatch();
      const isModalOpen = useSelector((state: any) => state.modal.isOpen);
      const pathname = usePathname();
      const dropdownRef = useRef<HTMLDivElement>(null);

      // Close language dropdown on outside click
      useEffect(() => {
            function onClick(e: MouseEvent) {
                  if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                        setLangDropdownOpen(false);
                  }
            }
            document.addEventListener('mousedown', onClick);
            return () => document.removeEventListener('mousedown', onClick);
      }, []);

      return (
            <>
                  <header className="w-full h-[60px] bg-navigationBar text-white px-4 sm:px-8 shadow-md relative top-0 left-0 z-50">
                        <nav className="max-w-7xl mx-auto flex items-center justify-between h-full relative">
                              {/* Mobile Hamburger */}
                              <button
                                    onClick={() => setMenuOpen(true)}
                                    className="md:hidden text-white text-2xl"
                                    aria-label="Open menu"
                              >
                                    <Menu />
                              </button>

                              {/* Logo */}
                              <Link
                                    href="/"
                                    className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center h-full"
                              >
                                    <Image
                                          src="/Assets/logo.png"
                                          alt="Logo"
                                          width={180}
                                          height={30}
                                          priority
                                    />
                              </Link>

                              {/* Desktop Nav Items */}
                              <ul className="hidden md:flex items-center gap-12 h-full absolute left-1/2 -translate-x-1/2">
                                    {navItems.map(item => {
                                          const isActive = pathname === item.href;
                                          return (
                                                <li key={item.label} className="flex items-center h-full">
                                                      <Link
                                                            href={item.href}
                                                            className={`flex items-center gap-1 h-full transition ${isActive ? 'text-primary' : 'hover:text-primary'
                                                                  }`}
                                                      >
                                                            <span>{item.icon}</span>
                                                            <span>{item.label}</span>
                                                      </Link>
                                                </li>
                                          );
                                    })}
                                    <li className="flex items-center h-full">
                                          <button
                                                onClick={() => setSearchbarOpen(true)}
                                                className="flex items-center gap-1 hover:text-primary transition h-full"
                                                aria-label="Search"
                                          >
                                                <SearchIcon />
                                          </button>
                                    </li>
                              </ul>

                              {/* Right Icons */}
                              <div className="hidden md:flex items-center gap-4 h-full">
                                    <button
                                          className="px-2 py-1.5 rounded-lg bg-stroke hover:bg-white/10 transition"
                                          aria-label="Cart"
                                    >
                                          <ShoppingCart />
                                    </button>

                                    {/* Language Dropdown */}
                                    <div className="relative" ref={dropdownRef}>
                                          <button
                                                onClick={() => setLangDropdownOpen(o => !o)}
                                                className="px-4 py-1.5 rounded-lg bg-background hover:bg-white/10 transition flex items-center gap-2"
                                                aria-haspopup="true"
                                                aria-expanded={langDropdownOpen}
                                          >
                                                {lang}
                                                <svg
                                                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''
                                                            }`}
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth="2"
                                                      viewBox="0 0 24 24"
                                                >
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                          </button>

                                          {/* Blur Backdrop */}
                                          <div
                                                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ${langDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                                      }`}
                                                onClick={() => setLangDropdownOpen(false)}
                                          />

                                          {/* Dropdown Panel */}
                                          <div
                                                className={`absolute right-0 mt-2 w-80 bg-background rounded-lg shadow-lg p-5 z-40 space-y-4 transform transition-all duration-300 ${langDropdownOpen
                                                            ? 'opacity-100 translate-y-0'
                                                            : 'opacity-0 -translate-y-2 pointer-events-none'
                                                      }`}
                                          >
                                                <div>
                                                      <label className="block mb-1 text-sm text-textPrimary">Language</label>
                                                      <select
                                                            value={lang}
                                                            onChange={e => setLang(e.target.value)}
                                                            className="w-full px-3 py-2 rounded bg-navigationBar text-white"
                                                      >
                                                            <option value="EN">English</option>
                                                            <option value="FR">Français</option>
                                                            <option value="CN">中文</option>
                                                      </select>
                                                </div>
                                                <div>
                                                      <label className="block mb-1 text-sm text-textPrimary">Currency</label>
                                                      <select
                                                            value={currency}
                                                            onChange={e => setCurrency(e.target.value)}
                                                            className="w-full px-3 py-2 rounded bg-navigationBar text-white"
                                                      >
                                                            <option value="USD">USD</option>
                                                            <option value="EUR">EUR</option>
                                                            <option value="JPY">JPY</option>
                                                      </select>
                                                </div>
                                          </div>
                                    </div>

                                    <button
                                          onClick={() => dispatch(openModal())}
                                          className="px-4 py-1.5 rounded-lg border bg-cardPrimary border-white/30 hover:bg-white/10 transition"
                                    >
                                          Sign Up
                                    </button>
                              </div>
                        </nav>
                  </header>

                  {/* Mobile Side Slide Nav */}
                  <div
                        className={`fixed top-0 left-0 h-full w-64 bg-navigationBar text-white transform transition-transform duration-300 z-40 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                              }`}
                  >
                        <div className="flex items-center justify-between px-4 py-4">
                              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                                    <X />
                              </button>
                        </div>
                        <nav className="flex flex-col px-4 space-y-4 mt-6">
                              {navItems.map(item => (
                                    <Link
                                          key={item.label}
                                          href={item.href}
                                          onClick={() => setMenuOpen(false)}
                                          className={`flex items-center gap-2 text-lg transition ${pathname === item.href ? 'text-primary' : 'hover:text-primary'
                                                }`}
                                    >
                                          <span>{item.icon}</span>
                                          <span>{item.label}</span>
                                    </Link>
                              ))}

                              <button
                                    onClick={() => {
                                          setSearchbarOpen(true);
                                          setMenuOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-lg hover:text-primary transition mt-4"
                              >
                                    <SearchIcon />
                                    Search
                              </button>

                              <button
                                    onClick={() => {
                                          setMenuOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-lg hover:text-primary transition"
                              >
                                    <ShoppingCart />
                                    Cart
                              </button>

                              <div className="mt-6">
                                    <label className="block mb-1 text-sm">Language</label>
                                    <select
                                          value={lang}
                                          onChange={e => setLang(e.target.value)}
                                          className="w-full px-3 py-2 rounded bg-background text-white"
                                    >
                                          <option value="EN">EN</option>
                                          <option value="FR">FR</option>
                                          <option value="CN">CN</option>
                                    </select>
                              </div>

                              <div className="mt-4">
                                    <label className="block mb-1 text-sm">Currency</label>
                                    <select
                                          value={currency}
                                          onChange={e => setCurrency(e.target.value)}
                                          className="w-full px-3 py-2 rounded bg-background text-white"
                                    >
                                          <option value="USD">USD</option>
                                          <option value="EUR">EUR</option>
                                          <option value="JPY">JPY</option>
                                    </select>
                              </div>

                              <button
                                    onClick={() => {
                                          dispatch(openModal());
                                          setMenuOpen(false);
                                    }}
                                    className="mt-6 px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition w-full text-center"
                              >
                                    Sign Up
                              </button>
                        </nav>
                  </div>

                  {/* Dismiss mobile nav backdrop */}
                  {menuOpen && (
                        <div
                              className="fixed inset-0 bg-black bg-opacity-50 z-30"
                              onClick={() => setMenuOpen(false)}
                        />
                  )}

                  <SearchBar
                        searchbarOpen={searchbarOpen}
                        setSearchbarOpen={setSearchbarOpen}
                  />

                  <AuthModals isOpen={isModalOpen} onClose={() => dispatch(closeModal())} />
            </>
      );
}
