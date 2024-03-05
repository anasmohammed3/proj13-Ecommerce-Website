import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import pro4 from "../img/4.png";
import pro5 from "../img/5.png";
import pro6 from "../img/6.png";
import pro7 from "../img/7.png";
import pro8 from "../img/8.png";
import pro9 from "../img/9.png";
import ProductImages from "./productImages.js";

const LatestProducts = () => {

  const products = [
    {id:4, title: "LENOVO IdeaPad 1", imageUrl: pro4, description: "Celeron, 4GB, 128GB SSD, 14 inch", price: "849" },
    {id:5, title: "LENOVO IdeaPad Gaming 3", imageUrl: pro5, description: "Ryzen 5, 16GB, 512GB SSD, 15.6 Inch", price: "2159" },
    {id:6, title: "HUAWEI MateBook D16", imageUrl: pro6, description: "Core i9, 16GB, 1TB SSD,16 inch", price: "4099" },
    {id:7, title: "HUAWEI MateBook D14", imageUrl: pro7, description: "Core i7, 16GB, 1TB, 14 inch", price: "3299" },
    {id:8, title: "LENOVO IdeaPad Flex 5", imageUrl: pro8, description: "Core i5, 8GB, 512GB SSD, 14 Inch", price: "2699" },
    {id:9, title: "ACER, Aspire 5 Notebook", imageUrl: pro9, description: "Core i7, 16GB, 1TB SSD, 14 inch", price: "3049" },
  ];

  
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="cardProduct">
              <h2>Latest Products</h2>
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

     
     
        <div className="all">
        <Link className="theAll" to="/products/all-products">
          Show more
        </Link>
                  
        </div>
    
    </section>
  );
};

export default LatestProducts;
