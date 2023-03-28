
import React, { useState, useEffect, useRef } from 'react';
import Layout from "@/components/layout";
import Offers from "@/components/Offers";
const serviceApi= `https://localhost:7014/api/ServiceApi`;


export function Services(){

    const [serviceData, setServiceData] = useState([]);
    // To render details as HTML
    const [detailsHtml, setDetailsHtml] = useState("");
    const titleRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(serviceApi);
            const data = await res.json();
            // console.log(data);
            setServiceData(data);
        }
        fetchData();

        // Convert the details string to HTML using dangerouslySetInnerHTML
        setDetailsHtml({ __html: serviceData.details });

      
    }, []);


    return (
        <>
        <Layout> 
        <h1 className="flex justify-center mt-8 mb-8 font-bold sm:text-xl sm:leading-relaxed relative">
            Our Services 
            <span className="block absolute bottom-0 left-1/2 w-1/4 transform -translate-x-1/2">
                <span className="border-b-2 border-pink-600 block h-1">
                </span>
            </span>
        </h1>

        <div className="p-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {serviceData.map(service => (
            <div className="flex flex-col bg-white shadow-md rounded-lg p-6" key={service.id}>
                <div className="h-96 mx-auto">
                    <img src={service.imagePath} alt={service.altText} className="rounded-lg w-full h-full object-cover " />
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold text-center mt-8">{service.name}</h1>
                    <div className="text-md mt-4" dangerouslySetInnerHTML={{ __html: service.details }} />
                    </div>
                    <Offers 
                    serviceId={service.id}  
                    ServiceName={service.name}
                    />
                </div>  
             ))}

        </div>
        </Layout> 
        </>
    );
}

export default Services;





