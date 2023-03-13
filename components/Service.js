import React, { Fragment } from 'react';
import Link from 'next/link'

const Service = ({key, id, name, imagePath, altText}) => {
    return (
        <Fragment>
            <div key={key} className="rounded overflow-hidden shadow-lg mx-auto">
                <img className="w-full mb-8 service-img" src={imagePath} alt={altText}></img>
                <div className="px-6 py-4">
                    <div className="font-normal text-xl text-center mb-8 sm:text-xl sm:leading-relaxed">
                        {name}
                    </div>
                    {/* <p className="text-gray-700 text-base">
                        {item.details}
                    </p> */}
                </div>
                <Link
                className="underline hover:underline-offset-4 mt-8"
                href={`/services/${id}`}
                >
                Read more
            </Link>
            </div>
        </Fragment>
    )
}

export default Service
