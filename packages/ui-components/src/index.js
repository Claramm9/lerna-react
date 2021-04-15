import React, { useState } from 'react'
import Button from './components/Button';
import styles from './styles.module.css'

const Message = () => (
  <div className={styles.test}>
    <Button label='Testing Lerna' onClick={handleClick}/>
    <span>Lerna Demo</span>
  </div>
);

export default Message;