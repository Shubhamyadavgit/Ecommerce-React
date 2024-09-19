import React from 'react'
import styles from '../Navigation/Navigation.module.css';
import logo from '../../assets/logo.png'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className={styles.logo}>
            <img src={logo} alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation