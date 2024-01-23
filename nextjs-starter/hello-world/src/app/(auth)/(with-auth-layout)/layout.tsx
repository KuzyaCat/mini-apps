'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'Register',
    href: '/register',
  },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Forgot Password',
    href: '/forgot-password',
  },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <h2>Inner layout</h2>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
          >
            {link.name}
          </Link>
        )
      })}
      {children}
    </div>
  );
}
