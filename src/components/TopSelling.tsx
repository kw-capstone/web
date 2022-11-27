import { useEffect, useState } from "react";
import $ from "jquery";
import "slick-carousel";
import { products } from "./products.constant";

export const TopSelling = () => {
  const [topSellingProducts, setTopSellingProducts] = useState(() => {
    return products.filter((product) => product.isTopSelling);
  });

  useEffect(() => {
    $(".products-slick").each(function () {
      var $this = $(this),
        $nav = $this.attr("data-nav");

      $this.not(".slick-initialized").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        appendArrows: $nav ? $nav : false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  });

  return (
    <div className="section">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          {/* <!-- section title --> */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">Top selling</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li className="active">
                    <a data-toggle="tab" href="#tab2">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- /section title --> */}

          {/* <!-- Products tab & slick --> */}
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                {/* <!-- tab --> */}
                <div id="tab2" className="tab-pane fade in active">
                  <div className="products-slick" data-nav="#slick-nav-2">
                    {topSellingProducts.map((product) => (
                      <div key={product.id} className="product">
                        <div className="product-img">
                          <img src={`./img/${product.img}`} alt="" />
                          <div className="product-label">
                            {product.isSale && (
                              <span className="sale">-30%</span>
                            )}
                            {product.isNew && <span className="new">NEW</span>}
                          </div>
                        </div>
                        <div className="product-body">
                          <p className="product-category">{product.category}</p>
                          <h3 className="product-name">
                            <a href="#">{product.name}</a>
                          </h3>
                          <h4 className="product-price">
                            {product.price}{" "}
                            <del className="product-old-price">
                              {product.oldPrice}
                            </del>
                          </h4>
                          <div className="product-rating">
                            {Array(product.rating)
                              .fill(0)
                              .map((_, id) => (
                                <i key={id} className="fa fa-star"></i>
                              ))}
                            {Array(5 - product.rating)
                              .fill(0)
                              .map((_, id) => (
                                <i
                                  key={product.rating + id}
                                  className="fa fa-star-o"
                                ></i>
                              ))}
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <i className="fa fa-heart-o"></i>
                              <span className="tooltipp">add to wishlist</span>
                            </button>
                            <button className="add-to-compare">
                              <i className="fa fa-exchange"></i>
                              <span className="tooltipp">add to compare</span>
                            </button>
                            <button className="quick-view">
                              <i className="fa fa-eye"></i>
                              <span className="tooltipp">quick view</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button className="add-to-cart-btn">
                            <i className="fa fa-shopping-cart"></i> add to cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="slick-nav-2" className="products-slick-nav"></div>
                </div>
                {/* <!-- /tab --> */}
              </div>
            </div>
          </div>
          {/* <!-- /Products tab & slick --> */}
        </div>
        {/* <!-- /row --> */}
      </div>
      {/* <!-- /container --> */}
    </div>
  );
};
