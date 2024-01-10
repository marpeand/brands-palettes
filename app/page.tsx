'use client';

import React, { useState } from 'react';

import { getAllBrands } from '@/lib/getAllBrands';

import { NewBrand } from '@/types/newBrand';

import { SortButton } from '@/components/SortButton';
import { DisplayBrands } from '@/components/DisplayBrands';
import { SuggestPalette } from '@/components/SuggestPalette';
import { SearchInput } from '@/components/SearchInput';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const allPalettes: NewBrand[] = getAllBrands();

  const [filteredPalettes, setFilteredPalettes] = useState<NewBrand[]>(allPalettes);

  return (
    <div className="md:ml-60 md:py-0">
      <SearchInput
        searchTerm={searchTerm}
        palettesFilteredByCategory={allPalettes}
        setSearchTerm={setSearchTerm}
        setFilteredPalettes={setFilteredPalettes}
        placeholder={`Search ${allPalettes.length} brands palettes`}
      />
      <div className="relative">
        <div className="flex items-center justify-between my-5 mx-4 md:my-4 md:ml-10 md:mr-6">
          <SortButton
            filteredPalettes={filteredPalettes}
            setFilteredPalettes={setFilteredPalettes}
          />
          <SuggestPalette />
        </div>
        <DisplayBrands filteredPalettes={filteredPalettes} searchTerm={searchTerm} />
      </div>
    </div>
  );
}
