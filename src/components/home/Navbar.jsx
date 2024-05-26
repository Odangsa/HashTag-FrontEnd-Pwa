import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <nav className="flex items-center bg-background">
      <div>
        <img
          src="./icon-192x192.png"
          className="size-24"
          alt="Logo"
          onClick={handleNavigate}
        />
      </div>
      <h4 className="text-2xl font-bold">Waffle</h4>
      <h4 className="ml-3 text-base font-medium">Image Uploader</h4>
      <p></p>
    </nav>
  );
};

export default Navbar;
