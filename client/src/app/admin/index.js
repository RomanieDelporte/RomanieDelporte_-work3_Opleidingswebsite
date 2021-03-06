import React, {useEffect} from 'react';
import { useQuery, useLazyQuery, gql, NetworkStatus} from '@apollo/client';
import { useError } from './hooks';
import Register from './Register'



const STUDENTS = gql `
{
    students {
        id 
        email
        password
    }
}
`
const GET_STUDENT = gql `
    query student($id:ID) {
        student(id:$id) {
            password
        }
    }

`

function Admin() {
    const { handleGqlError } = useError;

    // die usequery wordt opgevraagd elke keer onze component wordt gerenderd
    // loading  je krijgt een status wanneer er data wordt geladen
    // error  wanneer er zich iets fout voordoet
    //  data wanneer je de data effectief hebt dus er is iets succesvol gebeurd
    //  refetch je kan de data opnieuw ophalen die in de usequery zit
    const { loading, error, networkStatus } = useQuery(STUDENTS, {
    onError: handleGqlError,
    fetchPolicy: "cache-first", // https://www.apollographql.com/docs/react/data/queries/#supported-fetch-policies
    notifyOnNetworkStatusChange: true,
    // pollInterval: 500,
  });

    // wil je data ophalen door op een button te clicken dan gebruik je uselazyquery
    const [ lazyQueryParams] = useLazyQuery(GET_STUDENT);

  useEffect(() => {
    if(lazyQueryParams.data && lazyQueryParams.data.user) {
      console.log(lazyQueryParams.data.user.password);
    }
  }, [lazyQueryParams.data])


  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if(loading) return 'loading...';
  if(error) return `ERROR: ${error.message}`;
  // if(lazyQueryParams.loading) return 'loading user...';


   return (
    <>
      <Register></Register>
    </>
  ); 
}   

export default Admin;
