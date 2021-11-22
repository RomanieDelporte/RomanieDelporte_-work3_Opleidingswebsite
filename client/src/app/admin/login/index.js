import React, {useEffect} from 'react';
import { useQuery, useLazyQuery, gql, NetworkStatus} from '@apollo/client';
import { useError } from '../hooks';

import Login from './login';



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

function LoginAdmin() {
    const { handleGqlError} = useError;


    const { loading, error, networkStatus } = useQuery(STUDENTS, {
        onError: handleGqlError,
        fetchPolicy: "cache-first",
        notifyOnNetworkStatusChange: true,
    });

    const [ lazyQueryParams ] = useLazyQuery(GET_STUDENT);

    useEffect(() => {
        if(lazyQueryParams.data && lazyQueryParams.data.user) {
          console.log(lazyQueryParams.data.user.password);
        }
      }, [lazyQueryParams.data])

      if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
      if(loading) return 'loading...';
      if(error) return `ERROR: ${error.message}`;

      return (
        <>
          <Login/>
        </>
      ); 
}

export default LoginAdmin;