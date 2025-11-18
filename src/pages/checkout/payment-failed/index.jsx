import React from "react";

const PaymentFailed = () => {
  return (
    <>

      <div className="status_section">
        <img
          src="/gifs/fail.gif"
          className="fail_gif"
          alt="payment failed"
        />
        <h3 className="uppercase text-3xl">
          Payment Failed
        </h3>
        <p className="text-base">
          Unfortunately, your payment could not be processed. Please try again
          to complete your order.
        </p>
        <a href="/">Go Back to home page</a>
      </div>
    </>
  );
};

export default PaymentFailed;
