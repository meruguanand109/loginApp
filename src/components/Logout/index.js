// Write your code here
import {Component} from 'react'
import './index.css'

const Logout = props => {
  const {onLogin} = props
  return (
    <button className="button" onClick={onLogin} type="button">
      Logout
    </button>
  )
}

export default Logout
