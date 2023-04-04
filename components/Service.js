import React, { Fragment } from 'react';
import Link from 'next/link'

const Service = ({key, id, name, imagePath, altText}) => {
    return (
        <Fragment>
            <div key={key} className="shadow-lg mx-auto  hover:bg-gray-100 hover:transform hover:scale-105 transition-all duration-300">
            {imagePath && ( imagePath.includes(".jpg") || imagePath.includes(".png")) ?  (

                <img className="w-full mb-8 service-img" src={imagePath} alt={altText}></img>)
                :
                null
                }
                <div className="px-6 py-4 flex flex-col ">
                    <div className="font-normal text-xl text-center mb-8 sm:text-xl sm:leading-relaxed">
                    {name}
                    </div>
                    <Link
                    className="block rounded bg-pink-600 text-sm  text-white shadow px-4 py-1 self-end"
                    href={`/services/${id}`}
                    >
                    Explore
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Service
