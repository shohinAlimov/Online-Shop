import axios from "axios";
import { useState, useEffect } from "react";

/* UI */
import Intro from "../ui/Intro";
import ProductCard from "../ui/ProductCard";

/* Types */
import { ProductCardProps } from "../types/ProductCardTypes";
import Loader from "../ui/Loader";

function TodayTop() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=4")
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="today-top">
        <div className="container">

          <Intro
            title={"Today's"}
            heading={"Flash Sales"}
            showCountdown={true}
            showArrows={true}
          />

          <ul className="today-top__list">
            {products.map(product => (
              <li className="today-top__item" key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                  rating={product.rating}
                  stock={product.stock}
                  thumbnail={product.thumbnail}
                />
              </li>

            ))}
          </ul>

        </div>
      </section>
    </>
  )
}

export default TodayTop;