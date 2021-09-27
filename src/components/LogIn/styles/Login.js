import styled from "styled-components";
import { Field, Form as FormM } from "formik";
import { Link } from "react-router-dom";
export const Container = styled.div`
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Logo = styled.img`
    margin: 20px auto;
    object-fit: contain;
    width: 100px;
`;
export const Frame = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
`;
export const Title = styled.h1`
    font-weight: 500;
    margin-bottom: 20px;
    user-select: none;
`;
export const Form = styled(FormM)``;
export const Input = styled(Field)`
    height: 30px;
    text-indent: 5px;
    margin-bottom: 5px;
    background-color: white;
    width: 98%; 
`;

export const Label = styled.h5`
    margin-bottom: 5px;
    font-size: 15px;
`;
export const SignInButton = styled.button`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    border: 1px solid;
    cursor: pointer;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    transition: 0.3s;
    &:hover{
        color: #f0c14b;
        background-color: #111;
    }
`;
export const Button = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    color: #111;
    cursor: pointer;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
    transition: 0.3s;
    &:hover{
        color: white;
        background-color: #111;
    }
`;
export const Text = styled.p`
    font-size: 13px;
    line-height: 1.3;
    margin: 10px 5px;
`;
export const Error = styled.p`
    padding: 5px 20px;
    color:#f0c14b;
    font-size: 14px;
`;