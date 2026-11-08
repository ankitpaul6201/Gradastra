import ReactDOM from 'react-dom/client';
import App from './App';
import './tokens.css';
import './index.css';

// StrictMode is intentionally disabled per Framer runtime workaround #16.3a
// to prevent duplicate initialization error: "mix Motion versions undefined with 11.18.2"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);
