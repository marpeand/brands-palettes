'use client';

import React, { useState } from 'react';
import { Rubik } from 'next/font/google';

import { cn } from '@/lib/cn';
import Link from 'next/link';

const rubik = Rubik({ weight: '500', subsets: ['latin'] });

interface BrandCardProps {
  brand: string;
  colors: string[];
  category: string;
}

const BrandCard = ({ brand, colors, category }: BrandCardProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const hasMultipleColors = colors.length > 1;
  const isFirstColor = (color: string) => color === colors[0];
  const isLastColor = (color: string) => color === colors[colors.length - 1];

  const onCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 800);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <div
      className={cn(
        'h-52 border dark:border-neutral-700/70 rounded-lg p-2 flex flex-col border-neutral-400/70 dark:bg-neutral-800/20'
      )}
    >
      <div className="flex flex-col grow">
        {colors.map((color: string) => (
          <button
            className={cn(
              'flex group w-full grow cursor-pointer relative',
              {
                'rounded-lg': !hasMultipleColors,
                'rounded-t-lg': isFirstColor(color),
                'rounded-b-lg': isLastColor(color)
              },
              {
                'h-[18%]': isFirstColor(color),
                'h-[5%] hover:h-[25%] transition-all duration-100 ease-in-out': !isFirstColor(color)
              }
            )}
            style={{ backgroundColor: color }}
            onClick={() => onCopy(color)}
            key={color}
          >
            <span
              className={cn(
                'text-sm font-medium opacity-0 rounded-tr-lg group-hover:opacity-100 bg-black bg-opacity-50 px-2 transition absolute bottom-0 left-0',
                { 'rounded-bl-lg': isLastColor(color) }
              )}
            >
              {copied ? 'Copied!' : color}
            </span>
          </button>
        ))}
      </div>
      <div className="pt-2 flex flex-col  text-dark">
        <span className={cn('text-[15px] dark:text-white capitalize', rubik.className)}>
          {brand}
        </span>
        <Link
          href={`/category/${category}`}
          className={cn('text-[12px] dark:text-neutral-500 hover:underline')}
        >
          {category}
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
