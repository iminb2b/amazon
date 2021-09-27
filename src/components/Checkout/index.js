import React from 'react'
import { Container, Title, Ad, Group, Email, Right, Left } from './styles/Checkout';
import CheckoutProduct from "../CheckoutProduct"
import Subtotal from '../Subtotal';
import { useSelector } from "react-redux"

function Checkout() {
    // const [{ basket, user }, dispatch] = useStateValue();
    const basket = useSelector(state => state.basket.basket);
    const user = useSelector(state => state.basket.user);
    console.log(basket)
    return (
        <Container>
            <Left>
                <Ad src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="" />
                <Group>
                    <Email>Hello, {user}</Email>
                    <Title>Your shopping basket</Title>
                    {
                        basket?.map(item => (
                            <CheckoutProduct
                                item={item}
                            />

                        ))
                    }
                </Group>
            </Left>
            <Right>
                <Subtotal />
            </Right>

        </Container>
    )
}

export default Checkout
