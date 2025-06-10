'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-extrabold tracking-wide text-blue-600 hover:text-blue-700 transition"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Reloadin
          </span>
        </motion.a>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Game</a>
          <a href="#layanan" className="text-gray-700 hover:text-blue-600 font-medium transition">PPOB</a>
          <a href="#tentang" className="text-gray-700 hover:text-blue-600 font-medium transition">Cek Transaksi</a>
        </div>

        {/* Search & Login */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Cari Layanan"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              <FaSearch />
            </button>
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Masuk</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-lg space-y-3">
          <div className="flex flex-col gap-2 mt-2">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Game</a>
            <a href="#layanan" className="text-gray-700 hover:text-blue-600 font-medium transition">PPOB</a>
            <a href="#tentang" className="text-gray-700 hover:text-blue-600 font-medium transition">Cek Transaksi</a>
          </div>

          <div className="mt-3">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Cari Layanan"
                className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <FaSearch />
              </button>
            </div>
          </div>

          <a href="#" className="block mt-3 text-gray-700 hover:text-blue-600 font-medium transition">
            Masuk
          </a>
        </div>
      )}
    </nav>
  );
}
