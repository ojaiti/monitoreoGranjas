import React from 'react'
import ciudades from './ciudades'
import TemplateBioseguridad from './TemplateBioseguridad'

const TablaNoroeste = () => {
    return (
        <div>
            <TemplateBioseguridad ciudades={ciudades} cantidadDeColumnasYFilas={37} />
        </div>
    )
}

export default TablaNoroeste
