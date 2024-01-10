import { brands } from '@/data/brands';

import { NewBrand } from '@/types/newBrand';

export function getAllBrands(): NewBrand[] {
  const transformedBrands: NewBrand[] = [];

  Object.entries(brands).forEach(([category, brandObj]) => {
    Object.entries(brandObj).forEach(([brand, colors]) => {
      transformedBrands.push({
        title: brand,
        category: category,
        colors: colors
      });
    });
  });

  return transformedBrands.sort((a: NewBrand, b: NewBrand) => a.category.localeCompare(b.category));
}
