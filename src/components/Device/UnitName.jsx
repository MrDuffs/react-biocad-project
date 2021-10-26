import React from 'react'
import scale from '../../common/images/scale.svg'

const UnitName = () => {
    return (
        <div className="unit_name_container">
            <img className="unit_name_icon" src={scale} alt="unit-icon" />
            <p className="unit_name_text">Аналитические весы OHAUS Adventurer АХ324 (B715976163)</p>
        </div>
    )
}

export default UnitName
