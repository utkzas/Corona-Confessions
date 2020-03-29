import React, { useState } from 'react';
import { Link } from "react-router-dom"; //linkes chat

import './Join.css'; //import kari CSS idhar se
//react-hooks use honge
export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  //JSX WALA FRONTEND PART
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h3 className="heading"> <br></br><i>Corona Confessions</i><br></br><br></br><font face="Courier" color='white' size='2.5'>Sad? Depressed? Quaratined? Locked-up?
Confess your feelings right away! 💬</font> </h3>
        <br>
       
        </br>
        <div>
          <input placeholder="Enter your Name here" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Enter your Country/Region" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>

        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link> 

        <link rel="stylesheet" type="text/css" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <p>
        </p>
        <font face="Courier" color='white'>Made with <i class="icon ion-heart"></i> by Utkarsh Sharma </font>
        <br></br> <a href='https://faq.whatsapp.com/en/android/28030010/'>Click here for Global Suicide Hotline Resources</a>
        <p>
            <font face="Courier" color='white'><a color='white' href="https://www.linkedin.com/in/namutkarsh/">     <img src="https://www.kindpng.com/picc/m/74-748310_linked-in-logo-hd-hd-png-download.png" height='35' width='95' ></img></a> </font>
        </p>
        
  </div>
    </div>
  );
}
