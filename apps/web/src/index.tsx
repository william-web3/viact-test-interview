import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme } from './theme/lightTheme';
import { darkTheme } from './theme/darkTheme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// TODO: const isDarkMode = useDarkMode();
const isDarkMode = true;
const theme = isDarkMode ? darkTheme : lightTheme;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
