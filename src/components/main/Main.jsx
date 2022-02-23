import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//libraries
import axios from 'axios';
import Dropdown from 'react-dropdown';
//components
import SkeletonTable from '../skeletons/SkeletonTable';
import { GoogleApiWrapper, Map } from 'google-maps-react';

function Main() {
    //options for select component
    const options = [
        { value: 'Копировать', label: 'Копировать' },
        { value: 'Скачать спецификацию', label: 'Скачать спецификацию' },
        { value: 'Отправить в производство', label: 'Отправить в производство' },
        { value: 'Удалить', label: 'Удалить' }
    ]
    const btns = document.querySelectorAll('button')
    const [posts, setPosts] = useState(null)
    const [nextStep, setNextStep] = useState(false)
    //create new calculation
    const [showTemplateSelection, setShowTemplateSelection] = useState(false)
    const mapStyles = {
        width: '800px',
        height: '800px',
      };

    return (
        <MainContainer>
            <MainHeader>
                <h2>Карта сертифицированных ортопедов и нейрохирургов Украины</h2>
                <h3>Быстрый и удобный поиск специалиста по нужной местности</h3>
            </MainHeader>

            <MainBlock>
            <Map
                google={google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            />
            </MainBlock>
        </MainContainer>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCwHpfvCoMeuASAPdtecNb4PALxILQ-XbQ'
  })(Main);

const MainContainer = styled.div`
   flex-grow: 1;
   overflow-y: scroll;
   margin-top: 88px;
   padding: 40px;
`
const MainHeader = styled.div`
    margin-bottom: 16px;
    h2 {
        font-style: normal;
        font-weight: 900;
        font-size: 38px;
        line-height: 46px;

        color: #000000;

        margin-bottom: 16px;
    }
    h3 {
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;

        color: #000000;
    }
`

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const MainTableContainer = styled.div`
    table {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
        animation: showBlock 0.5s linear forwards;
        td {
            padding: 16px;
        }
        thead {
            tr {
                th {
                    padding: 16px;
                }
            }
            height: 72px;
            border-bottom: 1px solid #000000;
        }
        tbody {
            tr {
                height: 72px;
                td {
                    img {
                        cursor: pointer;
                    }
                    :first-child {
                        color: var(--primary-pink);
                    }
                    :nth-child(8n) {
                        >span {
                            padding: 8px 8px;
                            background-color: #E5E5E5;
                        }
                    }
                }
                :hover {
                    background-color: var(--primary-gray);
                }
            }
        }
    }

    @keyframes showBlock {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

const MainInputSearch = styled.div`
    display: flex;
    flex: 0.35;
    margin-right: 16px;

    >input {
        height: 40px;
        border: 1px solid #A9A9A9;
        border-radius: 0;
        outline: none;
        flex: 1;
    }
    >button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
        height: 40px;
        width: 40px;
    }
`


const MainInputFilter = styled.div`
    display: flex;
    flex: 0.3;
    margin-right: 16px;
    >input {
        height: 40px;
        border: 1px solid #000000;
        border-radius: 0;
        outline: none;
        flex: 1;
        background-size: 14px 14px;
        background-repeat: no-repeat;
        background-position-x: 96%;
        background-position-y: 50%;
        padding-right: 13px;
    }
`

const MainFilter = styled.div`
    display: flex;
    flex: 0.2;
    margin-right: 16px;
    >input {
        height: 40px;
        border: 1px solid #000000;
        border-radius: 0;
        outline: none;
        flex: 1;

        background-size: 16px 16px;
        background-repeat: no-repeat;
        background-position-x: 96%;
        background-position-y: 50%;
    }
`

const MainButtonCalculation = styled.div`
    display: flex;
    flex: 0.15;
    >button {
        flex: 1;
        font-size: 16px;
        line-height: 24px;

        text-align: left;
        padding: 8px 16px;

        background-color: var(--primary-green);
        color: #fff;
        background-size: 16px 16px;
        background-repeat: no-repeat;
        background-position-x: 93%;
        background-position-y: 50%;

        border: none;
        cursor: pointer;
        height: 40px;
        min-width: 157px;
        transition: background .25s;
        user-select: none;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        position: relative;
    }

    .wave {
        background: #479292;
        color: white;
        border-radius: 50%;
        transform: scale(0);
        animation: wave .5s linear;
        pointer-events: none;
        position: absolute;
    }

    @keyframes wave {
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`

const MainBlockContainer = styled.div`
    display: flex;
`
