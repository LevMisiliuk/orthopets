import React from 'react'
import styled from 'styled-components'
//icons
import ArrowRight from '../../assets/arrow-right-icon.svg';

function Modal({active, setActive, children}) {
    return (
        <ModalContainer>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal-content active" : "modal-content"} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </ModalContainer>
    )
}

export default Modal;

const ModalContainer = styled.div`
    .modal {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .4s all;
        opacity: 0;
        pointer-events: none;
        z-index: 2;
        &.active {
            opacity: 1;
            pointer-events: all;
        }
    }
    .modal-content {
        padding: 32px;
        background-color: #fff;
        width: 50vw;
        transform: scale(0.5);
        transition: .4s all;

        &.active {
            transform: scale(1);
        }

        .modal-header {
            /* font-family: Brix Sans; */
            font-style: normal;
            font-weight: 900;
            font-size: 24px;
            line-height: 32px;

            margin-bottom: 24px;
        }

        .modal-body {
            display: flex;
            flex-direction: column;

            .modal-button {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                padding: 8px 16px;
                min-width: 280px;
                width: auto;
                color: #fff;

                background-color: #000;
                margin-bottom: 8px;
            }

            .modal-button-gray {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                min-width: 280px;
                padding: 8px 16px;
                width: auto;
                color: #000;

                background-color: #DCDCDC;
                margin-bottom: 8px;
                margin-right: 18px;

                :active {
                    background-color:#b6b6b6;;
                    color: #fff;
                }
            }
            .checkbox-btn {
                display: inline-block;
                margin: 0 5px 0 0;
                user-select: none;
                position: relative;
            }
            .checkbox-btn input[type=checkbox] {
                z-index: -1;
                opacity: 0;
                display: block;
                width: 0;
                height: 0;
            }
            .checkbox-btn span {
                display: inline-block;
                cursor: pointer;
                padding: 0px 10px;
                line-height: 30px;
                border: 1px solid #DCDCDC;
                transition: background 0.2s ease;

                margin-right: 8px;
            }
            
            /* Checked */
            .checkbox-btn input[type=checkbox]:checked + span {
                background: #000;
                color: #fff;
            }
            
            /* Hover */
            .checkbox-btn:hover {
                color: #666;
            }
            
            /* Active */
            .checkbox-btn input[type=checkbox]:active:not(:disabled) + span {
                opacity: 0.3;
            }
            
            /* Disabled */
            .checkbox-btn input[type=checkbox]:disabled + span {
                background: #efefef;
                color: #666;
                cursor: pointer;
            }
            .checkbox-btn input[type=checkbox]:checked:disabled + span {
                background: #f7efdc;
            }
            .modal-elements {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                flex-wrap: wrap;
                margin-bottom: 8px;
            }

            .modal-few-elements {
                display: flex;
            }

            .modal-subtitle {
                font-size: 14px;
                line-height: 22px;

                color: #989898;
            }

            .modal-block {
                margin-right: 16px;
            }
        }


        .dropdown-select {
            width: 280px;
            height: 40px;

            margin-right: 16px;

           .Dropdown-arrow-wrapper {
                height: 40px;
                transform: rotate(0deg);
                transition: all .2s ease-in-out;
                .arrow-change {
                    transition: all .2s ease-in-out;
                    img {
                        transition: all .2s ease-in-out;
                        transform: rotate(0deg);
                    }
                }
                .arrow-change.active {
                    transition: all .2s ease-in-out;
                    img {
                        transition: all .2s ease-in-out;
                        transform: rotate(-90deg);
                    }
                }
           }

            .Dropdown-control {
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                padding: 0 0 0 8px;
            } 
        }
        .react-select-container {
            height: auto;
            width: auto;
        } 
        .react-select__control {
            border-radius: 0px;
            min-width: 280px;
            min-height: 36px;
            width: auto;
            height: auto;

            display: flex;
        }

        .react-select__control--is-focused {
            border-color: #989898;
            box-shadow: none;
            .react-select__control--menu-is-open {
                border-color: none;
                box-shadow: none;
            }
        }
        
        .react-select__value-container {
            padding: 0 8px 0 8px;
            margin: 0;
        }
        .react-select__input-container {
            margin: 0;
            padding: 0;
        }

        .react-select__multi-value {
            border-radius: 0;
            background-color: #000;
        }

        .react-select__multi-value__label {
            color: #fff;
        }

        .react-select__multi-value__remove {
            background-color: #000;
            color: #fff;

            :hover {
                background-color: var(--primary-pink);
            }
        }

        .next-button {
            width: 167px;
            height: 40px;

            background-color: var(--primary-pink);
            color: #fff;

            margin-top: 24px;
            padding: 8px 16px;

            text-align: left;

            background-image: url(${ArrowRight});
            background-repeat: no-repeat;
            background-position-x: 140px;
            background-position-y: center;
        }
    }
`
