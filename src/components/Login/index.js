// Write your code here
import {Component} from 'react'
import './index.css'

const Login = props => {
  const {onLogin} = props
  return (
    <button className="button" onClick={onLogin} type="button">
      Login
    </button>
  )
}
export default Login
