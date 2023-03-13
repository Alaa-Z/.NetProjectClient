import Nav from "../../components/nav";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function ServiceDetails(props){
    const router = useRouter();
    const { serviceDetails } = props;
    const serviceId = router.query.serviceId;

    // To render details as HTML
    const [detailsHtml, setDetailsHtml] = useState("");

    useEffect(() => {
        // Convert the details string to HTML using dangerouslySetInnerHTML
        setDetailsHtml({ __html: serviceDetails.details });
    }, [serviceDetails.details]);

    return (
        <>
            <Nav />
            <h1> Details page</h1>
            <p> {serviceDetails.name}</p>
            <div dangerouslySetInnerHTML={{__html: serviceDetails.details}}></div>
            <img src={serviceDetails.imagePath} alt={serviceDetails.altText}/>
        </>
    );
}

// To fetch data at build time 
export async function getServerSideProps(context){
    const { query: { serviceId } } = context;
    // I added this line after I got a self signed certificate error 
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const serviceApi= `https://localhost:7014/api/ServiceApi/${serviceId}`;
    const res = await fetch(serviceApi);
    const serviceDetails = await res.json();
    const url = new URL(serviceDetails.imagePath, serviceApi);
    serviceDetails.imagePath = url.toString();
    console.log(serviceDetails);
    return {
        props: {
            serviceDetails
        }
    }
}
