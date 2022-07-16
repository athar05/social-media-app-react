import React, {Fragment} from 'react'

const LandingPage = () => {
  return (
    <>
     <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> Entrepreneur Connect</a>
      </h1>
      <ul>
        <li><a href="register.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
    <section className="landing-page">
      <div className="dark-overlay">
        <div className="landing-page-inner">
          <h1 className="x-large">Extrepreneur Connect</h1>
          <p className="lead">
            A place to connect with Entrepreneurs, VCs and Business Partners.
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Sign Up</a>
            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default LandingPage

