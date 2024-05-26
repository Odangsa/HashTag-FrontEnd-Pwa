import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Error Page</h1>
      <p>Oops! Something went wrong.</p>
    </div>
  );
};

export default ErrorPage;
