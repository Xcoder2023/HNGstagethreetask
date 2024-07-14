import React, { useState } from 'react';

const ToggleButton = () => {
  const [isFreeActive, setIsFreeActive] = useState(true);

  const handleToggle = () => {
    setIsFreeActive(!isFreeActive);
  };

  return (
    <div className="bg-[#e3e3e3] flex w-[100%] border-[2px] rounded-lg font-semibold text-[16px]">
      <button
        onClick={handleToggle}
        className={`w-[50%] p-2 ${isFreeActive ? 'border border-[#e3e3e3] bg-[#ffff] rounded-r-md' : 'bg-[#e3e3e3]'}`}
      >
        Free
      </button>
      <button
        onClick={handleToggle}
        className={`w-[50%] p-2 ${!isFreeActive ? 'border border-[#e3e3e3] bg-[#ffff] rounded-r-md' : 'bg-[#e3e3e3]'}`}
      >
        Express
      </button>
    </div>
  );
};

export default ToggleButton;
