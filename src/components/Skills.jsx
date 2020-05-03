import React from 'react';
import '../styles/components/Card.styl';

const Skills = ({ data }) => {
  const items = data || ['Loading Data'];

  if (data === 0) {
    return (
      <div className='Academic section3'>
        <h1>Skills</h1>
        <h2>Loading Data Please wait</h2>
      </div>
    );
  }
  return (
    <div className='Skills section3'>
      <h1 className='Skills title'>Skills</h1>
      <div className='flexbox'>
        {items.map((item, id) => {
          return (
            <h2 key={id.toString()}>{item.name}</h2>
          );
        })}
      </div>
    </div>
  );

};

export default Skills;

