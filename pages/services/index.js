
import Layout from "../../components/layout";
import { useState, useEffect } from 'react';
 
export function Services(){
    const [serviceData, setServiceData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch('https://localhost:7014/api/ServiceApi');
    //         const data = await res.json();
    //         // console.log(data);
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
