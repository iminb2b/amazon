import styled from "styled-components/macro";
import { MdSearch, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";


export const Container = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 99;
`;
export const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
`;
export const Search = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
`;
export const SearchInput = styled.input`
    width: 100%;
    height: 12px;
    padding: 10px;
    border: none;
`;
export const SearchIcon = styled(MdSearch)`
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
`;
export const Option = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-left:10px;
    margin-right: 10px;
    justify-content: center;
    color: white;
    cursor: pointer;
text-decoration: none;
`;
export const OptionLineOne = styled.span`
    font-size: 10px;
`;
export const OptionLineTwo = styled.span`
    color: white;
    font-size: 13px;
    font-weight: 800;
`;
export const OptionBasket = styled.div`
    display: flex;
    align-items: center;
    color: white;
`;
export const BasketCount = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 13px;
    font-weight: 800;
`;
export const Nav = styled.div`
    display:flex;
    justify-content: space-evenly;
`;


