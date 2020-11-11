import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase4_Rec_PC_Hero_1X_ENGLISH._CB416347901_.jpg"
        alt=""
        className="home-image"
      />
      <div className="home-row">
        <Product
          id={1}
          title="OPPO A52"
          image="https://m.media-amazon.com/images/I/414zcXNv6gL.__AC_SY200_.jpg"
          price={13990}
          rating={3}
        />
        <Product
          id={2}
          title="Redmi 9 (Carbon Black, 4GB RAM, 64GB Storage) | 3 Months No Cost EMI on BFL"
          image="https://m.media-amazon.com/images/I/71uZrDPrsRL._AC_UY218_.jpg"
          price={8999}
          rating={4}
        />
      </div>
      <div className="home-row">
        <Product
          id={3}
          title="Samsung Galaxy M31 Prime Edition "
          image="https://m.media-amazon.com/images/I/71zb0UaK0PL._AC_UY218_.jpg"
          price={16499}
          rating={4}
        />
        <Product
          id={4}
          title="Nokia 2.2 2/16 Black"
          image="https://m.media-amazon.com/images/I/21rLrxtx7mL._AC_UY218_.jpg"
          price={8330}
          rating={3}
        />
        <Product
          id={5}
          title="Nokia 105 (Black)"
          image="https://m.media-amazon.com/images/I/51wrcikRDcL._AC_UY218_.jpg"
          price={1249}
          rating={3}
        />
      </div>
      <div className="home-row">
        <Product
          id={6}
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
          price={(1, 53, 990)}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
