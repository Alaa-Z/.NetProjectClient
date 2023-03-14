import Nav from "../../components/nav";
import { useRouter } from "next/router";
import Typed from 'typed.js';
import React, { useState, useEffect, useRef } from 'react';

export default function ServiceDetails(props){
    const router = useRouter();
    const { serviceDetails } = props;
    const serviceId = router.query.serviceId;

    // To render details as HTML
    const [detailsHtml, setDetailsHtml] = useState("");
    const titleRef = useRef(null);

    useEffect(() => {
        // Convert the details string to HTML using dangerouslySetInnerHTML
        setDetailsHtml({ __html: serviceDetails.details });
      
        // To animate the name of the service 
        const typed = new Typed(titleRef.current, {
          strings:  [serviceDetails.name],
          typeSpeed: 80,
          backSpeed: 50,
          loop: false,
          showCursor: false // to hide the cursor
        });
      
        return () => {
          typed.destroy();
        }
      }, []);
      


    return (
        <>
        <Nav />
            <hr className="bg-pink-600 py-4 px-8 ">
            </hr>
            <div className="mx-auto py-8 px-4">
                <div className="md:w-1/2 pr-8 w-full mx-auto mt-8 mb-8">
                    <h1 ref={titleRef} 
                        className="flex justify-center mt-8 mb-8 font-bold sm:text-xl sm:leading-relaxed relative">
                        {(serviceDetails.name)}
                    </h1>
                    <div className="max-w-3xl mx-auto" 
                        dangerouslySetInnerHTML={{__html: serviceDetails.details}}
                        >
                    </div>
                </div>

                <div className="md:w-1/2 mx-auto ">
                    <img src={serviceDetails.imagePath} alt={serviceDetails.altText} className="w-full object-cover max-h-96" />
                </div>
            </div>
        </>
    );
}

// To fetch data at build time 
export async function getServerSideProps(context){
    const { query: { serviceId } } = context;
    // I added this line after I got a self signed certificate error 
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    // API for get a service 
    const serviceApi= `https://localhost:7014/api/ServiceApi/${serviceId}`;
    const res = await fetch(serviceApi);
    const serviceDetails = await res.json();
    // To get image path
    const url = new URL(serviceDetails.imagePath, serviceApi);
    serviceDetails.imagePath = url.toString();
    // console.log(serviceDetails);
    return {
        props: {
            serviceDetails
        }
    }
}
