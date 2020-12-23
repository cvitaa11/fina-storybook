import React from "react";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Padders", module);

var boxStyle = {
    background: "#fff",
    borderRadius: "4px",
    display: "inline-block"
  };

// Shadows
stories.add("Basic padding", () => (
  <React.Fragment>
    <p>
      <div style={boxStyle} className="padding-all-small">Test</div>
    </p>
    <br />
    <p>
      <div style={boxStyle} className="padding-all-medium">Test</div>
    </p>
    <br />
    <p>
      <div style={boxStyle} className="padding-all-large">Test</div>
    </p>
    <br />
    <p>
      <div style={boxStyle} className="padding-all-xlarge">Test</div>
    </p>
  </React.Fragment>
));
