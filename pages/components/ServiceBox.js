import React from "react";
import Link from "next/link";
export default function ServiceBox({
  title = "Nesciunt Mete",
  desc = "Provident nihil minus qui consequatur non omnis maiores.",
  icon = "bi bi-arrow-right",
  color = "blue",
}) {
  const classname = ["service-box"];
  if (color) classname.push(color);
  return (
    <div>
      <div className={classname.join(" ")}>
        <i className="ri-discuss-line icon"></i>
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link href="#" className="read-more">
          <div>
            <span>Read More</span> <i className={icon}></i>
          </div>
        </Link>
      </div>
    </div>
  );
}
