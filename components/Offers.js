import React, { useState, useEffect, useRef } from 'react';

const offersApi = `https://localhost:7014/api/ServiceApi`;

export default function Offers({serviceId, ServiceName}) {
  const [offersList, setOffersList] = useState([]);

  // To render details as HTML
  const [detailsHtml, setDetailsHtml] = useState("");

  useEffect(() => {
    async function fetchOffers() {
      const res = await fetch(`${offersApi}/${serviceId}/offers`);
      const offers = await res.json();

      // needed to get the imagpath 
      const newListOffers = offers.map(offer => {
        return {
          ...offer,
          imagePath: `https://localhost:7014${offer.imagePath}`
        }
      });

  setOffersList(newListOffers);
}

    fetchOffers();

    // Convert the details string to HTML using dangerouslySetInnerHTML
    setDetailsHtml({ __html: offersList.details });
  }, [serviceId]);

  return (
    <div>

      {offersList.length > 0 ?
        <h2 className="flex justify-center mt-8 mb-8 font-bold sm:leading-relaxed relative">
        Our Offers in {ServiceName}
        <span className="block absolute bottom-0 left-1/2 w-1/4 transform -translate-x-1/2">
              <span className="border-b-2 border-pink-600 block h-1">
              </span>
        </span>
        </h2>
      : null}

      {offersList.map(offer => (
            <div key={offer.id} className="flex flex-col mb-8 bg-white shadow-md rounded-lg p-6 mb-10">
                  {offer.imagePath && ( offer.imagePath.includes(".jpg") || offer.imagePath.includes(".png")) ?  (
              <div className="w-3/4 mt-8 mb-10 mx-auto rounded-lg">
                <img className="w-full rounded-lg" src={`${offer.imagePath}`} alt={offer.altText} />
              </div>
            ) : (
              <div />
            )}
            <h2 className="text-2xl font-bold text-left mt-4 mb-4 text-pink-700 text-center" >{offer.name}</h2>
            <p className="mt-2 text-gray-600 text-sm"> Pricing starting from: {offer.price} $</p>
            <div className="mt-2 text-lg  text-left"
              dangerouslySetInnerHTML={{__html: offer.details}}
            >
            </div>
        
      </div>
    ))} 
    </div>
  );
}
