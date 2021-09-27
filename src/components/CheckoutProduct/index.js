import React from 'react'
import { MdStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Container, Info, Title, Price, Image, Rating, Button } from './styles/ChekoutProduct'
import { removeFromBasket } from '../../store/reducers/basketSlice/basketSlice';
const CheckoutProduct = ({ item }) => {
    // const [{ basket }, dispatch] = useStateValue();
    const dispatch = useDispatch();
    return (
        <Container>
            <Image src={item.image} />
            <Info>
                <Title>{item.title}</Title>

                <Rating>
                    {Array(item.rating).fill().map((_, i) => <MdStar />)}
                </Rating>

                <Price>
                    <small>$</small>
                    <strong>{item.price}</strong>
                </Price>
                <h5>Quantity: {item.qty}</h5>
                <Button onClick={() => dispatch(removeFromBasket(item))}>Remove from Basket</Button>
            </Info>
        </Container>
    )
}

export default CheckoutProduct
