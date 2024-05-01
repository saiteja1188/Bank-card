import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class LoginRoute extends Component {
  state = {
    userId: '',
    pin: '',
    isShow: false,
    errorMsg: '',
  }

  success = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  failure = errorMsg => {
    this.setState({
      isShow: true,
      errorMsg,
    })
  }

  onAddSubmit = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.success(data.jwt_token)
    } else {
      this.failure(data.error_msg)
    }
  }

  onChangePinInput = event => {
    this.setState({pin: event.target.value})
  }

  onChangeUserInput = event => {
    this.setState({userId: event.target.value})
  }

  userPinFiled = () => {
    const {pin} = this.state
    return (
      <>
        <label htmlFor="pin" className="input-label">
          PIN
        </label>
        <input
          type="password"
          id="pin"
          className="input-filed"
          placeholder="Enter PIN"
          value={pin}
          onChange={this.onChangePinInput}
        />
      </>
    )
  }

  userInputFiled = () => {
    const {userId} = this.state
    return (
      <>
        <label htmlFor="userInput" className="input-label">
          User ID
        </label>
        <input
          type="text"
          id="userInput"
          className="input-filed"
          placeholder="Enter User ID"
          value={userId}
          onChange={this.onChangeUserInput}
        />
      </>
    )
  }

  render() {
    const {isShow, errorMsg} = this.state
    return (
      <div className="Login-route-container">
        <div className="response-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-img"
          />
          <form className="form-container" onSubmit={this.onAddSubmit}>
            <h1 className="form-heading">Welcome Back</h1>
            {this.userInputFiled()}
            {this.userPinFiled()}
            <button type="submit" className="login-button">
              Login
            </button>
            {isShow && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
