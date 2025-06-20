// components/PaymentMethods.jsx
import React from "react";
import "./Services.scss";
import Image from "next/image";

const paymentMethods = [
      "Visa",
      "MasterCard",
      "PayPal",
      "Bitcoin",
      "Ethereum",
      "Stripe",
      "Apple Pay",
      "Google Pay",
      "Amazon Pay",
      "Samsung Pay",
];

export default function PaymentMethods() {
      return (
            <div
                  className="flex flex-col items-center space-y-5 my-10"
            >
                  <div className="flex items-center gap-4">
                        <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
                              Payment Methods
                        </h2>
                        <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                  </div>
                  <div className="container">
                        {/* Top row (scrolls left) */}
                        <div className="carousel carousel-top">
                              {paymentMethods.map((method, idx) => (
                                    <span key={`top-a-${idx}`} className="item">{method}</span>
                              ))}
                              {paymentMethods.map((method, idx) => (
                                    <span key={`top-b-${idx}`} className="item">{method}</span>
                              ))}
                        </div>

                        {/* Bottom row (scrolls right) */}
                        <div className="carousel carousel-bottom">
                              {paymentMethods.map((method, idx) => (
                                    <span key={`bot-a-${idx}`} className="item">{method}</span>
                              ))}
                              {paymentMethods.map((method, idx) => (
                                    <span key={`bot-b-${idx}`} className="item">{method}</span>
                              ))}
                        </div>
                  </div>
            </div>
      );
}
