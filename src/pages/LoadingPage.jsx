import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/icon-256x256.png';

const LoadingPage = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="flex h-[60dvh] items-center justify-center">
        <motion.div
          className="flex size-20 items-center justify-center rounded-full bg-primary"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div>
    </>
  );
};

export default LoadingPage;
