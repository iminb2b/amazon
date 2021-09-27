import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
    
`;
export const Banner = styled.div``;
export const Image = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image:  linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    
    @media screen and (max-width: 792px){
        margin-bottom: 0px;


    }
`;
export const Row = styled.div`
    display: flex;
    z-index: 1;
    margin: 0 5px;
    @media screen and (max-width: 792px){
        flex-direction: column;
        margin: 0;

    }
`;