import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
       <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme="dark">
        <div className="container-fluid">
            <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/" >{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">Contact</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">{props.aboutText}</a>
                </li>
            </ul>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input onClick={props.toggle} className={`form-check-input bg-${props.mode}`} type="checkbox" role="switch" id="modeSwitch"/>
                <label className="form-check-label" htmlFor="modeSwitch">{props.btnText}</label>
            </div>
        </div>
        </nav>
    </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string,
}
