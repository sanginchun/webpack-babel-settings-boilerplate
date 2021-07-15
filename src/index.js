import './index.scss';

import Button from './components/button/button.js';
import Input from './components/input/input.js';

const title = document.querySelector('#title');
title.insertAdjacentHTML(
  'afterend',
  `
  <div>Inserted</div>
  ${Button({ value: '버튼' })}
  ${Input({ type: 'text' })}
`
);
