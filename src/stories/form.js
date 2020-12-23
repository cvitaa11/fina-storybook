import React from 'react';
import { Form, FormGroup, Button, InputGroup, FormControl } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';
 
class ValidationExample extends React.Component {
    constructor(...args) {
      super(...args);
  
      this.state = { validated: false };
    }
  
    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });
    }
  
    render() {
      const { validated } = this.state;
      return (
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >

        <Form.Group controlId="validationCustom01">
            <Form.Label>Ime i prezime</Form.Label>
            <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Marko Markić"
            />
            <Form.Control.Feedback>Ime i prezime je korektno uneseno</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom03">
            <Form.Label>Adresa prebivališta</Form.Label>
            <Form.Control type="text" placeholder="Unesite adresu prebivališta" required />
            <Form.Control.Feedback type="invalid">
            Unesite vašu adresu prebivališta
            </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Pošaljite</Button>
        </Form>
      );
    }
  }

const stories = storiesOf('Form', module);

// Base field
stories.add('Form field', () => (
    <Form.Group>
        <Form.Label>Naslov polja</Form.Label>
        <Form.Control type="text" placeholder="Unesite tekst" />
        <Form.Text>Dodatne informacije</Form.Text>
    </Form.Group>
));

// Password field
stories.add('Password field', () => (
    <Form.Group>
        <Form.Label>Zaporka</Form.Label>
        <Form.Control type="password" />
    </Form.Group>
));

// Disabled
stories.add('Disabled field', () => (
    <Form.Group>
        <Form.Label>Naslov polja</Form.Label>
        <Form.Control type="text" placeholder="Unesite tekst" value="Ivan Mesarić" disabled />
    </Form.Group>
));

// Select
stories.add('Select', () => (
    <FormGroup controlId="formControlsSelect">
      <Form.Label>Odaberite vrijednost</Form.Label>
      <Form.Control as="select" placeholder="select">
        <option>Vrijednost 1</option>
        <option>Vrijednost 2</option>
      </Form.Control>
    </FormGroup>
));

// Text area
stories.add('Text area', () => (
    <FormGroup controlId="formControlsTextarea">
      <Form.Label>Textarea polje</Form.Label>
      <Form.Control as="textarea" placeholder="Upišite tekst" />
    </FormGroup>
));

// Form with legend
stories.add('Form with legend', () => (
    <FormGroup controlId="formControlsSelect">
        <fieldset>
            <legend>Osobne informacije</legend>
            <Form.Group id="formControlsText">
                <Form.Label>Naslov polja</Form.Label>
                <Form.Control type="text" placeholder="Upišite tekst" />
            </Form.Group>
        </fieldset>
        <br />
        <fieldset>
            <legend>Osobne informacije</legend>
            <Form.Group id="formControlsText">
                <Form.Label>Naslov polja</Form.Label>
                <Form.Control type="text" placeholder="Upišite tekst" />
            </Form.Group>
            <button type="button" class="btn btn-primary spacer-bottom-small">Hello Button</button>
        </fieldset>
    </FormGroup>
));

//Field with button
stories.add('With button', () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <Button variant="secondary">Pronađi</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>

        <InputGroup className="mb-3">
            <FormControl
            placeholder="Korisničko ime"
            aria-label="Korisničko ime"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="secondary">Pronađi</Button>
            </InputGroup.Append>
        </InputGroup>

        <InputGroup>
            <FormControl
            placeholder="Korisničko ime"
            aria-label="Korisničko ime"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="secondary">Pretraži</Button>
            <Button variant="secondary">Odustani</Button>
            </InputGroup.Append>
        </InputGroup>
        </div>
));

// With warning and error
stories.add('With warning and error', () => (
    <React.Fragment>
        <ValidationExample />
    </React.Fragment>
));

// With warning and error
stories.add('Checkboxes', () => (
    <React.Fragment>
        <Form>
        <div key={`inline-checkbox`}>
            <Form.Check inline label="Checkbox" type='checkbox' id={`inline-checkbox-1`} />
            <br />
            <Form.Check inline label="Checkbox" type='checkbox' id={`inline-checkbox-2`} />
            <br />
            <Form.Check
                inline
                disabled
                label="Checkbox (disabled)"
                type='checkbox'
                id={`inline-checkbox-3`}
            />
        </div>
        <br />
        <div key={`inline-radio`}>
            <Form.Check inline label="Radio button" type='radio' id={`inline-radio-1`} />
            <br />
            <Form.Check inline label="Radio button" type='radio' id={`inline-radio-2`} />
            <br />
            <Form.Check
                inline
                disabled
                label="Radio button (disabled)"
                type='radio'
                id={`inline-radio-3`}
            />
        </div>

        </Form>
    </React.Fragment>
));

// Field sizes
stories.add('Field sizes', () => (
    <React.Fragment>
        <Form.Group id="formControlsText">
            <Form.Label>Naslov polja</Form.Label>
            <Form.Control type="text" size="xsmall" placeholder="Upišite tekst" />
        </Form.Group>
        <Form.Group id="formControlsText">
            <Form.Label>Naslov polja</Form.Label>
            <Form.Control type="text" size="small" placeholder="Upišite tekst" />
        </Form.Group>
        <Form.Group id="formControlsText">
            <Form.Label>Naslov polja</Form.Label>
            <Form.Control type="text" size="medium" placeholder="Upišite tekst" />
        </Form.Group>
        <Form.Group id="formControlsText">
            <Form.Label>Naslov polja</Form.Label>
            <Form.Control type="text" size="large" placeholder="Upišite tekst" />
        </Form.Group>
        <Form.Group id="formControlsText">
            <Form.Label>Naslov polja</Form.Label>
            <Form.Control type="text" size="xlarge" placeholder="Upišite tekst" />
        </Form.Group>
    </React.Fragment>
));