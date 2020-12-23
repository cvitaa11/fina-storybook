import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button, Alert } from 'react-bootstrap';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Autocomplete', module);

export class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: this.props.initialValue || ''
    };
  }

  // Event fired when the input value is changed
  onChange = e => {
    const { suggestions, onChange, name, handleZupanijaChange } = this.props;
    const userInput = e.currentTarget.value;

    //limit user input to letters only
    if (!/^$|^[A-Za-zčćžšđČĆŽŠĐ-]+$/.test(userInput)) {
      return;
    }

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState(
      {
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: e.currentTarget.value
      },
      () => {
        if (onChange) {
          onChange(name, this.state.userInput);
        }
        if (handleZupanijaChange) {
          handleZupanijaChange(this.state.userInput);
        }
      }
    );
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    const { onChange, name } = this.props;
    // Update the user input and reset the rest of the state
    this.setState(
      {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: e.currentTarget.innerText
      },
      () => {
        if (onChange) {
          onChange(name, this.state.userInput);
        }
      }
    );
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { onChange, name } = this.props;
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState(
        {
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: filteredSuggestions[activeSuggestion]
        },
        () => {
          if (onChange) {
            onChange(name, this.state.userInput);
            return;
          }
          this.dodaj();
        }
      );
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  dodaj = () => {
    this.props.dodajZupaniju(this.state.userInput);
    this.setState({
      userInput: ''
    });
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      },
      props: { button }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = 'suggestion-active';
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <Alert
            variant="loader alert-small u-full-width type-center type-small spacer-top-medium"
          >
            <strong>Nema rezultata!</strong>
          </Alert>
        );
      }
    }

    return (
      <Fragment>
        <InputGroup>
          <FormControl
            aria-describedby="basic-addon2"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />

          {this.props.button && (
            <InputGroup.Append>
              <Button
                onClick={this.dodaj}
                variant="primary"
              >
                Dodaj županiju
              </Button>
            </InputGroup.Append>
          )}

        {this.props.name === 'naselje'
          ? userInput.length >= 2 && suggestionsListComponent
          : suggestionsListComponent}
        </InputGroup>
        
      </Fragment>
    );
  }
}

export default Autocomplete;

export const zupanije = [
  { id: 1, value: 'Zagrebačka' },
  { id: 2, value: 'Krapinsko-zagorska' },
  { id: 3, value: 'Sisačko-moslavačka' },
  { id: 4, value: 'Karlovačka' },
  { id: 5, value: 'Varaždinska' },
  { id: 6, value: 'Koprivničko-križevačka' },
  { id: 7, value: 'Bjelovarsko-bilogorska' },
  { id: 8, value: 'Primorsko-goranska' },
  { id: 9, value: 'Ličko-senjska' },
  { id: 10, value: 'Virovitičko-podravska' },
  { id: 11, value: 'Požeško-slavonska' },
  { id: 12, value: 'Brodsko-posavska' },
  { id: 13, value: 'Zadarska' },
  { id: 14, value: 'Osječko-baranjska' },
  { id: 15, value: 'Šibensko-kninska' },
  { id: 16, value: 'Vukovarsko-srijemska' },
  { id: 17, value: 'Splitsko-dalmatinska' },
  { id: 18, value: 'Istarska' },
  { id: 19, value: 'Dubrovačko-neretvanska' },
  { id: 20, value: 'Međimurska' },
  { id: 21, value: 'Grad Zagreb' }
];

stories.add('Simple autocomplete', () => (
  <reactFragment>
    <Autocomplete suggestions={zupanije.map(z => z.value)} button={true} />
  </reactFragment>
));
