import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { datadogLogs } from "@datadog/browser-logs";

datadogLogs.init({
  clientToken: "pubf592f6fbe2d6dd79240b89e192e848cb",
  site: "datadoghq.com",
  forwardErrorsToLogs: true,
  sampleRate: 100,
});

var _console = { ...console };

const stringify = (args) => {
  let msg;
  try {
    msg = JSON.stringify(args);
  } catch (err) {
    msg = args;
  }
  return msg;
};
console.log = (...args) => {
  datadogLogs.logger.log(stringify(args), {
    name: "Application",
    id: 1234,
  });
  _console.log(...args);
};
console.info = (...args) => {
  datadogLogs.logger.info(stringify(args), {
    name: "Application",
    id: 1234,
  });
  _console.info(...args);
};
console.warn = (...args) => {
  datadogLogs.logger.warn(stringify(args), {
    name: "Application",
    id: 1234,
  });
  _console.warn(...args);
};
console.debug = (...args) => {
  datadogLogs.logger.debug(stringify(args), {
    name: "Application",
    id: 1234,
  });
  _console.debug(...args);
};

// console = datadogLogs.logger;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
