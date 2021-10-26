import React from 'react'
import '../styles/FilterDevices.css'

const FilterDevices = () => {
    return (
        <div className="filter_devices" >
            <p className="filter_devices_label">Enter inventory number, guid or bims id</p>
            <div className="filter_devices_search">
                <input type="text" className="filter_devices_search_input" />
                <button className="filter_devices_search_btn" >Search</button>
            </div>
        </div>
    )
}

export default FilterDevices
