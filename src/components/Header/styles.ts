import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BuscarImputContainer = styled.div`
    width: 175px;
    height: 30px;
    background-color: #2d2d37;
    border-radius: 8px;
    padding: 0px 5px;
    margin: 0px 12px;

    display: flex;
    align-items: center;
`;

export const Menu = styled.a`
    font-style: normal;
    font-size: 18px;
    line-height: 25px;    
    color: #FFFFFF;
    margin-left: 12px;
    text-decoration: none;
    cursor: pointer;
`;

export const MenuRight = styled.a`
    font-style: normal;
    font-size: 12px;
    line-height: 25px;    
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }   
`;

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
`;

export const Input  = styled.input`
    background-color: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
    border-radius: 8px;
    padding: 2px 5px;
`;


