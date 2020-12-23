import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

// Base button
stories.add('Primary', () => <Button variant="primary">Hello Button</Button>);
stories.add('Secondary', () => <Button variant="secondary">Hello Button</Button>);
stories.add('Danger', () => <Button variant="danger">Hello Button</Button>);
stories.add('Link', () => <Button variant="link">Hello Button</Button>);

// Buton variants
stories.add('Button variants', () => (
  <React.Fragment>
    <p><Button variant="primary">Hello Button</Button></p>
    <p><Button variant="primary" disabled>Hello Button</Button></p>
    <p><Button variant="secondary">Hello Button</Button></p>
    <p><Button variant="secondary" disabled>Hello Button</Button></p>
    <p><Button variant="danger">Hello Button</Button></p>
    <p><Button variant="danger" disabled>Hello Button</Button></p>
    <p><Button variant="link">Hello Button</Button></p>
    <p><Button variant="link" disabled>Hello Button</Button></p>
  </React.Fragment>
));

stories.add('Button group', () => (
  <React.Fragment>
    <ButtonGroup>
      <Button variant="primary">Izbor 1</Button>
      <Button variant="primary">Izbor 2</Button>
      <Button variant="primary">Izbor 3</Button>
    </ButtonGroup>
    <br /><br />
    <ButtonGroup>
      <Button variant="secondary">Izbor 1</Button>
      <Button variant="secondary">Izbor 2</Button>
      <Button variant="secondary">Izbor 3</Button>
    </ButtonGroup>
  </React.Fragment>
));

stories.add('Button sizes', () => (
  <React.Fragment>
    <p><Button variant="primary" size="xsmall">Hello Button</Button></p>
    <p><Button variant="primary" size="small">Hello Button</Button></p>
    <p><Button variant="primary" size="medium">Hello Button</Button></p>
    <p><Button variant="primary" size="large">Hello Button</Button></p>
    <p><Button variant="primary" size="xlarge">Hello Button</Button></p>
    <p><Button variant="primary" size="xlarge" block>Hello Button</Button></p>
    <p><Button variant="secondary" size="xsmall">Hello Button</Button></p>
    <p><Button variant="secondary" size="small">Hello Button</Button></p>
    <p><Button variant="secondary" size="medium">Hello Button</Button></p>
    <p><Button variant="secondary" size="large">Hello Button</Button></p>
    <p><Button variant="secondary" size="xlarge">Hello Button</Button></p>
    <p><Button variant="secondary" size="xlarge" block>Hello Button</Button></p>
  </React.Fragment>
));