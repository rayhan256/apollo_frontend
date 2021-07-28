import React from "react";
import Fade from "react-reveal/Fade";

export default function ValueBox({
  title = "Ad cupiditate sed est odio",
  desc = "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntursit. Et veritatis id.",
  image = "assets/img/values-1.png",
}) {
  return (
    <div>
      <Fade up>
        <div className="box">
          <img src={image} className="img-fluid" alt="" />
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </Fade>
    </div>
  );
}
