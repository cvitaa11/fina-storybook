import React from "react";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Menu cards", module);

var boxStyle = {
    width: "300px",
};

// Temp images
import imageId from "../images/icon-large-id.svg";
import imagePuz from "../images/icon-large-puzzle.svg";
import imageCut from "../images/icon-large-cutlery.svg";

// Menu cards
stories.add("Single card", () => (
    <React.Fragment>
        <a href="#" className="jum-menu-card">
            <span className="jum-menu-card-content">
                <span className="jum-menu-card-icon"><img src={imageId} /></span>
                <span className="jum-menu-card-label">Promjena osobnog imena</span>
            </span>
        </a>
    </React.Fragment>
));

stories.add("Menu cards", () => (
  <React.Fragment>
    <div className="jum-menu-cards">
        <a href="#" className="jum-menu-card">
            <span className="jum-menu-card-content">
                <span className="jum-menu-card-icon"><img src={imageId} /></span>
                <span className="jum-menu-card-label">Promjena osobnog imena</span>
            </span>
        </a>
        <a href="#" className="jum-menu-card">
            <span className="jum-menu-card-content">
                <span className="jum-menu-card-icon"><img src={imagePuz} /></span>
                <span className="jum-menu-card-label">Nastavak obavljanja ugostiteljske djelatnosti</span>
            </span>
        </a>
        <a href="#" className="jum-menu-card">
            <span className="jum-menu-card-content">
                <span className="jum-menu-card-icon"><img src={imageCut} /></span>
                <span className="jum-menu-card-label">Nastavak obavljanja ugostiteljske djelatnosti u odsustvu primarnog nalogodavca</span>
            </span>
        </a>
        <a href="#" className="jum-menu-card">
            <span className="jum-menu-card-content">
                <span className="jum-menu-card-icon"><img src={imageId} /></span>
                <span className="jum-menu-card-label">Nastavak obavljanja ugostiteljske djelatnosti</span>
            </span>
        </a>
        <a href="#" className="jum-menu-card">
            <span className="jum-menu-card-content">
                <span className="jum-menu-card-icon"><img src={imageId} /></span>
                <span className="jum-menu-card-label">Pokretanje ugostiteljske djelatnosti</span>
            </span>
        </a>
    </div>
  </React.Fragment>
));
