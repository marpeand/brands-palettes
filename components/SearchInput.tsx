'use client';

import { NewBrand } from '@/types/newBrand';
import { IoIosSearch } from 'react-icons/io';

interface SearchProps {
  searchTerm: string;
  palettesFilteredByCategory: NewBrand[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setFilteredPalettes: React.Dispatch<React.SetStateAction<NewBrand[]>>;
  placeholder: string;
}

export const SearchInput = ({
  searchTerm,
  palettesFilteredByCategory,
  setSearchTerm,
  setFilteredPalettes,
  placeholder
}: SearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLocaleLowerCase());

    const filteredResults = palettesFilteredByCategory.filter((brand: NewBrand) =>
      brand.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredPalettes(filteredResults);
  };

  return (
    <div className="relative ">
      <div className="absolute inset-y-0 md:left-10 left-5 flex items-center text-neutral-500">
        <IoIosSearch size={25} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
        className="w-full placeholder-neutral-500 text-sm text-dark dark:text-white bg-transparent py-5 pl-12 md:pl-20 placeholder-neutral-400 focus:outline-none border-b border-b-1 border-b-neutral-700"
      />
    </div>
  );
};
