import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ avatar, name, profession, phone, email, website, address }) => {

  return (
    <header className='Header'>
      <div className='Header__image'>
        <img src={avatar} alt='€' />
      </div>
      <div className='Header__container'>
        <h1 className='Header-title'>{name}</h1>
        <h2 className='Header-job-title'>{profession}</h2>
        <div className='container__horizontal'>
          <h2 className='Header-phone'>{phone}</h2>
          <h2 className='Header-email'>{email}</h2>
          <h2 className='Header-website'>
            <a href='http://crizy182.github.io/CV'>
              {website}
            </a>
          </h2>
        </div>
        <h2 className='Header-address'>{address}</h2>
      </div>
      <div> </div>
      <div> </div>
    </header>
  );
};

export default Header;
