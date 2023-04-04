import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
      <div className="container-fluid mx-3">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: "ENTER TITLE -_-",
}

Header.propTypes = {
  title: PropTypes.string
}