import Nav from "../../components/nav";
import { useRouter } from "next/router";
import Typed from 'typed.js';
import React, { useState, useEffect, useRef } from 'react';
import Layout from "@/components/layout";

export default function ServiceDetails(props){
    const router = useRouter();
    const { serviceDetails } = props;
    const { offersList } = props;

    const serviceId = router.query.serviceId;

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

    // get the number form fetch all service 
    const numServices = props.allServices.length;

    // next and previous Ids 
    const nextServiceId = Number(serviceId) + 1; 
    const previousServiceId = Number(serviceId) - 1;

    // to check if there is next or previous id 
    const hasNextService = nextServiceId <= numServices;
    const hasPreviousService = previousServiceId >= 1;

    // to handle the clikc event 
    const handleNextClick = () => {
        router.push(`/services/${nextServiceId}`);
    };
    
    const handlePreviousClick = () => {
        router.push(`/services/${previousServiceId}`);
    };
    
    
    return (
        <>
        <Layout>     
            <div className="heroImage-container">
                <img src={serviceDetails.imagePath} alt={serviceDetails.altText} className="heroImage" />
            </div>
            <div className="mx-auto py-8 px-10">
                <div className="pr-8 w-full mx-auto mt-8 mb-8">
                    <h1 ref={titleRef} 
                        className="flex justify-center mt-8 mb-8 font-bold sm:text-xl sm:leading-relaxed relative ">
                        {(serviceDetails.name)}
                    </h1>
                    <div className="max-w-3xl mx-auto" 
                        dangerouslySetInnerHTML={{__html: serviceDetails.details}}
                        >
                    </div>
                </div>
            </div>

            {/* Render this if the offerlist contains elemnts */}
            {offersList.length > 0 &&
            <h2 className="flex justify-center mt-8 mb-8 font-bold sm:text-xl sm:leading-relaxed relative">
            Our Offers in {(serviceDetails.name)}
            <span className="block absolute bottom-0 left-1/2 w-1/4 transform -translate-x-1/2">
                <span className="border-b-2 border-pink-600 block h-1">
                </span>
            </span>
            </h2>
            }
           
            <div className="mx-auto py-8 px-10">
            {offersList.map(offer => (
                <div className="pr-8 w-full p-10 m-10  shadow-lg mx-auto  hover:bg-gray-100 hover:transform hover:scale-105 transition-all duration-300">
                    <h2
                        className="flex justify-center mt-8 mb-8 font-bold sm:text-xl sm:leading-relaxed relative">
                        {offer.name}
                    </h2>
                    <div className="max-w-3xl mx-auto" 
                        dangerouslySetInnerHTML={{__html: offer.details}}
                        >
                    </div>
                    {offer.imagePath && ( offer.imagePath.includes(".jpg") || offer.imagePath.includes(".png")) ?  (
                        <div className="w-1/3 mx-auto mt-8">
                        <img className="w-full" src={offer.imagePath} alt={offer.altText} />
                        </div>
                        ) : (
                        <div />
                        )}
                    </div>
                    ))}
            </div>
            
           <div className="flex justify-center my-8">
                {hasPreviousService && 
                <button onClick={handlePreviousClick} className="border-2 border-pink-500 rounded-full py-2 px-6 mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>}

                {hasNextService && 
                <button onClick={handleNextClick} className="border-2 border-pink-500 rounded-full py-2 px-6 mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>}
            </div>
            </Layout>
        </>
    );
}

// To fetch data at build time 
export async function getServerSideProps(context){
    const { query: { serviceId } } = context;
    // I added this line after I got a self signed certificate error 
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    // API to get a service 
    const serviceApi= `https://localhost:7014/api/ServiceApi/${serviceId}`;
    const res = await fetch(serviceApi);
    const serviceDetails = await res.json();
    // To get image path
    const url = new URL(serviceDetails.imagePath, serviceApi);
    serviceDetails.imagePath = url.toString();

    // API to get all services => get the length
    const servicesApi = `https://localhost:7014/api/ServiceApi/`;
    const allServicesRes = await fetch(servicesApi);
    const allServices = await allServicesRes.json();

    // API to get all offers in this service
    const OffersInServiceApi = `https://localhost:7014/api/ServiceApi/${serviceId}/offers`;
    const offerRes = await fetch(OffersInServiceApi);
    const offersList = await offerRes.json();
    // To get image path
    offersList.forEach(offer => {
        if ((offer.imagePath)) {
          offer.imagePath = `https://localhost:7014${offer.imagePath}`;
        }
    });


    return {
        props: {
            serviceDetails,
            allServices,
            offersList
        }
    }
}
