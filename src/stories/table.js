import React from 'react';
import { Table } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Table', module);

// Base table variants
stories.add('Table simple', () => (
    <React.Fragment>
        <p>
            <Table hover className="table-simple">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </p>
        <br /><br />
        <p>
            <Table hover size="sm" className="table-simple">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </p>
    </React.Fragment>
));

stories.add('Table bodered', () => (
    <React.Fragment>
        <p>
            <Table striped>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </p>
        <br /><br />
        <p>
            <Table striped size="sm">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </p>
    </React.Fragment>
));

stories.add('Table ordering', () => (
    <React.Fragment>
        <Table striped>
            <thead>
                <tr>
                <th>Username  <span className="jum-sort" /></th>
                <th>First Name <span className="jum-sort asc" /></th>
                <th>Last Name <span className="jum-sort desc" /></th>
                </tr>
            </thead>
        </Table>
    </React.Fragment>
));