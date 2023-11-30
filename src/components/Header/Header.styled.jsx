import styled from "@emotion/styled/macro";
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as LogoHovered } from '../../assets/icons/logo_hover.svg';
import { ReactComponent as Burger } from '../../assets/icons/burger.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow_down.svg';


export const Container = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding-top: 36px;
        padding-bottom: 36px;
    }

    @media screen and (min-width: 1280px) {
        padding-top: 24px;
        padding-bottom: 24px;
    }
`;
export const StyledLogo = styled(Logo)`
    display: block;
`;

export const StyledLogoHovered = styled(LogoHovered)`
    display: none;
`;

export const LogoWrapper = styled.a`
    text-decoration: none;
    cursor: pointer;

    &:hover ${StyledLogo} {
        display: none;
    }

    &:hover ${StyledLogoHovered} {
        display: block;
    }
`;

export const StyledBurger = styled(Burger)`
    display: block;
    cursor: pointer;
    fill: var(--burgerBgColor);

    &:hover {
        fill: var(--lightGreen);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px; 
`;

export const StyledArrow = styled(ArrowDown)`
    display: none;
    position: absolute;
    top: 15px;
    right: 14px;
    z-index: 1;
`;

export const Styledlink = styled.a`
    display: none;
    
    @media screen and (min-width: 768px) {
        display: block;
        position: relative;
        width: 140px;
        height: 39px;
        background-color: var(--lightGreen);
        padding: 10px 12px 10px 16px;
        gap: 12px;
        border-radius: 500px;
        box-sizing: border-box;
        font-family: Fira Sans;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.2;
        color: var(--textColor);
        text-decoration: none;
        cursor: pointer;

        &::after {
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: var(--textColor);     
            top: 12px;
            right: 12px;
        }  
    }

    &:hover {
        background-color: var(--textColor);
        color: var(--lightGreen);

        &::after {
            background-color: var(--lightGreen); 
        }

        &:hover ${StyledArrow} {
            display: block;
        }
    }
`;