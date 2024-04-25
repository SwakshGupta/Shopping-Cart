import React from "react";

function Terms() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="max-w-3xl px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">General Terms & Conditions</h1>
        <p className="mb-6">
          Negotiation will not be taken for BRAND NEW products. Prices are
          already lower than anywhere else.
        </p>
        <p className="mb-6">
          All products come with warranty and a bill, unless mentioned
          otherwise. Used and open box products are tested/inspected before it
          gets to you.
        </p>
        <p className="mb-6">
          Price includes shipping, unless mentioned explicitly. Shipping time is
          generally 4-6 days from the date of pickup. I ship all over India.
        </p>
        <p className="mb-6">
          In the case where the product arrives damaged, the buyer will have to
          provide an uncut unboxing video as proof. Once provided, I will take
          the necessary action to replace or return.
        </p>
        <p>
          NOTE: Returns won't be taken for reasons like the buyer isn't
          satisfied, etc.
        </p>
      </div>

      <div className="max-w-3xl px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Open Box Items: Terms & Conditions
        </h1>
        <p className="mb-6">
          Welcome! Open box items offer great value, often being in new or
          like-new condition with the full manufacturer's warranty, despite the
          packaging possibly being damaged. Here’s what you should know:
        </p>
        <p className="mb-6">
          Condition Assurance: Open box items are generally in new condition.
          Packaging damage is possible but doesn't affect the item's
          functionality or warranty.
        </p>
        <p className="mb-6">
          Warranty Coverage: Items come with a full manufacturer's warranty.
          Keep your bill as it's necessary for any warranty claims.
        </p>
        <p className="mb-6">
          [Packaging Disclaimer: Discounted prices reflect the potential for
          damaged packaging, which does not compromise the product's quality.]
        </p>
        <p className="mb-6">
          Returns and Refunds: Returns based on operational defects or
          discrepancies from the described condition are accepted. An uncut
          unboxing video is required for all claims.
        </p>
        <p className="mb-6">
          Order Cancellation Policy: Open Box items are inspected and quality
          checked before shipping. If defects not related to packaging are
          found, I may cancel the order and refund you, ensuring you receive
          only quality products.
        </p>
        <p>
          By buying an open-box item, you acknowledge and agree to these terms.
          My goal is to ensure you get great products at a discount, even if the
          packaging shows a bit of wear.
        </p>
      </div>
    </div>
  );
}

export default Terms;
