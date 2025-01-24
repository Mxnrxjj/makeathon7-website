import React from 'react'
import styles from '../styles/Tracks.module.css'


const Tracks = () => {
  return (
    <div className={styles.background}>
      <div className={styles.buttons}>
        <button className={styles.button1}
        onClick={alert}></button>
        <button className={styles.button2}></button>
        <button className={styles.button3}></button>
        <button className={styles.button4}></button>
        <button className={styles.button5}></button>

      </div>
    </div>
  )
}

export default Tracks