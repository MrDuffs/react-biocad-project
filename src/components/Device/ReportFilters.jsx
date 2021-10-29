import React from 'react'
import arrow from '../../common/images/arrow.svg'
import Select, { components } from 'react-select'

const options = [
    { value: '1 month', label: '1 month' },
    { value: '2 months', label: '2 months' },
    { value: '3 months', label: '3 months' },
    { value: 'half-year', label: 'half-year' },
    { value: '1 year', label: '1 year' }
]

const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: 0,
        height: 30,
        minHeight: 30,
        border: '1px solid #E9E9E9',
    }),
    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: 12,
    }),
    singleValue: (provided) => ({
        ...provided,
        margin: 0,
        color: '#353535',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        paddingTop: 12,
        paddingRight: 10,
    }),
}

const DropdownIndicator = ( props ) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={arrow} alt="" />
      </components.DropdownIndicator>
    );
};

const ReportFilters = () => {
    return (
        <div className="report_filters_container">
            <Select
                styles={customStyles}
                components={{ 
                    DropdownIndicator,
                    IndicatorSeparator: () => null
                }}
                options={options}
                defaultValue={options[0]}
                isSearchable={false}
            />
            <div className="report_filters_radio">
                <div className="radio_group">
                    <label>
                        <input
                            type="radio"
                            name="report-filters"
                            value="Calibration"
                            className="real_radio_btn"
                        />
                        <span className="custom_radio_btn"></span>
                        Calibration
                    </label>
                </div>
                <div className="radio_group">
                    <label>
                        <input
                            type="radio"
                            name="report-filters"
                            value="Measuring"
                            className="real_radio_btn"
                        />
                        <span className="custom_radio_btn"></span>
                        Measuring
                    </label>
                </div>
                <div className="radio_group">
                    <label>
                        <input
                            type="radio"
                            name="report-filters"
                            value="Using"
                            className="real_radio_btn"
                        />
                        <span className="custom_radio_btn"></span>
                        Using
                    </label>
                </div>
            </div>
            <button className="report_filters_btn">Generate report</button>
        </div>
    )
}

export default ReportFilters
