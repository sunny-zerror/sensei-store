import React from "react";

const ReturnRefundPolicy = () => {
  return (
    <>
      <div id="legal-page" className="text-base">
        <h3 className="uppercase text-3xl">Return & Refund Policy</h3>
        

        <div className="legal-container">

          <h3>Return Policy</h3>

          <p className="subheading-legal">
            <strong>Do you accept product returns?</strong>
          </p>
          <p>
            Returns are accepted only in specific situations — if you receive a 
            wrong product, wrong size, or a damaged/defective item.
          </p>

          <p className="subheading-legal">
            <strong>Are returns applicable on all products?</strong>
          </p>
          <ul>
            <li>
              Returns are NOT applicable on certain personal-use categories such 
              as caps, hats, and socks due to hygiene and safety reasons.
            </li>
            <li>
              Customized, made-to-order, or personalized items are also not eligible.
            </li>
          </ul>

          <h3>Refund Policy</h3>

          <p className="subheading-legal">
            <strong>Do you offer refunds?</strong>
          </p>
          <p>
            No, we do not offer refunds. Our policy only supports product 
            exchange in case of eligible issues (wrong size, wrong product, or damaged item).
          </p>

          <p className="subheading-legal">
            <strong>Why are refunds not provided?</strong>
          </p>
          <p>
            As our products are carefully made-to-order and undergo strict 
            quality checks, refunds are not part of our policy. However, we make 
            sure every customer receives the correct product in perfect condition.
          </p>

          <h3>Exchange Procedure</h3>

          <p className="subheading-legal">
            <strong>How do I request an exchange?</strong>
          </p>
          <ul>
            <li>
              Email us with your order details and the issue you're facing.
            </li>
            <li>
              Our Quality Control Team will evaluate the request.
            </li>
            <li>
              If approved, we will arrange a reverse pickup within 3–7 days.
            </li>
            <li>
              Once the product reaches our warehouse, your replacement order will 
              be shipped within 3–4 business days.
            </li>
          </ul>

          <h3>Conditions for Exchange</h3>

          <p className="subheading-legal">
            <strong>What conditions must the product meet?</strong>
          </p>
          <ul>
            <li>The item must be unused and in its original packaging.</li>
            <li>All tags, labels, and accessories must be intact.</li>
            <li>
              The product must match the condition in which it was delivered.
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default ReturnRefundPolicy;
