import Nav from "../../components/nav";
import { useRouter } from "next/router";
import Typed from 'typed.js';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Layout from "@/components/layout";


export default function ServiceDetails({ serviceDetails, offersList }){
    const router = useRouter();
   
    const serviceId = parseInt(router.query.serviceId);
    // To render details as HTML
    const [detailsHtml, setDetailsHtml] = useState("");
    const [offerDetailsHtml, setOfferDetailsHtml] = useState("");

    const titleRef = useRef(null);
   

    useEffect(() => {
        
        // Convert the details string to HTML using dangerouslySetInnerHTML
        setDetailsHtml({ __html: serviceDetails.details });
        setOfferDetailsHtml({ __html: offersList.details });

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
        <Layout>
        <div className="pl-10 flex justify-start  items-center mt-10 mb-8 font-bold sm:text-xl relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <Link className="mr-4" href="/services">
            Other services
            </Link>
            
            <span className="block absolute bottom-0  w-1/6 transform">
                <span className="border-b-2 border-pink-600 block"></span>
            </span>
        </div>
        
        <div className="heroImage-container">
            <img src={serviceDetails.imagePath} alt={serviceDetails.altText} className="heroImage" />
        </div>
        <div className="mx-auto py-8 px-10">
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
        </div>

        {/* Render this if the offerlist contains elements */}
        {offersList.length > 0 ?
            <div>
                <h2 className="flex justify-center mt-8 mb-8 font-bold sm:text-xl sm:leading-relaxed relative">
                    Our Offers in {(serviceDetails.name)}
                    <span className="block absolute bottom-0 left-1/2 w-1/4 transform -translate-x-1/2">
                        <span className="border-b-2 border-pink-600 block h-1">
                        </span>
                    </span>
                </h2>
                
                <div className="p-10 mx-auto py-8 px-10">
                    {offersList.map(offer => (
                        <div className="pr-8 w-full p-10 m-10  shadow-lg mx-auto  hover:bg-gray-100 hover:transform hover:scale-105 transition-all duration-300">
                            <h2 className="flex justify-center mt-8 mb-8 font-bold sm:text-xl sm:leading-relaxed relative">
                                {offer.name}
                            </h2>
                            <div className="max-w-3xl mx-auto" dangerouslySetInnerHTML={{__html: offer.details}}>
                            </div>
                            {offer.imagePath && ( offer.imagePath.includes(".jpg") || offer.imagePath.includes(".png")) ? (
                                <div className="w-1/3 mx-auto mt-8">
                                    <img className="w-full" src={offer.imagePath} alt={offer.altText} />
                                </div>
                            ) : (
                                <div />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        : null
        }
        </Layout>
        </>
     );
 }
export async function getServerSideProps(context){
    const { query: { serviceId } } = context;
    // I added this line after I got a self signed certificate error 
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    // API for get a service 
    //  const serviceApi= `https://localhost:7014/api/ServiceApi/${serviceId}`;
    const serviceApi= `https://digitalview.azurewebsites.net/api/ServiceApi/${serviceId}`;

    const res = await fetch(serviceApi);
    const serviceDetails = await res.json();
    // To get image path
    const url = new URL(serviceDetails.imagePath, serviceApi);
    serviceDetails.imagePath = url.toString();
    // console.log(serviceDetails);

    // API to get all offers in this service
    // const OffersInServiceApi = `https://localhost:7014/api/ServiceApi/${serviceId}/offers`;
    const OffersInServiceApi= `https://digitalview.azurewebsites.net/api/ServiceApi/${serviceId}`;

    const offerRes = await fetch(OffersInServiceApi);
    const offersList = await offerRes.json();
    // To get image path
    if (Array.isArray(offersList)) {
        offersList.forEach(offer => {
            if ((offer.imagePath)) {
            // offer.imagePath = `https://localhost:7014${offer.imagePath}`;
            offer.imagePath = `https://digitalview.azurewebsites.net${offer.imagePath}`;

            }
        });
    }

    return {
        props: {
            serviceDetails,
            offersList
        }
    }
}