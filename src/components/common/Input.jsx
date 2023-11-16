import React from "react";

export const Input = ({ label, type, name, error, register, disabled }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-left">{label}</label>
      <div className="p-2 rounded" style={{border:"2px solid lightgray"}}>
        <input
          name={label}
          placeholder={label}
          aria-invalid={error ? "true" : "false"}
          {...register(name, {
            valueAsNumber: type === "number" ? true : false,
          })}
          type={type}
          className="w-full bg-transparent outline-none"
          disabled={disabled}
          autoComplete={false}
        />
      </div>
      <p className="p-1 font-semibold text-red-500">{error && error}</p>
    </div>
  );
};
