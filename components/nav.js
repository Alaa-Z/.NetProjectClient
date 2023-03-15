import Link from 'next/link'
import { useState } from 'react';

const Nav = () => {
  // Variable to check mobile menu
  const [isOpen, setIsOpen] = useState(false);
  // toggle the isOpen value
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex  items-center flex-shrink-0 text-pink-600">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          Digital View
        </Link>
      </div>
      <div className="hidden lg:block">
        <div className="text-sm lg:flex-grow space-x-4">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-pink-600 hover:text-black mr-4">
              Home
          </Link>
          <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-pink-600 hover:text-black mr-4">
              Services
          </Link>
          <Link href="/member" className="block mt-4 lg:inline-block lg:mt-0 text-pink-600 hover:text-black">
            Team
          </Link>
          <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-pink-600 hover:text-black">
            Contact
          </Link>
        </div>
       </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-pink-600 border-gray-400 hover:text-black hover:border-white"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-full block lg:hidden`}
      >
        <div className="text-sm lg:flex-grow flex flex-col lg:flex-row items-center">
          <Link href="/" className="mt-6 lg:inline-block lg:mt-0 text-pink-600 hover:text-black">
              Home
          </Link>
          <Link href="/services" className=" mt-6 lg:inline-block lg:mt-0 text-pink-600 hover:text-black">
              Services
          </Link>
          <Link href="/member" className=" mt-6 lg:inline-block lg:mt-0 text-pink-600 hover:text-black">
              Team
          </Link>
          <Link href="/contact" className="mt-6 lg:inline-block lg:mt-0 text-pink-600 hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </>

  )
}

export default Nav;
