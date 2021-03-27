import React from 'react'
import TemplateMonitoreo from './TemplateMonitoreo'
import ciudades from './ciudades'

const MonitorNoroeste = () => {
    return (
        <div>
            <TemplateMonitoreo ciudades={ciudades} titulo={'Noroeste'} nombreTabla={'tablanoroeste'} />
        </div>
    )
}

export default MonitorNoroeste
