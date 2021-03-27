import React from 'react'
import TemplateMonitoreo from './TemplateMonitoreo'
import veracruz from './data/veracruz'

const MonitorVeracruz = () => {
    return (
        <div>
            <TemplateMonitoreo ciudades={veracruz} titulo={'Veracruz'} nombreTabla={'tablaveracruz'} />
        </div>
    )
}

export default MonitorVeracruz
