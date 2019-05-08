import React from 'react';
import { formatMessage } from 'umi-plugin-locale';

import './index.scss';

export default function() {
  return (
    <div className='normal'>
      <div className='welcome'/>

      <ul className='list'>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
