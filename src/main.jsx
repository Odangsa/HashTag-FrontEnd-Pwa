import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './global.css';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser.js');
  return worker.start();
}

const container = document.getElementById('root');
const root = createRoot(container);

// enableMocking().then(() => {
root.render(<App />);
// });
