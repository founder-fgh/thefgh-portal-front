import styled from "styled-components";

export const AboutCont = styled.div `
    height: 100vh;
    background-image: linear-gradient( #19212C, #313F4F);
    @media screen and (min-width: 768px){
        background-image: url('https://res.cloudinary.com/dzhzfdugz/image/upload/v1735450456/v12lkfbtccv1zntwa57d.jpg');
        background-size: cover;
    }
`

export const TextCont = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 7%;
    padding-right: 7%;
    @media screen and (min-width: 768px){
        padding-left: 10%;
        max-width: 40vw;
    }
`

export const MVCont = styled.div `
    color: #ffffff;
`;

export const AHead = styled.h1 `
    font-weight: 500;
    font-size: 38px;
    @media screen and (min-width: 768px){
        font-size: 60px;
        margin-bottom: 10px;
    }
`

export const ADes = styled.p `
    font-size: 14px;
    font-weight: 400px;
    line-height: 1.7;
    @media screen and (min-width: 768px){
        font-size: 16px;
    }
`