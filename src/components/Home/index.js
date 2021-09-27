import React from 'react'
import { ProductsInfo } from '../../data/ProductsInfo'
import Product from '../Product'
import { Container, Image, Row, Banner } from "./styles/Home"
function Home() {
    const products = [
        [ProductsInfo[0], ProductsInfo[1]],
        [ProductsInfo[2], ProductsInfo[3], ProductsInfo[4]],
        [ProductsInfo[5]]
    ];

    return (
        <Container>
            <Banner>
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />
            </Banner>

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
    )
}

export default Home
