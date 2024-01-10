import BrandCard from './BrandCard';
import { NewBrand } from '@/types/newBrand';
import { BrandNotFound } from './BrandNotFound';

interface DisplayBrandsProps {
  searchTerm: string;
  filteredPalettes: NewBrand[];
}

export const DisplayBrands = ({ searchTerm, filteredPalettes }: DisplayBrandsProps) => {
  return (
    <div className="md:ml-10 mb-5 md:mr-6 rounded-md mx-4 md:mx-0 pt-2">
      {filteredPalettes.length === 0 && searchTerm.trim() !== '' ? (
        <BrandNotFound searchTerm={searchTerm} />
      ) : (
        <div className="grid grid-cols-2 gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 mb-3 transition-all">
          {filteredPalettes.map((brand) => (
            <BrandCard
              brand={brand.title}
              category={brand.category}
              colors={brand.colors}
              key={brand.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};
