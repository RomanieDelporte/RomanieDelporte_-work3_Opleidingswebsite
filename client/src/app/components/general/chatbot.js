import React, { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import ChatbotGeneral from "./chatbotAlgemeen";
import DBDocent from "./chatbotDocent";

function ThemedExample(props) {

    const config = {
    floating: true,
    placeholder: "Typ een bericht..."
    };
    const steps = [
        {
          id: '1',
          message: 'Waarover wil je info?',
          trigger: '2',
        },
        {
          id: '2',
          options: [
            { value: 1, label: 'Algemene Info', trigger: 'algemeen'},
            { value: 2, label: 'Docenten', trigger: 'docenten'}  
          ]
        },
        {
          id: 'algemeen',
          options: [
            { value: 1, label: 'Infoboekje', trigger: 'boekje'},
            { value: 2, label: 'Curriculum', trigger: 'curriculum'},
            { value: 3, label: 'Campus', trigger: 'campus'}, 
            { value: 4, label: 'Studiegeld', trigger: 'studiegeld'}, 
          ]
        },
        {
          id: 'boekje',
          component: <ChatbotGeneral />,
          waitAction: true,
          trigger: '1',
        },
        {
          id: 'curriculum',
          component: <ChatbotGeneral />,
          waitAction: true,
          trigger: '1',
        },
        {
          id: 'campus',
          component: <ChatbotGeneral />,
          waitAction: true,
          trigger: '1',
        },
        {
          id: 'studiegeld',
          component: <ChatbotGeneral />,
          waitAction: true,
          trigger: '1',
        },
        { id: 'docenten',
          message: 'Vul de voornaam van een docent in.',
          trigger: 'docent'
        },
        {
          id: 'docent',
          user: true,
          trigger: 'docentsearch',
        },
        {
          id: 'docentsearch',
          component: <DBDocent />,
          waitAction: true,
          trigger: '1',
        },
      ];

  return <ChatBot steps={steps} {...config} />;
}
export default ThemedExample;