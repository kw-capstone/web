import { useEffect, useState } from "react";
import $ from "jquery";
import "slick-carousel";
import { chunkArr, products } from "./products.constant";
import { Link } from "react-router-dom";

export const TopSellingSmall = () => {
  const [topProducts, setTopProducts] = useState(() => chunkArr(products, 3));

  useEffect(() => {
    $(".products-widget-slick").each(function () {
      var $this = $(this),
        $nav = $this.attr("data-nav");

      $this.not(".slick-initialized").slick({
        infinite: true,
        autoplay: true,
        speed: 300,
        dots: false,
        arrows: true,
        appendArrows: $nav ? $nav : false,
      });
    });
  });

  return (
    <div className="section">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          {[3, 4, 5].map((num, id) => (
            <div key={id} className="col-md-4 col-xs-6">
              <div className="section-title">
                <h4 className="title">Top selling</h4>
                <div className="section-nav">
                  <div
                    id={`slick-nav-${num}`}
                    className="products-slick-nav"
                  ></div>
                </div>
              </div>

              <div
                className="products-widget-slick"
                data-nav={`#slick-nav-${num}`}
              >
                {topProducts.map((arr, id) => (
                  <div key={id}>
                    {arr.map((product) => (
                      <div key={product.id} className="product-widget">
                        <div className="product-img">
                          <img src={`./img/${product.img}`} alt="" />
                        </div>
                        <div className="product-body">
                          <p className="product-category">{product.category}</p>
                          <h3 className="product-name">
                            <Link to={"/product"}>{product.name}</Link>
                          </h3>
                          <h4 className="product-price">
                            {product.price}{" "}
                            <del className="product-old-price">
                              {product.oldPrice}
                            </del>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* [ ]: 이게 왜 필요한지 알아야함 */}
          {/* <div className="clearfix visible-sm visible-xs"></div> */}
        </div>
        {/* <!-- /row --> */}
      </div>
      {/* <!-- /container --> */}
    </div>
  );
};
