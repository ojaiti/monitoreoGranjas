import React from 'react'
import tehuacan from './data/tehuacan'
import TemplateBioseguridad from './components/TemplateBioseguridad'

const TablaTehuacan = () => {
    return (
        <div>
            <TemplateBioseguridad ciudades={tehuacan} cantidadDeColumnasYFilas={14}  />
        </div>
    )
}

export default TablaTehuacan
