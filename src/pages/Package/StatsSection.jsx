import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const stats = [
    {
      value: 100,
      label: "TRAVEL AGENTS",
    },
    {
      value: 10000,
      label: "HAPPY TRAVELERS",
    },
    {
      value: 1000,
      label: "PLACES SERVED",
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <Counter targetValue={stat.value} />
            <p className="text-gray-800 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Counter = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        clearInterval(interval);
        setCount(targetValue);
      } else {
        setCount(Math.floor(start));
      }
                
    }, 50);

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <h2 className="text-4xl font-bold text-blue-900">
      {count.toLocaleString()}
    </h2>
    
  );
};

export default StatsSection;
