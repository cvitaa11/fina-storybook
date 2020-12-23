import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import { storiesOf } from "@storybook/react";

// Temp images
import imageId from "../images/icon-id.svg";
import imageDir from "../images/icon-dir.svg";

const stories = storiesOf("Accordion", module);

class SimpleAccordionExample extends React.Component {
  render() {
    return (
      <Accordion>
        <AccordionItem expanded={true}>
          <AccordionItemTitle>Title 1</AccordionItemTitle>
          <AccordionItemBody>
            <p className="type-secondary type-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
              nisl, placerat a faucibus vel, elementum sit amet ipsum. Vivamus
              gravida molestie gravida. Donec id risus a lorem sagittis
              elementum ut a purus. Donec pellentesque arcu libero, sit amet
              interdum erat vestibulum dictum. Integer sit amet ex elit. Fusce
              suscipit nisi vitae arcu dictum tempor. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent commodo diam a
              efficitur porttitor. Curabitur eget facilisis purus.
            </p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>Title 2</AccordionItemTitle>
          <AccordionItemBody>
            <p className="type-secondary type-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
              nisl, placerat a faucibus vel, elementum sit amet ipsum. Vivamus
              gravida molestie gravida. Donec id risus a lorem sagittis
              elementum ut a purus. Donec pellentesque arcu libero, sit amet
              interdum erat vestibulum dictum. Integer sit amet ex elit. Fusce
              suscipit nisi vitae arcu dictum tempor. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent commodo diam a
              efficitur porttitor. Curabitur eget facilisis purus.
            </p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    );
  }
}

class ComplexAccordionExample extends React.Component {
  renderInternalAccordion = () => {
    return (
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle><img src={imageId} /> Title 1</AccordionItemTitle>
          <AccordionItemBody>
            <p className="type-secondary type-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
              nisl, placerat a faucibus vel, elementum sit amet ipsum. Vivamus
              gravida molestie gravida. Donec id risus a lorem sagittis
              elementum ut a purus. Donec pellentesque arcu libero, sit amet
              interdum erat vestibulum dictum. Integer sit amet ex elit. Fusce
              suscipit nisi vitae arcu dictum tempor. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent commodo diam a
              efficitur porttitor. Curabitur eget facilisis purus.
            </p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle><img src={imageId} /> Title 2</AccordionItemTitle>
          <AccordionItemBody>
            <p className="type-secondary type-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
              nisl, placerat a faucibus vel, elementum sit amet ipsum. Vivamus
              gravida molestie gravida. Donec id risus a lorem sagittis
              elementum ut a purus. Donec pellentesque arcu libero, sit amet
              interdum erat vestibulum dictum. Integer sit amet ex elit. Fusce
              suscipit nisi vitae arcu dictum tempor. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent commodo diam a
              efficitur porttitor. Curabitur eget facilisis purus.
            </p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle><img src={imageId} /> Title 3</AccordionItemTitle>
          <AccordionItemBody>
            <p className="type-secondary type-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
              nisl, placerat a faucibus vel, elementum sit amet ipsum. Vivamus
              gravida molestie gravida. Donec id risus a lorem sagittis
              elementum ut a purus. Donec pellentesque arcu libero, sit amet
              interdum erat vestibulum dictum. Integer sit amet ex elit. Fusce
              suscipit nisi vitae arcu dictum tempor. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent commodo diam a
              efficitur porttitor. Curabitur eget facilisis purus.
            </p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    );
  };

  render() {
    return (
      <Accordion>
        <AccordionItem className="accordion--multilevel">
          <AccordionItemTitle><img src={imageDir} /> Za punoljetnu osobu</AccordionItemTitle>
          <AccordionItemBody>
            {this.renderInternalAccordion()}
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle><img src={imageId} /> Nakon prestanka životnog partnerstva</AccordionItemTitle>
          <AccordionItemBody>
            <p className="type-secondary type-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
              nisl, placerat a faucibus vel, elementum sit amet ipsum. Vivamus
              gravida molestie gravida. Donec id risus a lorem sagittis
              elementum ut a purus. Donec pellentesque arcu libero, sit amet
              interdum erat vestibulum dictum. Integer sit amet ex elit. Fusce
              suscipit nisi vitae arcu dictum tempor. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent commodo diam a
              efficitur porttitor. Curabitur eget facilisis purus.
            </p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    );
  }
}

stories.add("Simple Accordion", () => <SimpleAccordionExample />);
stories.add("Complex Accordion", () => <ComplexAccordionExample />);
