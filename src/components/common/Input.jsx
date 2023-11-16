import React from "react";

export const Input = ({ label, type, name, error, register, disabled }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-left font-semibold">{label}</label>
      <div className="rounded p-2" style={{border:"2px solid lightgray"}}>
        <input
          name={label}
          placeholder={label}
          aria-invalid={error ? "true" : "false"}
          {...register(name, {
            valueAsNumber: type === "number" ? true : false,
          })}
          type={type}
          className="outline-none w-full bg-transparent"
          disabled={disabled}
        />
      </div>
      <p className="p-1 text-red-500 font-semibold">{error && error}</p>
    </div>
  );
};
