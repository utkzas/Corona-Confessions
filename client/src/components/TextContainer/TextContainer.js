import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h2>Sad? Depressed? Quaratined? Locked-up? <br></br>Confess your feelings right away! <span role="img" aria-label="emoji">💬</span></h2>
      
      <h4>Try it out right now! 
        Best viewed in Android/iOS Portrait Screens<span role="img" aria-label="emoji">⬅️</span></h4>
    </div>
    {
      users
        ? (
          <div><h3><i><font face="monospace">Created with React, Express, Node and Socket.IO by UTKARSH SHARMA </font></i><span role="img" aria-label="emoji">❤️</span></h3>
            <h4>Here are some of the active users: 💬(Ping them! Say Hi.)</h4>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                  
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;