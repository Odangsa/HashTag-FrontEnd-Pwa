import Router from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div>
        <Router />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
