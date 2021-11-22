import React from 'react';
import { useQuery, gql, NetworkStatus} from '@apollo/client';



import './shedulepage.scss';

const SHEDULE = gql `
{
    schedule {
        id
        weekday
        firstyear {
            morning
            afternoon
        }
        secondyear {
            morning
            afternoon
        }
    }
}
`;


const GetShedule = () => {
    const { loading, error, data, networkStatus } = useQuery(SHEDULE, {});


    console.log(data)
    
  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if(loading) return 'loading...';
  if(error) return `ERROR: ${error.message}`;

  return (
      <>
        <div className="row">
            {!loading && (
                data.schedule.map((schedule) => (
                    <div className="col-12 col-lg-4 schedule">
                        <div className="pb-3 schedule__cards" key={data}>
                            <h2>{schedule.weekday}</h2>
                                <div>
                                    <h3>1PGM</h3>
                                    <p>Voormiddag - 8:45 - 12:00 </p>
                                    <ul>
                                        <li>{schedule.firstyear[0].morning}</li>
                                    </ul>
                                    <p>Namiddag - 13:00 - 16:00 </p>
                                    <ul>
                                        <li>{schedule.firstyear[0].afternoon}</li>
                                    </ul>
                                </div>
                            <div>
                                <h3>2PGM</h3>
                                <p>Voormiddag - 8:45 - 12:00 </p>
                                    <ul>
                                        <li>{schedule.secondyear[0].morning}</li>
                                    </ul>
                                <p>Namiddag - 13:00 - 16:00 </p>
                                <ul>
                                    <li>{schedule.secondyear[0].afternoon}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
      </>
  )
}

export default GetShedule;