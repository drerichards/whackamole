import React from 'react'
import MoleArea from './MoleArea'
import './MoleContainer.scss'
import PropTypes from 'prop-types'

const MoleContainer = props => {
    return (
        <div className="mole-area-container">
            <MoleArea />
        </div>
    )
}

MoleContainer.propTypes = {

}

export default MoleContainer
