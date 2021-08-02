import React from "react";
import Link from "next/link";
export default function PricingBox({ color, plan, feature = [], price }) {
  return (
    <div>
      <div className="box">
        <h3 style={{ color: color }}>{plan}</h3>
        <div className="price">
          <sup>$</sup>
          {price}
          <span></span>
        </div>
        <img src="assets/img/pricing-free.png" className="img-fluid" alt="" />
        <ul>
          {feature.map((val) => (
            <li key={Math.random()}>{val}</li>
          ))}
        </ul>
        <Link href="#" className="btn-buy">
          Buy Now
        </Link>
      </div>
    </div>
  );
}
