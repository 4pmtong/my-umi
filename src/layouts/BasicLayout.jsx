import React from 'react';
// import Header from 'continens-UI/lib/Header.js';
import Header from 'continens-UI/lib/Header/index.js';
// import Header from 'continens-UI/components/Header';

import './BasicLayout.scss';

const BasicLayout = (props) => {
  return (
    <div className='header'>
      <Header
        style={{}}
        title='Insight Portal'
        user={{ userName: 'tong.chen' }}
        avatarMenus={[{ name: 'Logout', id: 'logout' }]}
        onClickAvatarItem={() => {}}
      />
      {props.children}
    </div>
  );
}

export default BasicLayout;
