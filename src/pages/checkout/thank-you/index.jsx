import React, { useState, useEffect } from "react";

const ThankYou = () => {

  return (
    <>
      <div className="status_section">
        <img
          src="/gifs/success.gif"
          alt="payment successfull"
        />
        <h3 className="uppercase text-3xl">
          Thank You <br /> for Your Purchase !
        </h3>
        <p className="text-base">
          Your payment has been successfully processed. We’re preparing your
          order and will send you updates soon. Thank you for shopping.
        </p>
        <p className="text-base">
          You will be redirected to the home page in
          seconds
        </p>
        <a href="/">Go Back to home page</a>
      </div>
    </>
  );
};

export default ThankYou;

