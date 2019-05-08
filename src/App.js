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
          <div className={styles.buttonWrapper}>
            <div className={styles.buttonWrapperTitle}>Привет</div>
            <button className={ styles.helloButton } onClick={() => this.handleClick(true, 'Hello')}>Нажать</button>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.buttonWrapperTitle}>Пока</div>
            <button className={ styles.byeButton } onClick={() => this.handleClick(true, 'Bye Bye')}>Нажать</button>
          </div>
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