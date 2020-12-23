import React from "react";

import { storiesOf } from "@storybook/react";
import { OverlayTrigger, Button, Tooltip } from "react-bootstrap";

const stories = storiesOf("Tooltip", module);


class renderTooltip extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.attachRef = target => this.setState({ target });
      this.state = { show: false };
    }
  }

// Shadows
stories.add("Basic tooltip", () => (
  <React.Fragment>

    Text example
    <OverlayTrigger
        placement={"right"}
        overlay={
            <Tooltip>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id sem leo. Donec facilisis, justo et sodales molestie, dui velit laoreet arcu, vitae vehicula tortor massa sed nisl. In hac habitasse platea dictumst. Phasellus congue scelerisque orci, ut facilisis lectus suscipit id. Suspendisse lacinia eleifend risus ac convallis. 
            </Tooltip>
        }
        >
        <span className="tooltip-trigger" />
    </OverlayTrigger>

    <br />
    <br />
    <span className="type-tiny">Small text</span>
    <OverlayTrigger
        placement={"right"}
        overlay={
            <Tooltip>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id sem leo. Donec facilisis, justo et sodales molestie, dui velit laoreet arcu, vitae vehicula tortor massa sed nisl. In hac habitasse platea dictumst. Phasellus congue scelerisque orci, ut facilisis lectus suscipit id. Suspendisse lacinia eleifend risus ac convallis. 
            </Tooltip>
        }
        >
        <span className="tooltip-trigger" />
    </OverlayTrigger>

  </React.Fragment>
));
