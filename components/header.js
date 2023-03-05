import Link from 'next/link'
import { useState } from 'react';

const Header = () => {
  // Variable to check mobile menu
  const [isOpen, setIsOpen] = useState(false);
  // toggle the isOpen value
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          Digital View
        </Link>
      </div>
      <div className="hidden lg:block">
        <div className="text-sm lg:flex-grow">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Home
          </Link>
          <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Services
          </Link>
          <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
            services
          </Link>
        </div>
       </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
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
          <Link href="/" className="mt-6 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
              Home
          </Link>
          <Link href="/services" className=" mt-6 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
              Services
          </Link>
          <Link href="/Services" className="mt-6 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
            Services
          </Link>
        </div>
      </div>
    </nav>
    
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl mb-20 px-4 py-8 lg:flex lg:h-96 lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl mb-10 mt-10">
        Digital View agency 
        </h1>
        <h1 className="text-3xl font-extrabold text-blue-700 sm:block">
        Experts in bringing brands to life digitally.
        </h1>
        <p className="mt-4 sm:text-xl sm:leading-relaxed">
        We are a progressive and insightful web agency, technically and creatively skilled to translate your brand into its best digital self
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="block w-1/2 rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-700 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
            href="/services"
          >
            Our services
          </Link>
          <Link
            className="block w-1/2 rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-yellow-700 focus:outline-none focus:ring active:text-yellow-500 sm:w-auto"
            href="/about"
          >
            About us
          </Link>
        </div>
      </div>
    </div>
    </section>
  </>

  )
}

export default Header;
