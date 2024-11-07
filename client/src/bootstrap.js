import React from 'react';
import { createRoot } from 'react-dom/client';
 //import { default as App } from './App';
import App  from './App';

const domElement = document.getElementById('root<3');
const root = createRoot(domElement);

root.render(<App />);
