import React from 'react'
import '../styles/Report.css'
import checkmark from '../common/images/checkmark.svg'
import cross from '../common/images/cross.svg'

const Report = () => {
    return (
        <div className="report_container">
            <h3 className="report_title">Calibration report</h3>
            <table className="report_table">
                <thead className="report_table_head">
                    <tr>
                        <th>Data</th>
                        <th>Used buffer solutions</th>
                        <th>{'Slope, % \n Norm 95-105'}</th>
                        <th>{'Offset, mV \n Norm ±(0-20)'}</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody className="report_table_body">
                    <tr>
                        <td>{'04.10.19 \n 10:23'}</td>
                        <td>
                            {'В1: № 2000460789536: pH 1.09 \n В2: № 2000460789536: pH 2.00 \nВ3: № 2000460789536: pH 4.01 \n В4: № 2000460789536: pH 7.00 \n В5: № 2000460789536: pH 9.21'}
                        </td>
                        <td>
                            <div>
                                <p>98.7</p>
                                <img src={checkmark} alt="checkmark" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>-0.3</p>
                                <img src={checkmark} alt="checkmark" />
                            </div>
                        </td>
                        <td>Иванов Генадий Петрович</td>
                    </tr>
                    <tr>
                        <td>{'04.10.19 \n 10:23'}</td>
                        <td>
                            {'В1: № 2000460789536: pH 1.09 \n В2: № 2000460789536: pH 2.00 \nВ3: № 2000460789536: pH 4.01 \n В4: № 2000460789536: pH 7.00 \n В5: № 2000460789536: pH 9.21'}
                        </td>
                        <td>
                            <div>
                                <p>98.7</p>
                                <img src={checkmark} alt="checkmark" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>-0.3</p>
                                <img src={checkmark} alt="checkmark" />
                            </div>
                        </td>
                        <td>Петров Иван Генадьевич</td>
                    </tr>
                    <tr>
                        <td>{'04.10.19 \n 10:23'}</td>
                        <td>
                            {'В1: № 2000460789536: pH 1.09 \n В2: № 2000460789536: pH 2.00 \nВ3: № 2000460789536: pH 4.01 \n В4: № 2000460789536: pH 7.00 \n В5: № 2000460789536: pH 9.21'}
                        </td>
                        <td>
                            <div>
                                <p>98.7</p>
                                <img src={checkmark} alt="checkmark" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>-0.3</p>
                                <img src={checkmark} alt="checkmark" />
                            </div>
                        </td>
                        <td>Петров Генадий Иванович</td>
                    </tr>
                    <tr>
                        <td>{'04.10.19 \n 10:23'}</td>
                        <td>
                            {'В1: № 2000460789536: pH 1.09 \n В2: № 2000460789536: pH 2.00 \nВ3: № 2000460789536: pH 4.01 \n В4: № 2000460789536: pH 7.00 \n В5: № 2000460789536: pH 9.21'}
                        </td>
                        <td>
                            <div>
                                <p>90.1</p>
                                <img src={cross} alt="cross" /> 
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>-0.5</p>
                                <img src={checkmark} alt="checkmark" />
                            </div>   
                        </td>
                        <td>Генадьев Иван Петрович</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Report
