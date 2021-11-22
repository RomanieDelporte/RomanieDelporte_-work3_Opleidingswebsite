import React from 'react';
import { useQuery, gql, NetworkStatus} from '@apollo/client';
import { GoQuote } from "react-icons/go";


import './review.scss';

const REVIEW = gql `
{
    review {
        id
        firstname
        lastname 
        student
        reviews
    }
}
`;


const GetReview = () => {
    const { loading, error, data, networkStatus } = useQuery(REVIEW, {});


    console.log(data)
    
  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if(loading) return 'loading...';
  if(error) return `ERROR: ${error.message}`;

  return (
      <>
        <div className="block">
            {!loading && (
                data.review.map((review) => (
                    <div className="col-12 reviews">
                        <div className="pb-3 reviews__info" key={data}>
                            <p><GoQuote color="#7E58C5" /> {review.reviews}</p>
                            <h3>{review.firstname} {review.lastname} {review.student}</h3>
                        </div>
                    </div>
                ))
            )}
        </div>
      </>
  )
}

export default GetReview;