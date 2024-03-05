import React from "react";
import { Container , Row , Col } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTruck,faDollarSign,faRightLeft,faWrench} from '@fortawesome/free-solid-svg-icons'
import pro1 from "../img/50.png"
import pro2 from "../img/2.png"
import pro3 from "../img/3.png"
import pro30 from "../img/30.jpeg"
import ProductImages from "./productImages.js";

const Products = ()=>{

    const products = [
      {id:1, title: "APPLE MacBook Air", imageUrl: pro1 , description:"M1, 8GB, 256GB, 13 inch" , price:"3699" },
    {id:2, title: "HUAWEI MateBook D15", imageUrl: pro2 , description:"Core i5, 8GB, 512GB SSD, 15.6 inch" ,price:"1979" },
    {id:3, title: "HP Pavilion Plus", imageUrl: pro3 , description:"Core i5, 16GB, 512GB, 14 inch" , price:"2609"},
    ]

    return(

        <section className="theProducts" id="products">

           <div className="features">
      <Row>
        <Col xs={12} md={6} lg={3}>
          <p className="feature-item">
            <FontAwesomeIcon className="featuresIcon" icon={faTruck} />
            <span>Delivery & installation</span>
          </p>
        </Col>
       
        <Col xs={12} md={6} lg={3}>
          <p className="feature-item">
            <FontAwesomeIcon className="featuresIcon" icon={faDollarSign} />
            <span>Price match policy</span>
          </p>
        </Col>
       
        <Col xs={12} md={6} lg={3}>
          <p className="feature-item">
            <FontAwesomeIcon className="featuresIcon" icon={faRightLeft} />
            <span>Return & Exchange</span>
          </p>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <p className="feature-item">
            <FontAwesomeIcon className="featuresIcon" icon={faWrench} />
            <span>Help & support</span>
          </p>
        </Col>
      </Row>
    </div>

          

        <Container>
            <Row>
                <Col>
                <div className="cardProduct">
                    <h2>Featured Products</h2>
                    <p></p>

                    <Row>
                    {products.map((product) => (
                 <ProductImages         
                        title={product.title}
                         description={product.description}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            product={product}
                             />
                                 ))}
                                    </Row>
                </div>
             
                </Col>
            </Row>
        </Container>

        <img className="productImg" src={pro30}/>


        </section>


      )



}

export default Products