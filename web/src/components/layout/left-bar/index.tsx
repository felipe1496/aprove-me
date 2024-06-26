'use client';

import { HandCoins, Home, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { AppRoutes } from '@/constants/app-routes';
import { useAppContext } from '@/hooks/useAppContext';
import { cn } from '@/utils/functions';

export const LeftBar: React.FC = () => {
  const { isLeftBarOpen } = useAppContext();

  return (
    <aside
      className={cn(
        isLeftBarOpen ? 'translate-x-0' : '-translate-x-full',
        'fixed top-12 flex h-[calc(100vh-3rem)] w-64 justify-center border-r border-r-zinc-700 bg-base-300 shadow-2xl shadow-black transition-all',
      )}
    >
      <ul className="menu w-full bg-base-200">
        <li>
          <Link href={AppRoutes.home}>
            <Home size={18} />
            Home
          </Link>
        </li>
        <li>
          <details open>
            <summary>
              <HandCoins size={18} /> Payables
            </summary>
            <ul>
              <li>
                <Link href={AppRoutes.payables.create}>Create</Link>
              </li>
              <li>
                <Link href={AppRoutes.payables.index}>List</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open>
            <summary>
              <User size={18} /> Assignors
            </summary>
            <ul>
              <li>
                <Link href={AppRoutes.assignors.create}>Create</Link>
              </li>
              <li>
                <Link href={AppRoutes.assignors.index}>List</Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </aside>
  );
};
