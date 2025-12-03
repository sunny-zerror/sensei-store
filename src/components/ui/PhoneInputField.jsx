import React from 'react'
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from './Input';


const PhoneInputField = ({
    value,
    // onChange,
    defaultCountry = "in",
    countryCodeName,
    phoneName,
    error
}) => {
    return (
        <>
            <PhoneInput
                defaultCountry={defaultCountry}
                className="delivery__phone_btn"
                inputClass="delivery__input__phone"
                value={value}
            // onChange={(val, metadata) => {
            //     const countryCode = `+${metadata?.country?.dialCode || "91"}`;

            //     const numberOnly = val.replace(countryCode, "").trim();

            //     onChange({
            //         countryCode,
            //         phone: numberOnly
            //     });
            // }}
            />

            <input type="hidden" name={countryCodeName} value={value?.countryCode || ""} />
            <input type="hidden" name={phoneName} value={value?.phone || ""} />

            {error && <p className="error_text">{error.message}</p>}
        </>
    );
};

export default PhoneInputField;
