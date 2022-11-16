import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";

export const TopSellingSmall = () => {
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
          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              <div className="section-nav">
                <div id="slick-nav-3" className="products-slick-nav"></div>
              </div>
            </div>

            <div className="products-widget-slick" data-nav="#slick-nav-3">
              <div>
                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product07.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product08.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product09.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- product widget --> */}
              </div>

              <div>
                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product01.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product02.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product03.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- product widget --> */}
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              <div className="section-nav">
                <div id="slick-nav-4" className="products-slick-nav"></div>
              </div>
            </div>

            <div className="products-widget-slick" data-nav="#slick-nav-4">
              <div>
                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product04.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product05.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product06.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- product widget --> */}
              </div>

              <div>
                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product07.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product08.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product09.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- product widget --> */}
              </div>
            </div>
          </div>

          <div className="clearfix visible-sm visible-xs"></div>

          <div className="col-md-4 col-xs-6">
            <div className="section-title">
              <h4 className="title">Top selling</h4>
              <div className="section-nav">
                <div id="slick-nav-5" className="products-slick-nav"></div>
              </div>
            </div>

            <div className="products-widget-slick" data-nav="#slick-nav-5">
              <div>
                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product01.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product02.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product03.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- product widget --> */}
              </div>

              <div>
                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product04.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product05.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- /product widget --> */}

                {/* <!-- product widget --> */}
                <div className="product-widget">
                  <div className="product-img">
                    <img src="./img/product06.png" alt="" />
                  </div>
                  <div className="product-body">
                    <p className="product-category">Category</p>
                    <h3 className="product-name">
                      <a href="#">product name goes here</a>
                    </h3>
                    <h4 className="product-price">
                      $980.00 <del className="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                {/* <!-- product widget --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /row --> */}
      </div>
      {/* <!-- /container --> */}
    </div>
  );
};
