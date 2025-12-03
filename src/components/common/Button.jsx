import React from "react";
import { useRouter } from "next/router";

const Button = ({ text, href, onClick, loading = false, type = "submit" }) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (href) {
            router.push(href);
        }
    };
    return (
        <button className="black_button" type={type}
            onClick={handleClick}
            disabled={loading}>
            {loading ? (
                <div className="spinner_loader"></div>
            ) : (
                <p className='text-sm'>{text}</p>
            )}

        </button>
    )
}

export default Button