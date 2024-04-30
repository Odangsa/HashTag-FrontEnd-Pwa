import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
