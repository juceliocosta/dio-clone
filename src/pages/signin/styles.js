import styled from "styled-components";

export const Container = styled.main`    
    margin-top: 60px;
    
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const Wrapper = styled.div`
    max-width: 300px
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
`;

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF
`;

export const TitleLogin = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px; 
    margin-bottom: 20px;
    line-height: 44px;
`;

export const SubtitleLogin = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
    line-height: 25px;
`;

export const StrongText = styled.strong`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #ffffff;
`;

export const LoginText = styled.strong`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #50C570;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;