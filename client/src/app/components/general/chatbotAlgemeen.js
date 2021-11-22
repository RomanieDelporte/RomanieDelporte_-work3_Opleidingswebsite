import {useState, useEffect} from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';

const ChatbotGeneral = ({ steps, triggerNextStep }) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState('');
    const [trigger, setTrigger] = useState(false)


    useEffect(() => {
        const search = steps.algemeen.value;
        console.log(search);
        let tempValue = '';

        switch (search) {
          case 1:
            tempValue += 'https://forms.summit.nl/Artevelde/BrochureAanvraagDigitaalO/99e91926-0f2c-4756-b683-67b93f6de79e/started#/Page/0';
            break;
          case 2:
            tempValue += 'https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren/wat-zal-je-leren';
            break;
          case 3:
            tempValue += 'https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren/waar-volg-je-les';
            break;
          case 4:
            tempValue += 'https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren/online-inschrijven-en-studiegeld';
            break;
        }

        setLoading(false);
        setResult(tempValue)
    }, [])

    const triggerNext = () => {
      setTrigger(true) 
      triggerNextStep(); 
    }

    return (
      <div>
        { loading ? <Loading /> : <span>Klik <a href={result}>hier</a> voor het resultaat!</span> }
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

export default ChatbotGeneral;