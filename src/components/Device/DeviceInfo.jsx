import React from 'react'

const DeviceInfo = () => {
    return (
        <div className="device_info_container">
            <p><span>Тип оборудования:</span> Весы</p>
            <p><span>Статус:</span> Готов к работе</p>
            <p><span>Изготовитель:</span> Ohaus</p>
            <p><span>Модель:</span> AX-123</p>
            <p><span>Ответственное подразделение (ремонт):</span> Группа обслуживания лабораторного оборудования</p>
            <p><span>Эксплуатирующее подразделение:</span> Химико-аналитическая лаборатория 2.0</p>
            <p><span>МОЛ:</span> Иванов Иван Иванович</p>
            <p><span>Территория:</span> г. Санкт-Петербург (Нойдорф)</p>
            <p><span>Серийный номер:</span> B715976163</p>
            <p className="device_guid"><span>GUID:</span> 508b2a71-662e-4983-ae0c-3cb0c1cd21c5</p>
            <p className="device_bims_id"><span>Bims ID:</span> 49db8db1-585f-4b9e-bbf0-8a59698edc8b</p>
            <p className="device_tam"><span>Tam:</span> А-001234</p>
        </div>
    )
}

export default DeviceInfo
