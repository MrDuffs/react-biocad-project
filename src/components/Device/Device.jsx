import React from 'react'
import '../../styles/Device.css'
import UnitName from './UnitName'
import DeviceInfo from './DeviceInfo'
import ReportFilters from './ReportFilters'

const Device = () => {
    return (
        <div className="device_container">
            <div className="device_devider">
                <UnitName />
                <ReportFilters />
            </div>
            <DeviceInfo />
        </div>
    )
}

export default Device
