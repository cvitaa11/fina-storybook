import React from "react";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Steps", module);

const dummySteps = [
  { title: "Podaci o podnositelju" },
  { title: "Podaci o djeci" },
  { title: "Podaci iz registara" },
  { title: "Potvrda ispravnosti" },
  { title: "Potpisivanje" },
  { title: "Plaćanje" },
  { title: "Slanje" }
];

export class Steps extends React.PureComponent {
  /** Render step component within ul wrapper */
  renderStep = stepData => {
    const {
      steps,
      currentStepIndex,
      skippedStepIndexes,
      completedStepIndexes
    } = this.props;

    // Get index of step in steps array
    const index = steps.findIndex(s => stepData === s);

    // Check step state (completed, skipped, current)
    const isCurrent = currentStepIndex === index;
    const isCompleted =
      completedStepIndexes.find(i => i === index) !== undefined;
    const isSkipped = skippedStepIndexes.find(i => i === index) !== undefined;

    return (
      <li
        className={`step 
          ${isCurrent ? "step-current" : ""}
          ${isCompleted ? "step-completed" : ""}
          ${isSkipped ? "step-skipped" : ""}`}
      >
        <span className="step-indicator">
            <span className="step-label">{stepData.title}</span>
        </span>
      </li>
    );
  };

  render() {
    const { steps, completedStepIndexes, skippedStepIndexes } = this.props;
    
    return (
      <div className="steps-wrapper">
        <span className="steps-progress-wrapper">
            <span className="steps-progress" style={{width: `${(completedStepIndexes.length + skippedStepIndexes.length) / (steps.length - 1) * 100}%`}} />
        </span>
        <ul className="steps">
            {steps.map(stepData => this.renderStep(stepData))}
        </ul>
      </div>
    );
  }
}

// Base steps
stories.add("Basic steps", () => (
  <Steps
    steps={dummySteps}
    currentStepIndex={3}
    skippedStepIndexes={[1]}
    completedStepIndexes={[0, 2]}
  />
));
