import Link from 'next/link'

const Header = () => {
  return (
    <>
    <nav className="flex justify-center space-x-20 mt-10 text-lg"> 
      <Link href="/" className="text-blue-700 font-extrabold sm:block">
        Digital View
      </Link>
      <div>
      <Link href="/" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Link>
      <Link href="/services" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Services</Link>
      <Link href="/services" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Services</Link>
      <Link href="/services" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Services</Link>
      </div>
    </nav>
 
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl mb-2">
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
            className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-700 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
            href="/Services"
          >
            Our services
          </Link>
          <Link
            className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-yellow-700 focus:outline-none focus:ring active:text-yellow-500 sm:w-auto"
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
