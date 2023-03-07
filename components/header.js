import Link from 'next/link'
import { useState } from 'react';
import styles from "./header.module.css";

const Header = () => {
  // Variable to check mobile menu
  const [isOpen, setIsOpen] = useState(false);
  // toggle the isOpen value
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-pink-600">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          Digital View
        </Link>
      </div>
      <div className="hidden lg:block">
        <div className="text-sm lg:flex-grow">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-pink-600 hover:text-black mr-4">
              Home
          </Link>
          <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-pink-600 hover:text-black mr-4">
              Services
          </Link>
          <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-pink-600 hover:text-black">
            Services
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
          <Link href="/Services" className="mt-6 lg:inline-block lg:mt-0 text-pink-600 hover:text-black">
            Services
          </Link>
        </div>
      </div>
    </nav>
    
    <section className={styles.headerSection} style={{backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')", backgroundSize: "cover", backgroundPosition: "center center"}}>
    <div className="mx-auto max-w-screen-xl mb-20 px-4 py-24 lg:flex lg:h-screen lg:items-center">
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
            className="block w-1/2 rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-pink-50 hover:text-pink-600 focus:outline-none focus:ring  sm:w-auto"
            href="/services"
          >
            Our services
          </Link>
          <Link
            className="block w-1/2 rounded px-12 py-3 text-sm font-medium text-white shadow hover:text-pink-600 focus:outline-none focus:ring active:text-pink-50 sm:w-auto"
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
