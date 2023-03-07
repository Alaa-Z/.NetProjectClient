import React, { Fragment } from 'react';

const Service = ({key, name, imagePath, altText}) => {
    return (
        <Fragment>
            <div key={key} className="rounded overflow-hidden shadow-lg mx-auto">
                <img className="w-full mb-8 service-img" src={imagePath} alt=""></img>
                <div className="px-6 py-4">
                    <div className="font-normal text-xl text-center mb-8 sm:text-xl sm:leading-relaxed">
                        {name}
                    </div>
                    {/* <p className="text-gray-700 text-base">
                        {item.details}
                    </p> */}
                </div>
            </div>
        </Fragment>
    )
}

export default Service
