import Nav from "../../components/nav";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
 
export function ServiceDetails(){

    const router = useRouter();
    console.log(router.query.serviceId);
    const serviceId= router.query.serviceId;

    const serviceApi= "https://localhost:7014/api/ServiceApi/"+ serviceId;

    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(serviceApi);
            const data = await res.json();
            console.log(data);
            setServiceDetails(data);
        }
        fetchData();
    }, []);


    return (
        <>
        <Nav />
            <h1> Details page</h1>
            <p> {serviceDetails.name}</p>
        </>
        
    );
}

export default ServiceDetails;