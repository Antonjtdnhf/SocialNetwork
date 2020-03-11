import React from 'react';
import s from './About_me.module.css';

const About_me = () =>{
    return(
    <div className={s.about_me}>
      <span>
      <p>About Me:
      Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.
       </p>
        <p>
  Favourite TV Shows:
      Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.
      </p>
      <p>
      Favourite Music Bands / Artists:
  Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.
      </p>
      </span>
    </div>
    );
}

export default About_me;