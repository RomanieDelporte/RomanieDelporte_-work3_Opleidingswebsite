import React, {useState, useEffect} from 'react';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
// import { Link } from 'react-router-dom';

// import * as Routes from '../../routes';

import './DocentPage.scss';

// ophalen van data
const DOCENTS = gql`
  {
  teachers {
    id
    firstname
    lastname
    course {
      coursename
    }
    year {
      firstyear
      secondyear
    }
    email
    image
  }
}
`;

const GetDocent =() => {
  const { loading, error, data, networkStatus } = useQuery(DOCENTS, {});

  const [docenten, setDocenten] = useState()
  const [filteredData, setFilteredData] = useState()

  useEffect(() => {
    setDocenten(data)
    console.log(filteredData)
  }, [data])

  useEffect(() => {
    if (docenten) setFilteredData(docenten.teachers)
  }, [docenten])

  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if(loading) return 'loading...';
  if(error) return `ERROR: ${error.message}`;

  const handleChanges = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if(val === "1PGM") {
      const filteredDocenten = docenten.teachers.filter((e) => e.year[0].firstyear.includes(true))
      setFilteredData(filteredDocenten);
    } else if (val === "2PGM") {
      const filteredDocenten = docenten.teachers.filter((e) => e.year[0].secondyear.includes(true))
      setFilteredData(filteredDocenten);
    } else if(val === "all") setFilteredData(docenten.teachers)
  };

  console.log(filteredData)
  
   return (
     <>
      <div className="row">
       <div className="col-12 col-lg-4">
        <form onChange={(e) => handleChanges(e)}>
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option value="all">Alle docenten</option>
              <option value="1PGM">1PGM</option>
              <option value="2PGM">2PGM</option>
            </select>
          </div>
        </form>
       </div>
      </div>
      <div className="row">
        {!loading && !!filteredData && (
          filteredData.map(docent => (
              <div className="col-12 col-lg-4">
                <div className=" pb-3 docent_cards">
                  <img src={require(`../../images/docenten/${docent.image}`).default} alt="docent" />
                  <h3>{docent.firstname} {docent.lastname}</h3>
                </div>
              </div>
          ))
        )}
      </div>
    </>
  ); 
}   

export default GetDocent;