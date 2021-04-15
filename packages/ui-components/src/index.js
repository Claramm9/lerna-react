import React, { useState } from 'react'
import Button from './components/Button';
import styles from './styles.module.css'

const Message = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  }

  return (
    <div className={styles.test}>
      <Button label='Testing Lerna' onClick={handleClick}/>
      {showMessage && <span>Lerna Demo</span>}
    </div>
  );
}

export default Message;