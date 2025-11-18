import React from "react";

const FAQs = () => {
  return (
    <>
      <div id="legal-page">
        <h2>FAQs</h2>
        <div className="legal-container">
          
          <h3>General Questions</h3>

          <p className="subheading-legal">
            <strong>How can I place an order?</strong>
          </p>
          <p>
            Simply browse our store, add your favorite products to the cart, and
            proceed to checkout. You’ll receive a confirmation email once your
            order is placed.
          </p>

          <p className="subheading-legal">
            <strong>Do you offer Cash on Delivery (COD)?</strong>
          </p>
          <p>
            Currently, we offer prepaid payments only. COD is not available.
          </p>

          <h3>Shipping & Delivery</h3>

          <p className="subheading-legal">
            <strong>How long will it take to receive my order?</strong>
          </p>
          <ul>
            <li>
              Domestic orders generally take 3–7 business days after shipping.  
              Delivery timelines may vary depending on the location, public 
              holidays, or weather conditions.
            </li>
          </ul>
          <p>
            For international orders, delivery time varies from country to
            country. Tracking details will be emailed once the order is shipped.
          </p>

          <h3>Product & Sizing</h3>

          <p className="subheading-legal">
            <strong>How do I choose the right size?</strong>
          </p>
          <p>
            Each product page includes a detailed size chart. We recommend
            measuring yourself and matching it with our chart for the best fit.
          </p>

          <p className="subheading-legal">
            <strong>Are all products true to size?</strong>
          </p>
          <p>
            Yes, all clothing follows standard sizing unless otherwise
            mentioned on the product page.
          </p>

          <h3>Returns & Exchange</h3>

          <p className="subheading-legal">
            <strong>What is your exchange policy?</strong>
          </p>
          <p>
            Exchanges are accepted only in cases of wrong size, wrong product, 
            or damaged item. We do not offer refunds.
          </p>

          <p className="subheading-legal">
            <strong>How can I request an exchange?</strong>
          </p>
          <ul>
            <li>
              Email us with your order details and product issue.  
              Our QC team will review your request, and if approved, a pickup 
              will be arranged. Replacements are shipped within 3–4 business 
              days after the product reaches our warehouse.
            </li>
          </ul>

          <h3>Payments</h3>

          <p className="subheading-legal">
            <strong>What payment methods do you accept?</strong>
          </p>
          <p>We accept all major debit cards, credit cards, UPI, and net banking.</p>

        </div>
      </div>
    </>
  );
};

export default FAQs;
