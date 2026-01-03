import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-flow: row wrap-reverse;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`;

export const TitleHighlight = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`;

export const Column = styled.div`
    flex-grow:${({$flex}) => $flex || 1};
    flex-shrink: ${({$shrink}) => $shrink || 1};
    flex-basis: ${({$basis}) => $basis || "auto"};
    padding-right: 24px;
`;