import React from 'react'
import "./mainBody.css"

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";

const TemplateMonitoreo = ({ciudades,titulo, nombreTabla}) => {

  const [ciudad, setCiudad] = React.useState('1');
  const [ciudad2, setCiudad2] = React.useState('2');
  let history = useHistory();
  const handleClick = () => {
    history.push("/"+nombreTabla);
    console.log(nombreTabla, 'bnOMBRE tABLA')
  }
    
  const handleChange = (event) => {
    setCiudad(event.target.value);
  };
  const handleChange2 = (event) => {
    setCiudad2(event.target.value);

    console.log('ciudad', ciudad)
    console.log('ciudad2', ciudad2)
  };
    return (
        <div className="main__body">
            <h2>{titulo}</h2>
            <h1>¿Vas a viajar a alguna división / operación de la empresa?</h1>
            <h1>Nota: Revisa primero las restricciones existentes de <button type="button" onClick={handleClick}>BIOSEGURIDAD</button></h1>

            <form  noValidate autoComplete="off">
                <div className="content-form" >

                    <div className="mb-10">
                        <h4>Origen</h4>
                        
                        <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={ciudad}
                        onChange={handleChange}
                        helperText="Porfavor selecciona el origen"
                        >
                        {ciudades.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    
                    </div>
                    <div className="mb-30">
                        <span>Estatus (Origen) {' '}</span> 
                        <span className={ciudades[parseInt(ciudad) - 1].status === 'Libre' ? 'libre' : 'noLibre'}>
                            {
                                ciudades[parseInt(ciudad) - 1].status
                            }
                            
                        </span>
                    </div>
                    <div className="mb-10">
                        <h4>Destino</h4>
                        
                        <TextField
                        id="standard-select-currency2"
                        select
                        label="Select"
                        value={ciudad2}
                        onChange={handleChange2}
                        helperText="Porfavor selecciona el destino"
                        >
                        
                        {ciudades.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    
                    </div>
                    <div className="mb-10">
                    <span>Estatus (Destino) {' '}</span> 
                        <span className={ciudades[parseInt(ciudad2) - 1].status === 'Libre' ? 'libre' : 'noLibre'}>
                            {
                                ciudades[parseInt(ciudad2) -1].status
                            }
                            
                        </span>
                    </div>

                </div>

                <div className="show__restriccion">
                <h4 className="mb-30">Restricción Actual</h4>
                <div style={{textAlign: 'center'}}>

                    {
                        ciudad === ciudad2 ? 'Revise flujos intra operación' :
                        ciudades[parseInt(ciudad) - 1].destinosConAutorizacion.includes(ciudad2) ? 'No deberá asistir / requiere autorización' : 
                        ciudades[parseInt(ciudad) - 1].destinosConPrevencion.includes(ciudad2) ? 'Podrá asistir, utilizando ropa de tránsito limpia y proporcionada por la Operación.' : ''
                        
                    }
                    <br/><br/><br/><br/><br/>
                    {
                        ciudades[parseInt(ciudad) - 1].destinosConAutorizacion.includes(ciudad2) ? ciudades[parseInt(ciudad) - 1].noches[parseInt(ciudad2) - 1] : ''
                    }
                    {' '}
                    {
                        ciudades[parseInt(ciudad) - 1].noches[parseInt(ciudad2) - 1] === '1' ? 'noche' : 'noches'
                    }
                   
                </div>

            </div>

            </form>

            
            


            
            
        </div>
    )
}
export default TemplateMonitoreo
