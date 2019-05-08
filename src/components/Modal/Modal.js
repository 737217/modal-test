import React, { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {

  getModalClasses() {
    return this.props.showModal ? styles.wrapper : [styles.wrapper, styles.hidden].join(' ');
  }

  render() {
    return (
      <div className={ this.getModalClasses() }>
        <div className={ styles.modalContent }>{ this.props.content }</div>
        <button className={ styles.closeButton } onClick={ () => this.props.fun(false, null) }>close modal</button>
      </div>
    )
  }
}
