import React, {Component} from 'react';
import {render} from 'react-dom';
import styled from 'styled-components'
import Map from '../map';

const Hed = () => {
    return (
      <Head>Добро пожаловать в город-герой Сириус!</Head>
    );
  };

export default function App({showBorder = false, onTilesLoad = null}){
    return (
      <div>
        <Hed />
        <Body> 
            <Map_style>
                <Map />
            </Map_style>
        </Body>
      </div>
    );
  };


const Head = styled.h1` 
    width: 100%;
    height: 100%;
    top: 10px;
    display: grid;
    padding: 0.5vmax;
    text-align: center;
`

const Body = styled.div`
    position: absolute; /* Абсолютное позиционирование */
    top: 100px; /* Положение от нижнего края */
    left: 15px; /* Положение от правого края */
    right: 10px;
    height: 400px; /* Высота блока */
    align-content: center;
`
const Map_style = styled.div`
    position: relative; /* Относительное позиционирование */
    background: #f0f0f0; /* Цвет фона */
    top: 10px;
    height: 400px; /* Высота блока */
    margin-left: 10px;
    margin-right: 10px;
`
export function renderToDOM(container) {
    render(<App />, container);
  }
