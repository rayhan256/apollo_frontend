import React from "react";
export default function PricingBox({
  color,
  plan,
  feature1,
  feature2,
  feature3,
}) {
  return (
    <div>
      <div className="box">
        <h3 style={{ color: "#07d5c0" }}>Free Plan</h3>
        <div className="price">
          <sup>$</sup>0<span> / mo</span>
        </div>
        <img src="assets/img/pricing-free.png" className="img-fluid" alt="" />
        <ul>
          <li>Aida dere</li>
          <li>Nec feugiat nisl</li>
          <li>Nulla at volutpat dola</li>
          <li className="na">Pharetra massa</li>
          <li className="na">Massa ultricies mi</li>
        </ul>
        <a href="#" className="btn-buy">
          Buy Now
        </a>
      </div>
    </div>
  );
}
