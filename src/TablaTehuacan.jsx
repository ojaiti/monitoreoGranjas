import React from 'react'
import tehuacan from './tehuacan'
import TemplateBioseguridad from './TemplateBioseguridad'

const TablaTehuacan = () => {
    return (
        <div>
            <TemplateBioseguridad ciudades={tehuacan} cantidadDeColumnasYFilas={14}  />
        </div>
    )
}

export default TablaTehuacan