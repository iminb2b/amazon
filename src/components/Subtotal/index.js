import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Container, Gift, Input, Text } from "./styles/Subtotal"
import { useSelector, useDispatch } from "react-redux"
function Subtotal() {
    const basket = useSelector(state => state.basket)
    const value = useSelector(state => state.basket.total);
    return (
        <Container>
            <Text>Subtotal  {basket.qty} items: $<strong>{value}</strong></Text>
            <Gift>
                <Input type="checkbox" />
                This order contains a gift
            </Gift>
            <Button>Proceed to Checkout</Button>
        </Container>
    )
}

export default Subtotal
