import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import pro1 from "../img/50.png"
import pro2 from "../img/2.png"
import pro3 from "../img/3.png"
import pro4 from "../img/4.png";
import pro5 from "../img/5.png";
import pro6 from "../img/6.png";
import pro7 from "../img/7.png";
import pro8 from "../img/8.png";
import pro9 from "../img/9.png";
import pro10 from "../img/10.png";
import pro11 from "../img/11.png";
import pro12 from "../img/12.png";
import pro13 from "../img/13.png";
import pro14 from "../img/14.png";
import pro15 from "../img/15.png";
import pro16 from "../img/16.png";
import pro17 from "../img/17.png";
import pro18 from "../img/18.png";
import pro19 from "../img/19.png";
import pro20 from "../img/20.png";
import pro21 from "../img/21.png";
import ProductImages from "./productImages.js";

const AllProducts = () => {
 

  const products = [
    {id:1, title: "APPLE MacBook Air", imageUrl: pro1 , description:"M1, 8GB, 256GB, 13 inch" , price:"3699" },
    {id:2, title: "HUAWEI MateBook D15", imageUrl: pro2 , description:"Core i5, 8GB, 512GB SSD, 15.6 inch" ,price:"1979" },
    {id:3, title: "HP Pavilion Plus", imageUrl: pro3 , description:"Core i5, 16GB, 512GB, 14 inch" , price:"2609"},
    {id:4, title: "LENOVO IdeaPad 1", imageUrl: pro4, description: "Celeron, 4GB, 128GB SSD, 14 inch", price: "849" },
    {id:5, title: "LENOVO IdeaPad Gaming 3", imageUrl: pro5, description: "Ryzen 5, 16GB, 512GB SSD, 15.6 Inch", price: "2159" },
    {id:6, title: "HUAWEI MateBook D16", imageUrl: pro6, description: "Core i9, 16GB, 1TB SSD,16 inch", price: "4099" },
    {id:7, title: "HUAWEI MateBook D14", imageUrl: pro7, description: "Core i7, 16GB, 1TB, 14 inch", price: "3299" },
    {id:8, title: "LENOVO IdeaPad Flex 5", imageUrl: pro8, description: "Core i5, 8GB, 512GB SSD, 14 Inch", price: "2699" },
    {id:9, title: "ACER, Aspire 5 Notebook", imageUrl: pro9, description: "Core i7, 16GB, 1TB SSD, 14 inch", price: "3049" },
    {id:10, title: "APPLE MacBook Pro", imageUrl: pro10, description: " M3, 8GB, 512GB SSD, 14.2 inch", price: "7499" },
    {id:11, title: "APPLE MacBook Air", imageUrl: pro11, description: "Apple M2, Touch ID, 8GB, 256GB SSD, 15.3 inch", price: "5699" },
    {id:12, title: "HUAWEI MateBook X Pro", imageUrl: pro12, description: "Core i7, 16GB , 1TB ", price: "4399" },
    {id:13, title: "LENOVO IdeaPad Pro 5", imageUrl: pro13, description: "Core i7, 16GB, 1TB SSD, 16 inch", price: "5399" },
    {id:14, title: "LENOVO Legion Pro 5 Gaming", imageUrl: pro14, description: "Core i7, 32GB, 1TB SSD, 16 inch", price: "8499" },
    {id:15, title: "LENOVO Yoga S600 14IRH8", imageUrl: pro15, description: "Core i7, 16GB, 512GB, 14 inch", price: "3799" },
    {id:16, title: "ACER Nitro V, Gaming", imageUrl: pro16, description: " Core i5, 8GB, 512GB SSD, 15.6 inch", price: "3249" },
    {id:17, title: "ASUS Vivobook S 14 Flip", imageUrl: pro17, description: "Ryzen 5, 8GB ,256GB, 14.0 Inch Touch", price: "1999" },
    {id:18, title: "HUAWEI MateBook X Pro Premium", imageUrl: pro18, description: "Core i7, 1TB SSD, 14.2 inch, Touch", price: "5399" },
    {id:19, title: "ASUS TUF Gaming A15", imageUrl: pro19, description: " Ryzen 7, 16GB, 512GB SSD, 15.6 Inch", price: "4699" },
    {id:20, title: "HUAWEI MateBook 16s", imageUrl: pro20, description: "Core i9, 16GB, 1TB SSD, 16.0 inch, Touch", price: "5399" },
    {id:21, title: "LENOVO Yoga Slim 7 ProX", imageUrl: pro21, description: " Core I7, 16GB, 512GB SSD, 14.5 inch", price: "5599" }
  ];
 

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="cardProduct1">
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
        <Link className="theAll" to="/">
          go back
        </Link>
     </div>
    </section>
  );
};

export default AllProducts;
