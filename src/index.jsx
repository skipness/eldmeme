import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import WebFont from 'webfontloader';
import App from './app';

WebFont.load({
  google: { families: ['Noto Sans HK'] },
  custom: { families: ['cwTeXKai', 'cwTeXYen', 'cwTeXFangSong'] },
});

ReactDOM.render(<App />, document.getElementById('root'));
