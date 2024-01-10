import Link from 'next/link';
import { IoMdReturnLeft } from 'react-icons/io';
export const ViewAll = () => {
  return (
    <Link
      className="flex space-x-1 items-center font-medium text-sm text-dark dark:text-neutral-300 dark:hover:text-white duration-100 transition-colors"
      href="/"
    >
      <IoMdReturnLeft />
      <span>View All</span>
    </Link>
  );
};
