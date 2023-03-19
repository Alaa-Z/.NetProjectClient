import React, { useState, useEffect, useRef } from 'react';

const offersApi = `https://localhost:7014/api/ServiceApi`;

export default function Offers(props) {
  const { serviceId } = props;
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
      <h2 className="flex justify-center mt-8 mb-8 font-bold sm:leading-relaxed relative">
        Our Offers  
      <span className="block absolute bottom-0 left-1/2 w-1/4 transform -translate-x-1/2">
            <span className="border-b-2 border-pink-600 block h-1">
            </span>
      </span>
      </h2>
        {offersList.map(offer => (
        <div key={offer.id}>
        <h2>{offer.name}</h2>
        <h2>{offer.price}</h2>
        <div className="max-w-3xl mx-auto" 
          dangerouslySetInnerHTML={{__html: offer.details}}
        >
        </div>
      {offer.imagePath && ( offer.imagePath.includes(".jpg") || offer.imagePath.includes(".png")) ?  (
        <div className="w-1/3 mt-8 mb-10">
        <img className="w-full" src={`${offer.imagePath}`} alt={offer.altText} />
        </div>
        ) : (
        <div />
        )}
    </div>
  ))}
    </div>
  );
}
