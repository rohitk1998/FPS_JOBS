import React from "react";

export const Input = ({ label, type, name, error, register, disabled }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold text-left ">{label}</label>
        <input
          name={label}
          placeholder={label}
          aria-invalid={error !== "" ? true : false}
          {...register(name, {
            valueAsNumber: type === "number" ? true : false,
          })}
          type={`${type}`}
          style={{paddingLeft:10}}
          className="w-full bg-transparent outline-none border-[1px] h-[44px]"
          disabled={disabled}
          autoComplete="false"
        />
      <p className="p-1 font-semibold text-red-700">{error && error}</p>
    </div>
  );
};
