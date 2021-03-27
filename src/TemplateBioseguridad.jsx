import styled from 'styled-components'
import React from 'react'
const TemplateBioseguridad = ({ciudades, cantidadDeColumnasYFilas}) => {
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    reverseString("hello");



    const GridLabels = styled.div`
        display: grid;
        grid-template-columns: repeat(${cantidadDeColumnasYFilas}, 1fr);
    `;
    const MainGrid = styled.div`
        display: grid;
        grid-template-rows: repeat(${cantidadDeColumnasYFilas}, 34px);
        overflow: hidden;
        border: 0.1px solid gray;
    `;

    const SidebarGridLeft = styled.div`
        display: grid;
        grid-template-rows: repeat(${cantidadDeColumnasYFilas}, 34px);
    `;
    return (
        <div>
            {/* <h4> Bios seguridad Noroeste</h4> */}
            <div className="grid__container">
                
            <div className="content__noches">
                <h4>Noches</h4>
            </div>
            <div className="grid__system">
                {/* HEADER TOP */}
                <div className="logo">
                    <img src="" alt=""/>
                    <p>Here some text</p>
                </div>
                <div className="header__top">
                    <GridLabels>
                        {ciudades.map(item => <div key={item.value + 'a'} className="label__top"><h5>{item.label}</h5></div>)}
                    </GridLabels>
                </div>
                {/* MAIN */}

                <MainGrid className="main">
                    {ciudades.map(item =>
                     <GridLabels key={item.value} className="label__main">
                        {
                            item.noches.map((noche, index) => {
                                return  <div key={noche + index}  className="label__content"><div>{noche}</div></div>
                            })
                        
                        }
                        
                    </GridLabels>)}
                </MainGrid>

                {/* SIDEBAR LEFT */}
                <SidebarGridLeft className="sidebar__left">
                    {ciudades.map((item, index) => <div key={item.value} className="sidebar__content__labels"><h5 >{item.label} - {index + 1}</h5></div>)}
                </SidebarGridLeft>
            </div>
            </div>
        </div>
    )
}

export default TemplateBioseguridad
