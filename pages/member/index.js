
import React, { useState, useEffect, useRef } from 'react';
import Layout from "@/components/layout";


// const MemberApi= `https://localhost:7014/api/MemberApi`;
const MemberApi= `https://digitalview.azurewebsites.net/api/MemberApi`;


export function Member(){
    const [memberData, setMemberData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(MemberApi);
            const data = await res.json();
            // console.log(data);
            setMemberData(data);
        }
        fetchData();
    }, []);

    return (
        <>
        <Layout>
        <div className="container my-24 px-6 mx-auto">

        <section className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-32">Meet the <u className="text-pink-600">team</u></h2>
            <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3 ">
            {memberData.map(member => (
                <div className="mb-60 md:mb-0 mt-32">
                    <div className="rounded-lg shadow-lg h-full block bg-white">
                    <div className="flex justify-center">
                        <div className="flex justify-center" style={{marginTop: "-75px"}}>
                        {member.imagePath && ( member.imagePath.includes("avatar.jpg")) ?  (
                        <img src="/avatar.jpg" className="rounded-full mx-auto shadow-lg" alt={member.altText}
                        style={{width: "150px"}} /> 
                       
                        ) : (
                            <img src={member.imagePath} className="rounded-full mx-auto shadow-lg" alt={member.altText}
                            style={{width: "150px"}} />
                                                  )}
                        </div>
                    </div>
                    <div className="p-6">
                        <h5 className="text-lg font-bold mb-4">{member.name}</h5>
                        <p className="mb-6">{member.jobTitle}</p>
                        <ul className="list-inside flex mx-auto justify-center">
                        <a rel="noopener noreferrer" href={`mailto:${member.email}`} title="Email" className="dark:text-gray-900 hover:dark:text-violet-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</a>
                        </ul>
                    </div>
                    </div>
                </div>

            ))}
            </div>
        </section>

        </div>
        </Layout>
        </>
    );
}

export default Member;
