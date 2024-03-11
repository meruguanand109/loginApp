import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onLogin = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <Logout onLogin={this.onLogin} />
    } else {
      authButton = <Login onLogin={this.onLogin} />
    }
    return (
      <div className="container">
        <div className="card">
          <Message isLoggedIn={isLoggedIn} />
          {authButton}
        </div>
      </div>
    )
  }
}

export default Home
