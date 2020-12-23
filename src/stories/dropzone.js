import React from 'react';
import Dropzone from 'react-dropzone';
import { Line } from 'rc-progress';

import { storiesOf } from '@storybook/react';
import { Container } from 'react-bootstrap';

const stories = storiesOf('Dropzone', module);

export class DropzoneUpload extends React.PureComponent {
  state = {
    acceptedFiles: [],
    rejectedFiles: []
  };

  /** To get added files through component reference in parent component */
  getAcceptedFiles = () => this.state.acceptedFiles;

  handleRemoveFile = event => {
    // Prevent propagation of dropzone add file event
    event.preventDefault();

    const fileName = event.currentTarget.dataset.name;
    const acceptedFiles = this.state.acceptedFiles.filter(
      f => f.name !== fileName
    );

    this.setState({ acceptedFiles, rejectedFiles: [] });
  };

  handleDrop = (acceptedFiles, rejectedFiles) => {
    const { multiple } = this.props;

    if (multiple) {
      const filteredExistingFiles = this.state.acceptedFiles.filter(
        f => !acceptedFiles.find(file => file.name === f.name)
      );
      const files = [...filteredExistingFiles, ...acceptedFiles];
      this.setState({ acceptedFiles: files, rejectedFiles });

      return;
    }

    this.setState({
      acceptedFiles,
      rejectedFiles
    });
  };

  renderAcceptedFiles = () => {
    const { loading, percent } = this.props;
    const { acceptedFiles } = this.state;
    return acceptedFiles.map(file => (
      <div className="dropzone-file" key={`${file.name}-`}>
        <div className="split-row">
          <div className="split-row-actions split-row-actions--dropzone">
          {loading ? (
              this.renderProgressBar(percent)
          ) : (
              <button
                type="button"
                className="btn btn-secondary btn-xsmall spacer-right-small"
                title="Obriši"
                data-name={file.name}
                onClick={this.handleRemoveFile}
              >
                Obriši
              </button>
          )}
          </div>

          <div className="split-row-content">
            <span className="dropzone-filename">{file.name}</span>
          </div>
        </div>
      </div>
    ));
  };

  renderRejectedFiles = () => {
    const { rejectedFiles } = this.state;

    return rejectedFiles.map(file => (
      <div className="dropzone-file" key={file.name}>
        <div className="split-row">
          <div className="split-row-actions split-row-actions--dropzone">
            <button
              type="button"
              className="btn btn-secondary btn-xsmall spacer-right-small"
              title="Obriši"
              data-name={file.name}
              onClick={this.handleRemoveFile}
            >
              Ukloni
            </button>
          </div>
          <div className="split-row-content type-small type-secondary">
            <span className="dropzone-filename type-danger">{file.name}</span>{' '}
            Dokument neće biti učitan jer nije u ispravnom formatu ili je
            preveliki.
          </div>
        </div>
      </div>
    ));
  };

  renderProgressBar = percent => {
    return (
      <Container>
        <Line
          percent={percent}
          strokeWidth="8"
          trailWidth="8"
          strokeColor="#007BFF"
          trailColor="#efefef"
          strokeLinecap="square"
        />
      </Container>
    );
  };

  renderFiles = () => (
    <div className="dropzone-files">
      {this.renderAcceptedFiles()}
      {this.renderRejectedFiles()}
    </div>
  );

  renderText = () => {
    const { text, buttonText } = this.props;
    return text ? (
      <div>
        <p className="spacer-bottom-small">{text}</p>
        <p className="spacer-bottom-none">
          <button className="btn btn-secondary btn-medium">
            {buttonText || 'Učitajte dokument'}
          </button>
        </p>
      </div>
    ) : (
      <div>
        <p className="spacer-bottom-small">
          Povucite dokument za učitavanje na ovo polje ili
        </p>
        <p className="spacer-bottom-none">
          <button className="btn btn-secondary btn-medium">
            Učitajte dokument
          </button>
        </p>
      </div>
    );
  };

  render() {
    const {
      multiple,
      accept,
      disableClick,
      disabled,
      getDataTransferItems,
      maxSize,
      minSize,
      name,
      onBlur,
      onClick,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDragStart,
      onDrop,
      onDropAccepted,
      onDropRejected,
      onFileDialogCancel,
      onFocus,
      onKeyDown,
      preventDropOnDocument,
      text,
      buttonText,
      customStyle,
      loading,
      percent
    } = this.props;
    const { acceptedFiles, rejectedFiles } = this.state;
    const showFiles = acceptedFiles.length > 0 || rejectedFiles.length > 0;

    return (
      <div className="dropzone-wrapper">
        <Dropzone {...this.props} onDrop={this.handleDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <>
              {showFiles && this.renderFiles()}
              <div
                {...getRootProps()}
                className={`dropzone ${customStyle ? customStyle : ''}`}
              >
                {this.renderText()}
                <input {...getInputProps()} />
              </div>
            </>
          )}
        </Dropzone>
      </div>
    );
  }
}

stories.add('Basic dropzone', () => (
  <DropzoneUpload
    multiple={false}
    maxSize={5000000}
    customStyle="dropzone-single"
  />
));

stories.add('Basic with progress', () => (
  <DropzoneUpload
    multiple={false}
    maxSize={5000000}
    customStyle="dropzone-single"
    loading="true"
    percent={30}
  />
));

stories.add('Multifile dropzone', () => (
  <DropzoneUpload
    // accept={[".jpg"]}
    multiple={true}
    maxSize={1000000}
    text={'Povucite dokumente za učitavanje na ovo polje ili'}
    buttonText={'Učitajte dokumente'}
  />
));


stories.add('Multifile with progress', () => (
  <DropzoneUpload
    // accept={[".jpg"]}
    multiple={true}
    maxSize={1000000}
    text={'Povucite dokumente za učitavanje na ovo polje ili'}
    buttonText={'Učitajte dokumente'}
    loading="true"
    percent={30}
  />
));
