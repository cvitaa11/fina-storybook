import React from 'react';
// import { Button } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Typography', module);

// Base typography
stories.add('Headings', () => (
  <React.Fragment>
      <h1>Naslov h1</h1>
      <h2>Naslov h2</h2>
      <h3>Naslov h3</h3>
      <h4>Naslov h4</h4>
      <h5>Naslov h5</h5>
      <h6>Naslov h6</h6>
  </React.Fragment>
));
stories.add('Paragraphs', () => (
  <React.Fragment>
      <p className="type-large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="type-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="type-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="type-small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="type-tiny">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="type-micro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
  </React.Fragment>
));
stories.add('Opacity', () => (
  <React.Fragment>
      <p className="opacity-100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
  </React.Fragment>
));
stories.add('Color', () => (
  <React.Fragment>
      <p className="type-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="type-primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
      <p className="type-danger">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit orci. Suspendisse pulvinar libero quis porta mollis. Duis laoreet arcu ut turpis scelerisque, sed egestas sem fringilla.
      </p>
  </React.Fragment>
));