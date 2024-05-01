import './index.css'

import Header from '../Header'

const HomeRoute = () => (
  <>
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1 className="home-heading">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="home-card"
        />
      </div>
    </div>
  </>
)

export default HomeRoute
