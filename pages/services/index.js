
import Layout from "../../components/layout";
import { useState, useEffect } from 'react';
 
// const serviceApi= `https://localhost:7014/api/ServiceApi`;

export function Services(){

    // const [serviceData, setServiceData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(serviceApi);
    //         const data = await res.json();
    //         console.log(data);
    //         setServiceData(data);
    //     }
    //     fetchData();
    // }, []);


    return (
        <Layout>
            <h1> Services page</h1>
        </Layout>
    );
}

export default Services;
