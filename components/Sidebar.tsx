import React from 'react';
import { brands } from '@/data/brands';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

import { FiBox } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { RiHeart2Line } from 'react-icons/ri';

import { MdOutlineArrowOutward } from 'react-icons/md';

export const Categories = () => (
  <div className="flex overflow-x-auto items-center space-x-1  border-b border-neutral-300 pb-3 border-neutral-700/40 md:mb-3 md:flex-col md:space-x-0 md:space-y-1">
    {Object.keys(brands).map((category) => (
      <Link
        key={category}
        href={`/category/${category}`}
        className="capitalize flex w-full items-center text-sm  rounded-md p-2 transition-none duration-100 text-neutral-600 hover:text-dark dark:hover:text-white dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700/40"
        rel="noreferrer noopener"
        aria-label={`Go to ${category} category`}
      >
        {category}
      </Link>
    ))}
  </div>
);

export function Sidebar() {
  return (
    <aside className="w-full overflow-y-visible md:overflow-x-hidden border-r border-r-neutral-600 border-neutral-300 md:fixed md:left-0 md:top-0 md:h-full md:w-60 md:pb-10">
      <div className="px-5 pt-6">
        <div className="mb-3 border-b border-neutral-300 pb-3 border-neutral-700/40">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold text-dark dark:text-neutral-300 dark:hover:text-white"
            >
              Brands Palettes
            </Link>
            <ThemeSwitcher />
          </div>
          <p className="mt-2 font-normal text-sm text-neutral-500">🎨 Hexadecimal brands colors.</p>
        </div>
        <Categories />
        <div className="mt-3 text-sm flex flex-row items-center space-x-2 border-b border-neutral-300 pb-3 border-neutral-700/40 md:mt-0 md:flex-col md:space-x-0 md:space-y-1">
          <Link
            href="https://github.com/marpeand/brands-palettes#getting-started"
            target="_blank"
            className="flex w-full items-center space-x-2 rounded-md py-2 md:p-2 duration-100 text-neutral-600 hover:text-dark dark:hover:text-white dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700/40"
          >
            <FiBox />
            <span>Submit palette</span>
            <MdOutlineArrowOutward size={12} />
          </Link>
          <Link
            href="https://github.com/marpeand/brands-palettes"
            target="_blank"
            className="flex w-full items-center space-x-2 rounded-md py-2 md:p-2 duration-100 text-neutral-600 hover:text-dark dark:hover:text-white dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700/40"
          >
            <FiGithub />
            <span>Github repo</span>
            <MdOutlineArrowOutward size={12} />
          </Link>
        </div>
        <Link
          href="https://github.com/marpeand"
          target="_blank"
          className="mt-3 hidden md:flex items-center space-x-2 duration-100 text-neutral-600 hover:text-dark dark:hover:text-white dark:text-neutral-400"
        >
          <RiHeart2Line color={'#E53238'} />
          <p className="text-muted text-sm">Created by marpeand</p>
          <MdOutlineArrowOutward size={12} />
        </Link>
      </div>
    </aside>
  );
}
