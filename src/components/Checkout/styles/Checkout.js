import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    background: white;
    height: max-content;
    
    @media screen and (max-width: 792px){
        flex-direction: column;
    }
`;
export const Ad = styled.div`
    width:100%;
    margin-bottom: 10px;

`;
export const Title = styled.div`
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
`;
export const Group = styled.div``;
export const Email = styled.h3``;
export const Right = styled.div``;
export const Left = styled.div``;