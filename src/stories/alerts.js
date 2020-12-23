import React from 'react';
import { Alert } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Alert', module);

// Alerts
stories.add('Alert info', () => (
    <Alert variant="info type-small">
        <strong>Važna poruka</strong> Par riječi o čemu se radi unutar ove poruke.
    </Alert>
));

stories.add('Alert danger', () => (
    <Alert variant="danger type-small">
        <strong>Važna poruka</strong> Par riječi o čemu se radi unutar ove poruke.
    </Alert>
));

stories.add('Alert warning', () => (
    <Alert variant="warning type-small">
        <strong>Važna poruka</strong> Par riječi o čemu se radi unutar ove poruke.
    </Alert>
));

stories.add('Alert success', () => (
    <Alert variant="success type-small">
        <strong>Važna poruka</strong> Par riječi o čemu se radi unutar ove poruke.
    </Alert>
));

stories.add('Alert variants', () => (
  <React.Fragment>
    <Alert variant="info type-small">
        <strong>Važna poruka</strong> Par riječi o čemu se radi unutar ove poruke.
    </Alert>
    <Alert variant="danger type-small">
        <strong>Važna poruka</strong> Par riječi o čemu se radi unutar ove poruke.
    </Alert>
    <Alert variant="warning type-small">
        <strong>Važna poruka</strong> Par riječi o čemu se radi unutar ove poruke.
    </Alert>
    <Alert variant="success type-small">
        <strong>Važna poruka</strong> Par riječi o čemu se radi unutar ove poruke.
    </Alert>
  </React.Fragment>
));

stories.add('Loader', () => (
    <React.Fragment>
      <Alert variant="loader type-small type-center spacer-top-large spacer-bottom-large">
          <div class="jum-spinner">Učitavam</div>
          <strong>Učitavanje</strong>
      </Alert>
      <Alert variant="loader loader-narrow type-small type-center spacer-top-large spacer-bottom-large">
          <div class="jum-spinner">Učitavam</div>
          <strong>Učitavanje</strong>
      </Alert>
    </React.Fragment>
  ));