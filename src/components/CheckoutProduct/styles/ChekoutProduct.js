import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 792px){
        flex-direction: column;
    }
`;
export const Info = styled.div`
    padding-left: 20px;
`;
export const Button = styled.button`
    cursor: pointer;
    background-color:#fed813 ;
    color: #111;
    height: 40px;
    border-radius: 20px;
    border: none;
    padding: 0 2rem;
    margin-top: 10px;
    &:hover{
        background-color: #FFA41D;
    }
`;
export const Image = styled.img`
    object-fit: contain;
    width: 180px;
    height: 180px;
`;
export const Rating = styled.div`
    display: flex;
    color: #FFA41D;
    margin: 5px 0;
`;
export const Price = styled.div`
   margin: 5px 0;
   font-size: 18px;
`;
export const Title = styled.h1`
    font-size: 17px;
    font-weight: 800;
`;