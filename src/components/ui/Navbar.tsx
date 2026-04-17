'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFavorites } from '@/context/FavoritesContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/search', label: 'Search' },
  { href: '/favorites', label: 'Favorites' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites();

  return (
    <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
            🎬 Cine-Stream
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative ${
                    pathname === item.href
                      ? 'bg-white/20 backdrop-blur-sm text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {item.href === '/favorites' && favorites.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
                      {favorites.length}
                    </span>
                  )}
                </Link>
              ))}
            </div>
            
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
}