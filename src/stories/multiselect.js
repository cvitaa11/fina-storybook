import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import {} from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

const options = [
  { value: 'no1', label: '1 — Lorem ipsum' },
  { value: 'no2', label: '2 — Vivamus facilisis' },
  { value: 'no3', label: '3 — Donec viverra' },
  { value: 'no4', label: '4 — Nullam aliquam' },
  { value: 'no5', label: '5 — Vestibulum laoreet' }
];

const MyComponent = () => (
  <Select
    defaultValue={[options[2]]}
    isMulti
    components={makeAnimated()}
    name="colors"
    options={options}
    className="multiselect"
    classNamePrefix="select"
  />
);

const stories = storiesOf('Multiselect', module);

stories.add('Multiselect', () => (
  <React.Fragment>
    <MyComponent />
  </React.Fragment>
));
