import React from 'react'
import Button from './components/Button';
import styles from './styles.module.css'

const Message = () => (
  <div className={styles.test}>
    <div><Button label='Testing Lerna' /></div>
    <span>Lerna Code</span>
  </div>
);

export default Message;