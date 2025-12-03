import React from "react";

const Input = ({
  type = "text",
  label = "",
  placeholder = "",
  className = "",
  error,
  isRequired = false,
  ...rest
}) => {
  return (
    <div className="w-full text-base">
      {label && (<p className='text-sm'>{label}{isRequired && (<span> * </span>)}</p>)}
      <input
        type={type}
        placeholder={placeholder}
        className={`checkOut_input ${className}`}
        {...rest}
      />
      {error && (<p className="input_error_msg text-xs">{error?.message || ""}</p>)}
    </div>
  );
};

export default Input;
