import Layout from "../components/layout";
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Service from "../components/Service";
import ContactUs from "../components/ContactUs";

const serviceApi= `https://localhost:7014/api/ServiceApi`;

function HomePage(){
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(serviceApi);
            const data = await res.json();
            console.log(data);
            setServiceData(data);
        }
        fetchData();
    }, []);

    return(
        <Layout> 
        <h1 className="flex justify-center mt-8 mb-8 font-bold sm:text-xl sm:leading-relaxed relative">
            We Provide Best Solutions With
            <span className="block absolute bottom-0 left-1/2 w-1/4 transform -translate-x-1/2">
                <span className="border-b-2 border-pink-600 block h-1">
                </span>
            </span>
        </h1>
        
        <div className="p-10 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-20 ">
            {serviceData.slice(0, 3).map(service => (
                <Service
                key={service.id}
                id= {service.id}
                name = {service.name}
                imagePath = {service.imagePath}
                altText = {service.altText}
                />   
            ))}
        </div>

        <div className="pl-10 flex justify-center  items-center  mb-20 font-bold sm:text-xl sm:leading-relaxed relative">
            <Link href="/services" className="mr-4">
                See All Services
            </Link>
            <span className="block absolute bottom-0  w-1/6 transform">
                <span className="border-b-2 border-pink-600 block"></span>
            </span>
        </div>

        <ContactUs />

        <div class="relative">
            <img class="h-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Web Agency" />
            <div class="absolute font-extrabold  bg-gray-100 top-1/4 left-1/4 w-1/2 h-1/2 flex flex-col justify-center items-center">
                <h2 class="text-3xl font-bold text-pink-500">Digital View</h2>
                <p class="text-pink-500">We help businesses grow online</p>
            </div>
        </div>

    </Layout>
    )
}

export default HomePage;