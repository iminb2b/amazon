import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;
    @media screen and (max-width: 792px){
        margin: 10px 0;
        box-sizing: border-box;

    }
`;
export const Rating = styled.div`
    display: flex;
    color: #FFA41D;
    margin-top: 5px;
    font-size: 22px;

`;
export const Image = styled.img`
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
`;
;
export const Price = styled.div`
    margin-top: 5px;
`;
export const Info = styled.div`
    height: 100px;
    margin-bottom: 15px;
    user-select: none;
`;
export const Button = styled.button`
    cursor: pointer;
    background-color:#fed813 ;
    color: #111;
    height: 40px;
    border-radius: 20px;
    border: none;
    padding: 0 2rem;

    &:hover{
        background-color: #FFA41D;
    }
`;