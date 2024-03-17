import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import ResultPage from '../pages/ResultPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
