import './index.scss';

import Button from './components/button/button.js';
import Input from './components/input/input.js';

// If mode="" passed as CLI argument, set DefinePlugin by webpack
console.log(process.env.NODE_ENV);

const title = document.querySelector('#title');
title.insertAdjacentHTML(
  'afterend',
  `
  <div>Inserted</div>
  ${Button({ value: '버튼' })}
  ${Input({ type: 'text' })}
`
);
