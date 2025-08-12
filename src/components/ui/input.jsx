// CommonInput.js
import React from 'react';

const CommonInput = ({ label, type = 'text', name, value, onChange, placeholder }) => {
  return (
    <div className="  w-full ">
      {label && <label className="">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none font-medium text-sm leading-[120%] text-gray-gray_color my-[19px] ml-4"
      />
    </div>
  );
};

export default CommonInput;
