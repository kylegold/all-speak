import React from "react";

import ReactDelayRender from "react-delay-render";
import QuestionMark from "../QuestionMark";

const SmallRow = () => (
  <div className="row">
    <QuestionMark></QuestionMark>
  </div>
);

export default ReactDelayRender({ delay: 3000 })(SmallRow);
