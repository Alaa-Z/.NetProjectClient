
import React, { useState, useEffect, useRef } from 'react';
import Layout from "@/components/layout";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceData.map(service => (
            <div className="flex flex-col bg-white shadow-md rounded-lg p-6" key={service.id}>
                <div className="flex-shrink-0">
                    <img src={service.imagePath} alt={service.altText} className="rounded-lg" />
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold text-center mt-8">{service.name}</h1>
                    <div className="mt-2 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: service.details }} />
                </div>
            </div>
        ))}
        </div>
        </Layout> 
        </>
    );
}

export default Services;
