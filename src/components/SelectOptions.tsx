import React, { FC } from "react";

interface SelectOptionsType {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOptions: FC<SelectOptionsType> = ({ value, onChange }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full rounded-md py-1.5 border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-394 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectOptions;
