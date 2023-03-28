import Link from 'next/link'

function ContactUs() {
  return (

    <div className="grid grid-cols-5 mb-10">
        <div className="bg-pink-600 " >
            <img className="hidden md:block" src= "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="background image"></img>
        </div>
        <div className="bg-pink-600 col-span-5 flex flex-col items-center justify-center md:col-span-3" >
            <p className="p-4 text-white text-center"> Wondering about future projects? Or perhaps ask a question about a job advertisement? Send us an email and we'll be in touch.</p>
            <Link
            className="block w-1/4 mx-auto mb-6 text-center rounded bg-white px-4 py-3 text-sm  text-pink-600 shadow hover:bg-pink-50 hover:text-pink-600 focus:outline-none focus:ring"
            href="/services"
            >
            Contact Us
        </Link>
        </div> 
        <div className="bg-pink-600 " >
            <img className= "hidden md:block" src= "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="background image"></img>
        </div>
    </div>
  )
}
export default ContactUs;