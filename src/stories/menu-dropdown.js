import React from 'react';
import { Dropdown, DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Menu dropdown', module);

// Dropdown examples
stories.add('Basic dropdown', () => (
    <React.Fragment>
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Padajući izbornik
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>Prvi link</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Još jedan link</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Treći link</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Link iza dividera</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br />
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Padajući izbornik
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>Prvi link</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Još jedan link</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Treći link</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Link iza dividera</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </React.Fragment>
));
stories.add('Dropdown sizes', () => (
    <React.Fragment>
        <Dropdown>
            <Dropdown.Toggle variant="secondary" size="xsmall" id="dropdown-basic">
                Padajući izbornik
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>Prvi link</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Još jedan link</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Treći link</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Link iza dividera</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br /><br />
        <Dropdown>
            <Dropdown.Toggle variant="secondary" size="small" id="dropdown-basic">
                Padajući izbornik
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>Prvi link</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Još jedan link</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Treći link</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Link iza dividera</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br /><br />
        <Dropdown>
            <Dropdown.Toggle variant="secondary" size="medium" id="dropdown-basic">
                Padajući izbornik
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>Prvi link</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Još jedan link</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Treći link</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Link iza dividera</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br /><br />
        <Dropdown>
            <Dropdown.Toggle variant="secondary" size="large" id="dropdown-basic">
                Padajući izbornik
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>Prvi link</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Još jedan link</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Treći link</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Link iza dividera</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br /><br />
        <Dropdown>
            <Dropdown.Toggle variant="secondary" size="xlarge" id="dropdown-basic">
                Padajući izbornik
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" active>Prvi link</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Još jedan link</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Treći link</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Link iza dividera</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </React.Fragment>
));