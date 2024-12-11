import React from 'react';
import { Code, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Create Mashup', href: '/create' },
    { label: 'Browse Mashups', href: '/browse' },
    { label: 'Login', href: '/login' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold">CF Mashup Generator</span>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}