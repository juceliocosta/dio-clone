import styled, {css} from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background-color: #565656;
    color: #FFFFFF;
    border-radius: 22px;
    position: relative;
    
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    ${({$variant}) => $variant !== "primary" && css`
        background-color: #e4105d;
        min-width: 168px;
        height: 33px;
        margin-top: 20px;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: "";
            position: absolute;
            border: 1px solid #e4105d;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

    `}

`