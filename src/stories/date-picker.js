import React from "react";
import moment from "moment";
import { DateRangePicker, SingleDatePicker } from "react-dates";
import "react-dates/initialize";

import { storiesOf } from "@storybook/react";

moment.locale("hr");

const stories = storiesOf("Date picker", module);

/** Example parent component for single date picker */
class ExampleWrapperComponentSingle extends React.PureComponent {
  state = {
    date: moment(),
    showPicker: false
  };

  /** Set date value */
  onDateChanged = date => this.setState({ date });

  /** Toggle picker modal */
  onFocusChanged = ({ focused }) => this.setState({ showPicker: focused });

  /** If enableOutsideDays = true, use this to determine if date is in or out of range with custom operations. Return true if item should be disabled, else return false */
  isOutsideRange = day => false;

  render() {
    const { date, showPicker } = this.state;

    return (
      <SingleDatePicker
        date={date}
        enableOutsideDays={true}
        isOutsideRange={this.isOutsideRange}
        onDateChange={this.onDateChanged}
        focused={showPicker}
        numberOfMonths={1}
        hideKeyboardShortcutsPanel={true}
        displayFormat="DD.MM.YYYY"
        onFocusChange={this.onFocusChanged}
      />
    );
  }
}

class ExampleWrapperComponentRange extends React.PureComponent {
  /** Set predefined values and focusedInput to null if you don't want the modal to appear instantly. Otherwise, set focusedInput to either startDate or endDate */
  state = {
    startDate: moment(),
    endDate: moment().add(1, "M"),
    focusedInput: null
  };

  /** Set date values */
  onDateChanged = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate });

  /** Toggle picker modal */
  onFocusChanged = focusedInput => this.setState({ focusedInput });

  /** If enableOutsideDays = true, use this to determine if date is in or out of range with custom operations. Return true if item should be disabled, else return false */
  isOutsideRange = day => false;

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (
      <DateRangePicker
        startDate={startDate}
        startDateId="StartDate"
        endDateId="EndDate"
        endDate={endDate}
        enableOutsideDays={true}
        isOutsideRange={this.isOutsideRange}
        hideKeyboardShortcutsPanel={true}
        displayFormat="DD.MM.YYYY"
        focusedInput={focusedInput}
        onDatesChange={this.onDateChanged}
        onFocusChange={this.onFocusChanged}
      />
    );
  }
}

stories.add("Single Date Picker", () => <ExampleWrapperComponentSingle />);

stories.add("Date Range Picker", () => <ExampleWrapperComponentRange />);
