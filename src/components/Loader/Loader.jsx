import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NextTopLoader from 'nextjs-toploader';

// Loader component using NextTopLoader
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <NextTopLoader
        color="#eb6734"
        initialPosition={0.08}
        crawlSpeed={200}
        height={2}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        zIndex={1600}
        showAtBottom={false}
      />
    </div>
  );
};

export default Loader;
