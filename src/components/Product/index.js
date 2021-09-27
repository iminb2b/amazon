import React from 'react'
import { MdStar } from 'react-icons/md'
import { Container, Image, Info, Price, Rating, Button } from './styles/Product'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../store/reducers/basketSlice/basketSlice'
const Product = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Info>
                <p>{item.title}</p>
                <Rating>
                    {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                            <p><MdStar /></p>
                        ))}
                </Rating>
                <Price>
                    <small>$</small>
                    <strong>{item.price}</strong>
                </Price>

            </Info>
            <Image src={item.image} alt="" />
            <Button onClick={() => dispatch(addToBasket(item))}> Add to basket</Button>
        </Container>
    )
}

export default Product
