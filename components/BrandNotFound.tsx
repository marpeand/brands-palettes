import { GiCardboardBox } from 'react-icons/gi';
import { MdOutlineArrowOutward } from 'react-icons/md';

export const BrandNotFound = ({ searchTerm }: { searchTerm: string }) => {
  return (
    <div className="mt-6 flex w-full flex-col items-center justify-center text-gray-600 dark:text-gray-400">
      <GiCardboardBox size={80} />
      <p className="text-xl my-1 font-medium">Brand not found</p>
      <p className="text-md mb-4 font-mono">&quot;{searchTerm}&quot;</p>

      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/marpeand/brands-palettes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-sm rounded-md border border-neutral-300 p-2 duration-100 hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700/40"
        >
          <span>Submit brand palette</span>
          <MdOutlineArrowOutward />
        </a>

        <a
          href="https://github.com/marpeand/brands-palettes/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm space-x-2 rounded-md border border-neutral-300 p-2 duration-100 hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700/40"
        >
          <span>Request Palette</span>
          <MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
};
