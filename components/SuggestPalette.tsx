import { MdOutlineArrowOutward } from 'react-icons/md';

export const SuggestPalette = () => {
  return (
    <a
      href="https://github.com/marpeand/brands-palettes/issues/new"
      target="_blank"
      className="flex space-x-1 font-medium text-sm text-dark dark:text-neutral-300 dark:hover:text-white duration-100 transition-colors"
    >
      <span>Suggest a palette</span>
      <MdOutlineArrowOutward />
    </a>
  );
};
