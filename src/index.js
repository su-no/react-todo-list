import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/config/configStore';
import { ResetCSS, GradientBackground } from './components/styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ResetCSS />
    <GradientBackground />
    <App />
  </Provider>
);
