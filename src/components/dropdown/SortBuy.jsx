import React from "react";
import Dropdown from "react-dropdown";

const options2 = [
  { value: "op4", label: "Sort by (Default)" },
  { value: "op5", label: "New" },
  { value: "op6", label: "Last" },
];

function SortBuy() {
  return (
    <div className="group-select">
      <Dropdown
        options={options2}
        className="react-dropdown sort-buy"
        value={options2[0]}
      />
    </div>
  );
}

export default SortBuy;
