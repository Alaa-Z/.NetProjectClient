import Link from 'next/link'
import styles from "./headerImg.module.css";

const HeaderImg = () => {
 
  return (
    <>  
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

export default HeaderImg;
