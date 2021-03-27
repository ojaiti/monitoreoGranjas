import React from 'react'
import tehuacan from './data/tehuacan'
import TemplateMonitoreo from './TemplateMonitoreo'

const MonitorTehuacan = () => {
    return (
        <div>
            <TemplateMonitoreo ciudades={tehuacan} titulo={'Tehuacan'} nombreTabla={'tablatehuacan'} />
        </div>
    )
}

export default MonitorTehuacan
