'use client';

import { NewBrand } from '@/types/newBrand';
import { useState } from 'react';
import { FaSortAlphaDown, FaSortAmountDown } from 'react-icons/fa';

interface SortProps {
  filteredPalettes: NewBrand[];
  setFilteredPalettes: React.Dispatch<React.SetStateAction<NewBrand[]>>;
}

export const SortButton = ({ filteredPalettes, setFilteredPalettes }: SortProps) => {
  const [sorted, setSorted] = useState<boolean>(false);

  const sortAlphabetically = () => {
    const sortedPalettes = [...filteredPalettes].sort((a: NewBrand, b: NewBrand) =>
      a.title.localeCompare(b.title)
    );
    setFilteredPalettes(sortedPalettes);
  };

  const sortByCategory = () => {
    const sortedPalettes = [...filteredPalettes].sort((a: NewBrand, b: NewBrand) =>
      a.category.localeCompare(b.category)
    );

    setFilteredPalettes(sortedPalettes);
  };

  const sort = () => {
    if (sorted) {
      sortByCategory();
    } else {
      sortAlphabetically();
    }
    setSorted(!sorted);
  };

  return (
    <button
      onClick={() => sort()}
      className="flex items-center space-x-1 font-medium text-sm text-dark dark:text-neutral-300 dark:hover:text-white duration-100 transition-colors"
    >
      {sorted ? <FaSortAmountDown /> : <FaSortAlphaDown />}
      <span>{sorted ? 'Sort by category' : 'Sort alphabetically'}</span>
    </button>
  );
};
