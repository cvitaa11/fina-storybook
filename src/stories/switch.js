import React from "react";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Switch", module);

stories.add("Basic CSS Switch", () => (
  <div className="can-toggle">
    <label for="a">Naslov switcha</label>
    <input id="a" type="checkbox" />
    <label className="can-toggle-switch" for="a" data-checked="Da" data-unchecked="Ne" />
  </div>
));

stories.add("Disabled CSS Switch", () => (
  <div className="can-toggle">
    <label for="a">Naslov switcha</label>
    <input id="a" type="checkbox" disabled />
    <label className="can-toggle-switch" for="a" data-checked="Da" data-unchecked="Ne" />
  </div>
));

stories.add("CSS Switch sizes", () => (
    <React.Fragment>
        <div className="can-toggle can-toggle-small">
            <label for="a">Naslov switcha</label>
            <input id="a" type="checkbox" />
            <label className="can-toggle-switch" for="a" data-checked="Da" data-unchecked="Ne" />
        </div>
        <br /><br />
        <div className="can-toggle">
            <label for="b">Naslov switcha</label>
            <input id="b" type="checkbox" />
            <label className="can-toggle-switch" for="b" data-checked="Da" data-unchecked="Ne" />
        </div>
        <br /><br />
        <div className="can-toggle can-toggle-large">
            <label for="c">Naslov switcha</label>
            <input id="c" type="checkbox" />
            <label className="can-toggle-switch" for="c" data-checked="Da" data-unchecked="Ne" />
        </div>
    </React.Fragment>
  ));