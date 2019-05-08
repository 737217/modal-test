import React, { Component } from 'react';
import styles from './App.module.css';
import { Modal } from './components/Modal/Modal';

export class App extends Component {

  state = {
    showModal: false,
    contentModal: null,
  };

  handleClick = (showModal, contentModal) => {
    this.setState({
      showModal,
      contentModal
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={ styles.controlButtons }>
          <button className={ styles.helloButton } onClick={() => this.handleClick(true, 'Hello')}>Привет</button>
          <button className={ styles.byeButton } onClick={() => this.handleClick(true, 'Bye Bye')}>Пока</button>
        </div>
        <Modal
          fun={this.handleClick}
          showModal={ this.state.showModal }
          content={ this.state.contentModal }
        />
      </div>
    );
  }
}