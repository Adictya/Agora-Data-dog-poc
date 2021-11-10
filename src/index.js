import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: 'pubf592f6fbe2d6dd79240b89e192e848cb',
  site: 'datadoghq.com',
  forwardErrorsToLogs: true,
  sampleRate: 100,
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
