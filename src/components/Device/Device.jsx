import React from 'react'
import '../../styles/Device.css'
import UnitName from './UnitName'
import DeviceInfo from './DeviceInfo'
import ReportFilters from './ReportFilters'

const Device = () => {
    return (
        <div className="device_container">
            <UnitName />
            <DeviceInfo />
            <ReportFilters />
        </div>
    )
}

export default Device
