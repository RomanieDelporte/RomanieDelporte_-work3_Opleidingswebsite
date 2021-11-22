import {useState, useEffect} from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';

const DBDocent = ({ steps, triggerNextStep }) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState('');
    const [trigger, setTrigger] = useState(false)

    const QUERY = `
    {
      teachers {
          id
          firstname
          lastname
          course
          year
          email
      }
    }`

    useEffect(() => {
        const getAllRecipes = async (config) => {
            const GRAPHQL_URL = process.env.NODE_ENV === 'development'
            ? 'http://localhost:4000'
            : 'https://pgm-promotion.herokuapp.com/';
            
            const FETCH_OPTIONS = {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ query: config })
            };
            const response = await fetch(GRAPHQL_URL, FETCH_OPTIONS).catch(err => console.log(err));
            let results = await response.json();
            return results;
        };
;
        const search = steps.docent.value;

        // Get data from CMS with GraphQL
        async function fetchData() {
            const results = await getAllRecipes(QUERY);
            const docent = results.data.teachers.find(e => e.firstname.toLowerCase().includes(search.toLowerCase()));
            if (docent) {
                const result = `${docent.firstname} ${docent.lastname}, ${docent.email}, vak(ken): ${docent.course}`;
                setLoading(false);
                setResult(result)
            } else {
                setLoading(false)
                setResult('Zoekopdracht was zonder succes!')
            }
        }

        fetchData()
    }, [])

    const triggerNext = () => {
      setTrigger(true) 
      triggerNextStep(); 
    }

    return (
      <div>
        { loading ? <Loading /> : result }
        {
          !loading &&
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
            }}
            className="container__form"
          >
            {
              !trigger &&
              <button
                onClick={() => triggerNext()}
                className="w-100"
              >
                Nieuw zoekopdracht
              </button>
            }
          </div>
        }
      </div>
    );
  };

export default DBDocent;