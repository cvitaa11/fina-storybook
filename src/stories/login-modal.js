import React from "react";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Login modal", module);

// Shadows
stories.add("Basic login modal", () => (
  <React.Fragment>
    <div className="jum-login-modal shadow-medium">
        <h1 className="jum-login-modal-title">Prijavi se kao</h1>
        <ul className="jum-login-modal-list">
            <li><button>Službenik</button></li>
            <li><button>Klijent</button></li>
            <li><button>ZAGREBAČKI HOLDING, DRUŠTVO S OGRANIČENOM ODGOVORNOŠĆU ZA JAVNI PRIJEVOZ, OPSKRBU VODOM, ODRŽAVANJE ČISTOĆE, PUTNIČKA AGENCIJA, ŠPORT, UPRAVLJANJE OBJEKTIMA I POSLOVANJE NEKRETNINAMA</button></li>
        </ul>
    </div>
  </React.Fragment>
));
