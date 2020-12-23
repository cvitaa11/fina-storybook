import React from "react";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("CSS symbols", module);

// Shadows
stories.add("Symbols", () => (
  <React.Fragment>
    <span className="jum-symbol jum-symbol-check" />
    <br /><br />
    <span className="jum-symbol jum-symbol-x" />
    <br /><br />
    <span className="jum-symbol-simple-check" />
    <br /><br />
    <span className="jum-symbol-simple-x" />
    <br /><br />
    <span className="jum-symbol-simple-x--sml" />
    <br /><br />
    <span className="jum-symbol-arrow" />
  </React.Fragment>
));
