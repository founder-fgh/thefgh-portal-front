import styled from "styled-components"
import { FiSearch } from "react-icons/fi";

export const HomeCont = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
    height: 90vh;
    padding: 15px;
    background-image: url('https://res.cloudinary.com/dzhzfdugz/image/upload/v1735276341/wvaqlfbhler1shfrsubq.jpg');
   background-position: 75%;
   background-size: cover;
    @media screen and (min-width: 768px){
        justify-content: center;
        text-align: center;
        background-size: cover;
    }
`

export const InEl = styled.input `
    outline: none;
    border: 0;
    width: 60vw;
    height: 30px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 5px;
    font-size: 12px;
    @media screen and (min-width: 768px){
        height: 40px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 7px;
        padding-left: 17px;
        font-size: 18px;
    }
`
export const Head = styled.h1 `
    font-size: 50px;
    font-weight: 500;
    color: #f2f2f2;
    @media screen and (min-width: 768px){
        text-align: center;
        margin: 10px;
    }
`

export const HD = styled.p `
    color: #d9d9d9;
    line-height: 1.6;
    font-size: 16px;
    @media screen and (min-width: 768px){
        margin: 10px;
        margin-top: 40px;
        font-weight: 500;
        font-size: 16px;
    }
`

export const Btn1 = styled.button `
    background-color: #d9d9d9;
    font-weight: 500;
    border: 0;
    font-size: 12px;
    padding: 3px;
    height: 25px;
    width: 60px;
    border-radius: 10px;
    margin: 3px;
    cursor: pointer;
    @media screen and (min-width: 768px){
        padding: 5px;
        height: 43px;
        width: 100px;
        border-radius: 20px;
        margin: 10px;
        font-size: 16px;
}
`

export const Btn2 = styled(Btn1) `
    background-color: #4379d5;
`  

export const Search = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4379d5;
    border-radius:10px;
    height: 30px;
    width: 30px;
    margin-left: -12px;
    @media screen and (min-width:768px){
        width: 40px;
        height: 40px;
        margin-left: -20px;
        color: #ffffff;
    }
    cursor: pointer;
`

export const SearchIcon = styled(FiSearch)`
    font-size: 15px;
`
export const SearchContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    mrgin-top: 10px;
    margin-bottom: 10px;
    @media screen and (min-width: 768px){
        margin: 50px;
        justify-content: center;
    }
`