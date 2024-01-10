'use client';
import { useState } from 'react';

import { DisplayBrands } from '@/components/DisplayBrands';
import { SearchInput } from '@/components/SearchInput';

import { SuggestPalette } from '@/components/SuggestPalette';
import { getAllBrands } from '@/lib/getAllBrands';
import { NewBrand } from '@/types/newBrand';
import { ViewAll } from '@/components/ViewAll';

export default function Page({ params }: { params: { slug: string } }) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allPalettes: NewBrand[] = getAllBrands();
  const palettesFilteredByCategory = allPalettes.filter(
    (brand: NewBrand) => brand.category.toLocaleLowerCase() === params.slug
  );

  const [filteredPalettes, setFilteredPalettes] = useState(palettesFilteredByCategory);

  return (
    <div className="md:ml-60 md:py-0">
      <SearchInput
        palettesFilteredByCategory={palettesFilteredByCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilteredPalettes={setFilteredPalettes}
        placeholder={`Search ${palettesFilteredByCategory.length} brands palettes`}
      />
      <div className="relative">
        <div className="flex items-center justify-between my-5 mx-4 md:my-4 md:ml-10 md:mr-6">
          <ViewAll />
          <SuggestPalette />
        </div>
        <DisplayBrands filteredPalettes={filteredPalettes} searchTerm={searchTerm} />
      </div>
    </div>
  );
}
