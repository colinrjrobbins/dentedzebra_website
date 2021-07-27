import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'; // wouldnt work in regular javascript, but it does work in react
import App from './components/App';

// index.js is always the first file to be executed.
// render a app, and getELemenet by ID is pointing to a div function labelled as id = root in index.html under public.
ReactDOM.render(<App />, document.getElementById('root'));
