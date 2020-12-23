import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Toast', module);

const CustomMessage = ({ closeToast }) => (
  <div>
    <div className="tostify-title">Lorem ipsum dolor</div>
    <div className="toastify-body">
      <p className="type-small spacer-bottom-none">Korisnik Ivan Horvat je uspješno prijavljen u JUM putem NIAS sustava. Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
)

export class ToastHtml extends Component {
  notifyHtml = () => toast(<CustomMessage />, { autoClose: 1000000, position: toast.POSITION.BOTTOM_RIGHT });

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.notifyHtml}>HTML Notify</button>
      </div>
    );
  }
}

export class ToastError extends Component {
  notifyError = () => toast(<CustomMessage />, { autoClose: 1000000, type: "error", position: toast.POSITION.BOTTOM_RIGHT });

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.notifyError}>Error</button>
      </div>
    );
  }
}

export class ToastSuccess extends Component {
  notifySuccess = () => toast(<CustomMessage />, { autoClose: 1000000, type: "success", position: toast.POSITION.BOTTOM_RIGHT });

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.notifySuccess}>Success</button>
      </div>
    );
  }
}

export class ToastWarning extends Component {
  notifyWarning = () => toast(<CustomMessage />, { autoClose: 1000000, type: "warning", position: toast.POSITION.BOTTOM_RIGHT });

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.notifyWarning}>Warning</button>
      </div>
    );
  }
}

export class ToastInfo extends Component {
  notifyInfo = () => toast(<CustomMessage />, { autoClose: 1000000, type: "info", position: toast.POSITION.BOTTOM_RIGHT });

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.notifyInfo}>Info</button>
      </div>
    );
  }
}

export class Toast extends Component {
  notify = () => toast('Toaster notification!', { autoClose: 10000000, position: toast.POSITION.BOTTOM_RIGHT });

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.notify}>Simple notify</button>
      </div>
    );
  }
}

// Toaster notification
stories.add('Toaster notification', () => (
  <React.Fragment>
    <Toast />
    <ToastContainer />
  </React.Fragment>
));

//Custom content
stories.add('Toaster HTML content', () => (
  <React.Fragment>
    <ToastHtml />
    <ToastContainer />
  </React.Fragment>
));

//Toaster variants
stories.add('Toaster variants', () => (
  <React.Fragment>
    <p><ToastHtml /></p>
    <p><ToastInfo /></p>
    <p><ToastSuccess /></p>
    <p><ToastError /></p>
    <p><ToastWarning /></p>

    <ToastContainer />
  </React.Fragment>
));