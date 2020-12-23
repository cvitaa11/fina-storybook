import React from "react";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Shadows", module);

var boxStyle = {
    background: "#fff",
    width: "60px",
    height: "60px",
    borderRadius: "4px"
};

// Shadows
stories.add("Basic shadow utility", () => (
  <React.Fragment>
    <p>
      <div style={boxStyle} className="shadow-small" />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="shadow-medium" />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="shadow-large" />
    </p>
  </React.Fragment>
));
