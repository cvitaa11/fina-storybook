import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <div>
          <p>Otvaranje modalnog ekrana</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Pokreni modal
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
  
              <hr />
  
              <h4>Overflowing text to show scroll behavior</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.handleClose}>Zatvori</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

const stories = storiesOf('Modal', module);

// Modal examples
stories.add('Default modal', () => (
    <React.Fragment>
        <Modal.Dialog>
            <Modal.Header>
            <Modal.Title>Naslov</Modal.Title>
            </Modal.Header>

            <Modal.Body>Lorem ipsum dolor sit amet.</Modal.Body>

            <Modal.Footer>
            <Button variant="secondary">Zatvori</Button>
            <Button variant="primary">Snimi promjene</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </React.Fragment>
));
stories.add('Open modal', () => (
    <React.Fragment>
        <Example />
    </React.Fragment>
));