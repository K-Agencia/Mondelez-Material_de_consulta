import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterMain from './routes';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './css/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterMain />
  </React.StrictMode>,
)
