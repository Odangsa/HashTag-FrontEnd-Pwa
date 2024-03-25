import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center bg-background">
      <div>
        <img src="/public/icon-196x196.png" className="size-24" alt="Logo" />
      </div>
      <h4 className="font-bold">Waffle</h4>
      <h4>Image Uploader</h4>
      <p></p>
    </nav>
  );
};

export default Navbar;
