import React from 'react';
import styled from "styled-components";
import Logo from "../../assets/logo-orthopets.svg";


function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderLogo
                    src={Logo}
                > 
                </HeaderLogo>
            </HeaderLeft>
            <HeaderRight>
                Ортопедическое-нейрохирургическое ветеринарное сообщество Украины "Ortopets"
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: auto;
    max-width: 100vw;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E5E5E5;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    padding: 11.5px 24px;
`

const HeaderRight = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height, or 137% */

    text-align: right;

    color: #DF3A06;
    padding: 20px 24px;
`

const HeaderLogo = styled.img`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`
const HeaderAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #000;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    >span {
        color: #fff;
        font-size: 26px;
        text-align: center;
        align-self: center;
    }
    :hover {
        opacity: 0.8;
    }
`