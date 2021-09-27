import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "../../firebase"
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../../store/reducers/basketSlice/basketSlice'
import { signOut } from "firebase/auth";
import { Option, Nav, BasketCount, OptionBasket, OptionLineOne, OptionLineTwo, Search, SearchIcon, SearchInput, Logo, Container } from "./styles/Header"
function Header() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.basket.user);
    console.log(user);
    const basket = useSelector(state => state.basket);
    const handleAuthentication = () => {
        if (user) {
            dispatch(userLogout());
            signOut(auth);
            history.push("/")
        }
    }
    return (
        <Container>
            <Link to="/">
                <Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
            </Link>
            <Search>
                <SearchInput type="text"></SearchInput>
                <SearchIcon />
            </Search>
            <Nav>

                <Option onClick={handleAuthentication}
                    to={!user && '/signin'}
                >
                    <OptionLineOne>Hello {user ? user : ""}</OptionLineOne>
                    <OptionLineTwo>{user ? 'Sign Out' : 'Sign In'}</OptionLineTwo>
                </Option>
                <Option to="/orders">
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </Option>
                <Option to="/">
                    <OptionLineOne>Your</OptionLineOne>
                    <OptionLineTwo>Prime</OptionLineTwo>
                </Option>
                <Link to="/checkout">
                    <OptionBasket>
                        <MdShoppingBasket />
                        <BasketCount >{basket.qty}</BasketCount>
                    </OptionBasket>
                </Link>
            </Nav>
        </Container>
    )
}

export default Header
