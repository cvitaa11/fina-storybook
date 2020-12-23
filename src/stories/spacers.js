import React from "react";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Spacers", module);

var boxInline = {
  background: "#dadada",
  width: "32px",
  height: "32px",
  display: "inline-block"
};

var boxStyle = {
    background: "#dadada",
    width: "32px",
    height: "32px",
  };

var pullRight = {
    textAlign: "right"
  };

// Spacer examples
stories.add("Top spacers", () => (
  <React.Fragment>
    <p>
      <div style={boxStyle} />
      <div style={boxStyle} className="spacer-top-xsmall" />
    </p>
    <br />
    <p>
      <div style={boxStyle} />
      <div style={boxStyle} className="spacer-top-small" />
    </p>
    <br />
    <p>
      <div style={boxStyle} />
      <div style={boxStyle} className="spacer-top-medium" />
    </p>
    <br />
    <p>
      <div style={boxStyle} />
      <div style={boxStyle} className="spacer-top-large" />
    </p>
    <br />
    <p>
      <div style={boxStyle} />
      <div style={boxStyle} className="spacer-top-xlarge" />
    </p>
  </React.Fragment>
));

stories.add("Bottom spacers", () => (
  <React.Fragment>
    <p>
      <div style={boxStyle} className="spacer-bottom-xsmall" />
      <div style={boxStyle} />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="spacer-bottom-small" />
      <div style={boxStyle} />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="spacer-bottom-medium" />
      <div style={boxStyle} />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="spacer-bottom-large" />
      <div style={boxStyle} />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="spacer-bottom-xlarge" />
      <div style={boxStyle} />
    </p>
  </React.Fragment>
));

stories.add("Left spacers", () => (
  <React.Fragment>
    <p>
      <div style={boxStyle} className="spacer-left-xsmall" />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="spacer-left-small" />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="spacer-left-medium" />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="spacer-left-large" />
    </p>
    <br />
    <p>
      <div style={boxStyle} className="spacer-left-xlarge" />
    </p>
  </React.Fragment>
));

stories.add("Right spacers", () => (
  <React.Fragment>
    <p style={pullRight}>
      <div style={boxInline} className="spacer-right-xsmall" />
    </p>
    <br />
    <p style={pullRight}>
      <div style={boxInline} className="spacer-right-small" />
    </p>
    <br />
    <p style={pullRight}>
      <div style={boxInline} className="spacer-right-medium" />
    </p>
    <br />
    <p style={pullRight}>
      <div style={boxInline} className="spacer-right-large" />
    </p>
    <br />
    <p style={pullRight}>
      <div style={boxInline} className="spacer-right-xlarge" />
    </p>
  </React.Fragment>
));
