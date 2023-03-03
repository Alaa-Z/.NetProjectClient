import Layout from "../components/layout";
import { useState, useEffect } from 'react';

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
        <h1 className="flex justify-center mt-8 text-xlg font-bold">
            We Provide Best Solutions With      
        </h1>
        <div className="p-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-20">
            {serviceData.map((item) => (
                <div key={item.id} className="rounded overflow-hidden shadow-lg mx-auto">
                    <img className="w-full" src={item.imagePath} alt={item.altText}></img>
                    <div className="px-6 py-4">
                        <div className="font-medium text-xl mb-2 text-center">
                            {item.name}
                        </div>
                        {/* <p className="text-gray-700 text-base">
                            {item.details}
                        </p> */}
                    </div>
                </div>
            ))}
        </div>
    </Layout>
    )
}

export default HomePage;