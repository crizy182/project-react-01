import React from 'react';
import '../styles/components/Card.styl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const About = ({ data }) => {
  const items = data || [{ 'name': 'facebook-square' }];

  if (data === 0) {
    return (
      <div className='Academic section3'>
        <h1>About</h1>
        <h2>Loading Data Please wait</h2>
      </div>
    );
  }
  return (
    <div className='About section2'>
      <h1 className='About-title'> </h1>
      <ul className='About-item list'>
        {items.map((item, id) => {
          return (
            <a href={item.url} key={id.toString()} className='About-item anchor'>
              <li className='About-item item'>
                <FontAwesomeIcon icon={['fab', `${item.name}`]} />
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );

};

export default About;
