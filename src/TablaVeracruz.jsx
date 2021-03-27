import React from 'react'
import veracruz from './data/veracruz'
import TemplateBioseguridad from './components/TemplateBioseguridad'

const TablaVeracruz = () => {
    return (
        <div>
            <TemplateBioseguridad ciudades={veracruz} cantidadDeColumnasYFilas={19}  />
        </div>
    )
}

export default TablaVeracruz
