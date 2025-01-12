import styled from 'styled-components'

export const FeatureCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-color: #f2f2f2;
`
export const FeaturesLi = styled.ul `
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    padding: 10%;
    padding-top:0;
    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: 65vw;
    }
`
export const FHead = styled.h1 `
    font-weight: 500;
    margin-bottom: 0;
    font-size: 28px;
    @media screen and (min-width: 768px){
        font-size: 46px;
    }
`