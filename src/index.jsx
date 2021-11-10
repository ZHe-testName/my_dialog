import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import './index.css';
import App from './App';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

//load Google font fron libruary
WebFontLoader.load({
  google: {
    families: ['Open Sans:300,400,700'],
  }
});

dayjs.locale('ru');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);