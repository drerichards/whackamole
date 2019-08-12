import React from 'react'
import Score from './Score/Score'
import Controls from './Controls/Controls'
import './Footer.scss'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div className="footer-container">
            <Score />
            <Controls />
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
