'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/Services', label: 'Services' },
    { href: '/contract', label: 'Contact' },
  ];



  if(!pathname.includes('dashboard'))
{
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-indigo-600">
        <Link href="/">Next-JS App</Link>
      </div>

      <div className="space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-medium ${
              pathname === item.href
                ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                : 'text-gray-700 hover:text-indigo-600'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
else{
    return <></>
}


};

export default Navbar;
