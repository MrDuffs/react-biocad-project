import React from 'react'

const ReportFilters = () => {
    return (
        <div className="report_filters_container">
            <select className="report_filters_selection" >
                <option>1 month</option>
                <option>2 months</option>
                <option>3 months</option>
                <option>half-year</option>
                <option>1 year</option>
            </select>
            <div className="report_filters_radio">
                <label><input type="radio" name="report-filters" />Calibration</label>
                <label><input type="radio" name="report-filters" />Measuring</label>
                <label><input type="radio" name="report-filters" />Using</label>
            </div>
            <button className="report-filters-btn">Generate report</button>
        </div>
    )
}

export default ReportFilters
