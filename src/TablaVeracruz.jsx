import React from 'react'
import veracruz from './veracruz'
import TemplateBioseguridad from './TemplateBioseguridad'

const TablaVeracruz = () => {
    return (
        <div>
            <TemplateBioseguridad ciudades={veracruz} cantidadDeColumnasYFilas={19}  />
        </div>
    )
}

export default TablaVeracruz
