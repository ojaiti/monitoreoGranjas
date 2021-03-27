import React from 'react'
import ciudades from './data/ciudades'
import TemplateBioseguridad from './components/TemplateBioseguridad'

const TablaNoroeste = () => {
    return (
        <div>
            <TemplateBioseguridad ciudades={ciudades} cantidadDeColumnasYFilas={37} />
        </div>
    )
}

export default TablaNoroeste
