import React from 'react'
import tehuacan from './tehuacan'
import TemplateMonitoreo from './TemplateMonitoreo'

const MonitorTehuacan = () => {
    return (
        <div>
            <TemplateMonitoreo ciudades={tehuacan} titulo={'Tehuacan'} nombreTabla={'tablatehuacan'} />
        </div>
    )
}

export default MonitorTehuacan
