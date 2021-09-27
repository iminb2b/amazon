import React from 'react'
import { ProductsInfo } from '../../data/ProductsInfo'
import Header from '../Header';
import Product from '../Product'
import { Container, Image, Row, Banner } from "./styles/Orders"
function Orders() {
    const products = [
        [ProductsInfo[0], ProductsInfo[1]],
        [ProductsInfo[2], ProductsInfo[3], ProductsInfo[4]],
        [ProductsInfo[5]]
    ];

    return (<>
        <Header />
        <Container>
            {products.map(product => {
                return <Row key={product.length}>
                    {product.map(
                        item => <Product
                            key={item.id}
                            item={item}
                        />
                    )}
                </Row>

            }



            )}





        </Container>
    </>
    )
}

export default Orders
