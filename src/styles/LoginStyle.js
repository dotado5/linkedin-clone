import styled from 'styled-components'

export const Container = styled.div`
    padding: 0;
`
export const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    a{
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`
export const Join = styled.button`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0, 0.6);
    margin-right: 12px;
    border: none;
    background: none;

    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
        cursor: pointer;
    }
`
export const SignIn = styled.button`
    background: none;
    border: none;
    box-shadow: inset 0 0 0 1px #0a66c2;
    font-size: 16px;
    color: #0a66c2;
    border-radius: 24px;
    font-weight: 600;
    transition-duration: 167ms;
    line-height: 20px;
    padding: 10px 24px;
    text-align: center;

    &:hover{
        background-color: rgba(112, 181, 249, 0.15);
        cursor: pointer;
        color: #0a66c2;
    }
`
export const Section = styled.section`
    display: flex;
    align-content: flex-start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0;
    }
`
export const Hero = styled.div`
    width: 100%;


    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            height: initial;
            position: initial;
        }
    }
`
export const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`
export const Google = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    height: 55px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

    vertical-align: middle;
    border: 2px solid rgb(0, 0, 0, 0.8);
    z-index: 0;
    transition-duration: 200ms;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);

    &:hover{
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }


`