import React from 'react';

import './BasicLayout.scss';

const BasicLayout = (props) => {
  return (
    <div className='header'>
      <h1 className='title'>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
