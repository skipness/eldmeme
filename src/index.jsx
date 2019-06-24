import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'typeface-roboto';
import App from './app';

WebFont.load({
  google: { families: ['Noto Sans HK'] },
  custom: { families: ['cwTeXKai', 'cwTeXYen', 'cwTeXFangSong'] },
});

ReactDOM.render(<App />, document.getElementById('root'));
