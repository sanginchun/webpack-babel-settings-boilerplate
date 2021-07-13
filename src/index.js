import './index.scss';

import Button from './components/button/button.js';

const title = document.querySelector('#title');
title.insertAdjacentHTML(
  'afterend',
  `
  <div>Inserted</div>
  ${Button({ value: '버튼' })}
`
);
