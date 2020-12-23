import React from 'react';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Main menu', module);

// Dropdown examples
stories.add('JUM menu', () => (
    <div className="jum-header">
        <div className="jum-header-title">
            <span className="jum-header-label-large">Jedinstveno upravno mjesto</span>
            <span className="jum-header-label-small">JUM</span>
        </div>
        <div className="jum-header-info">
            <Dropdown alignRight className="jum-header-dropdown">
                <Dropdown.Toggle variant="jum-menu" id="dropdown-basic">
                    Ivan Horvat <span className="jum-header-oib">OIB: 1988761502190</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Header>
                        <div className="type-medium type-dark">Ivan Horvat</div>
                        OIB: 1988761502190
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Header>
                        <div className="type-small type-dark">UDU Bjelovarsko-bilogorske županije</div>
                        OIB: 6874595220
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Header>Prijavljeni ste kao</Dropdown.Header>
                    <Dropdown.Item href="#/action-1" active>Službenik</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Referent</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Kooridinator</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Button variant="jum-menu">Odjava</Button>
        </div>
    </div>
));