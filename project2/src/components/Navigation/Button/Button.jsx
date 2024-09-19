import React from 'react'
import styles from './Button.module.css'
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';
const Button = (props) => {
  return (
    <button className={props.isOutline ? styles.outline_btn : styles.primary_btn} >
        {props.icon}
       {props.text}
    </button>
  )
}

export default Button