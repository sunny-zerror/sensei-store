import React from "react";

const SelectField = ({
  label,
  name,
  options = [],
  placeholder = "Select Option",
  className = "",
  error,
  isRequired = false,
}) => {

  const getOptionValue = (item) => {
    if (typeof item === "string") return item; // simple string option
    if (typeof item === "object") return item?.code || item?.name; // object option
    return "";
  };

  const getOptionLabel = (item) => {
    if (typeof item === "string") return item;
    if (typeof item === "object") return item?.name || item?.code;
    return "";
  };

  return (
    <div className={`select_field_wrapper ${className}`}>
      {label && <label className="select_label text-sm">{label}{isRequired && (<span> * </span>)}</label>}

      <select defaultValue="" className="checkOut_input">
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((item, index) => (
          <option key={index} value={getOptionValue(item)}>
            {getOptionLabel(item)}
          </option>
        ))}
      </select>

      {error && <p className="error_text">{error.message}</p>}
    </div>
  );
};

export default SelectField;
