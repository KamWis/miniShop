import React from 'react';// eslint-disable-line
import {Modal} from 'react-bootstrap';

const socket = io.connect();// eslint-disable-line

export default class ConnectionDialog extends React.Component {

  constructor() {
    super();

    this.state = {
      showModal: false
    };
  }

  componentDidMount() {

    socket.on('connectedToServer', () => {

      this.setState({ showModal: false });
    });

    socket.on('disconnect', () => {

      this.setState({ showModal: true });
    });
  }

  render() {

    return(
     <Modal show={this.state.showModal} backdrop='static' keyboard={false}>
        <Modal.Header>
          <Modal.Title>Connection</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p className="center">You have been disconnected from the server.</p>
        </Modal.Body>
      </Modal>
    );
  }
}