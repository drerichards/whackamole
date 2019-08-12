import React from 'react'
import User from './User/User'
import './Header.scss'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div className="header-container">
            <h1>Whack-A-Mole</h1>
            <User />
        </div>
    )
}

Header.propTypes = {

}

export default Header
