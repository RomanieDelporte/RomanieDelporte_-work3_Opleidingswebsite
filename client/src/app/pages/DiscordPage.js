import React, { } from 'react';

import './DiscordPage.scss';

import discord from '../images/discord/discord.png';
import discordpage from '../images/discord/discordpage.png';

const DiscordPage = ({children}) => {
  return (
    <>
    {(localStorage.token) ?
    <div className="container mb-5 discord"> 
      <div className="row">
        <div className=" col-12 mt-4 discord__bot">     
            <h2>Onze PGM DiscordBot</h2>
            </div>
            <div className="col-12 mt-4 discord__about">
                <h2>Wat is discord?</h2>
                <p>Een plek waar je, op uitnodiging, oeverloos kunt kletsen</p>
                <p>In discord kan je eigen Discord-Servers maken waar je kan samenwerken, kletsen , gamen,.. </p>
            </div>
            <div className="col-12 col-lg-6  discord__info">
                <img src={discord} alt="discordpage"/>
            </div>
                <div className="col-12 col-lg-6 discord__pgm">
                    <p>Onze pgm discord-server</p>
                    <p> Wij zijn 2 studenten uit PGM. Voor toekomstige studenten het makkelijk te maken om info op te vragen of vragen te kunnen stellen hebben wij een <span>DiscordBot</span> gemaakt waar in je bijvoorbeeld gegevens kan opvragen van een bepaalde docent. Hier zorgen we voor dat toekomstige studenten allerlei dingen te weten kunnen komen over onze opleiding! Zeker de moeite waard! </p>
                </div>
                    <div className="col-12 discord__commando">
                        <h2>Wegwijs in onze DiscordBot</h2>
                </div>
            <div className="col-12 col-lg-6 discord__command">
              <p>Instructies pgm discord-server</p>
            <p>Voor jullie wat wegwijs te maken kan je in onze discordbot enkele instructies vinden voor bepaalde info op te vragen neem zeker een kijkje!</p>
            <div className="container__button flex items-center justify-between">
                        <a href="https://discord.gg/SN7zH3u349"><button type="submit">Join us</button></a>
                    </div>
            </div>
            <div className="col-12 col-lg-6 discord__page">
                <img src={discordpage} alt="discordpage"/>
            </div>
      </div>
    </div>
    :
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Je bent niet ingelogd!</h1>
        </div>
      </div>
    </div>}
    </>
  );
};

export default DiscordPage;