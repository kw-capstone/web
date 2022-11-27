const ProductDetail = () => {
  const product = {
    image: ["product01.png", "product03.png", "product06.png", "product08.png"],
    name: "product name goes here",
    rating: 4,
    price: "$980.00",
    oldPrice: "$990.00",
    available: true,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`,
    options: {
      sizes: ["X"],
      colors: ["Red"],
    },
    categories: ["Headphones", "Accessories"],
    detail: `Lorem ipsum dolor sit amet, consectetur adipisicing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum.`,
    ratings: [5, 5, 5, 4, 4],
    reviews: [
      {
        name: "John",
        date: "27 DEC 2018, 8:0 PM",
        rating: 4,
        body: `Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua`,
      },
      {
        name: "John",
        date: "27 DEC 2018, 8:0 PM",
        rating: 4,
        body: `Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua`,
      },
      {
        name: "John",
        date: "27 DEC 2018, 8:0 PM",
        rating: 4,
        body: `Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua`,
      },
    ],
  };

  const ratingAvg =
    product.ratings.reduce((a, b) => a + b) / product.ratings.length;

  return (
    <div className="section">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          {/* <!-- Product main img --> */}
          <div className="col-md-5 col-md-push-2">
            <div id="product-main-img">
              {product.image.map((img, id) => (
                <div key={id} className="product-preview">
                  <img src={`./img/${img}`} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/* <!-- /Product main img --> */}

          {/* <!-- Product thumb imgs --> */}
          <div className="col-md-2  col-md-pull-5">
            <div id="product-imgs">
              {product.image.map((img, id) => (
                <div key={id} className="product-preview">
                  <img src={`./img/${img}`} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/* <!-- /Product thumb imgs --> */}

          {/* <!-- Product details --> */}
          <div className="col-md-5">
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <div>
                <div className="product-rating">
                  {Array(product.rating)
                    .fill(0)
                    .map((_, id) => (
                      <i key={id} className="fa fa-star"></i>
                    ))}
                  <i className="fa fa-star-o"></i>
                </div>
                <a className="review-link" href="#">
                  {product.reviews.length} Review(s) | Add your review
                </a>
              </div>
              <div>
                <h3 className="product-price">
                  {product.price}{" "}
                  <del className="product-old-price">{product.oldPrice}</del>
                </h3>
                {product.available && (
                  <span className="product-available">In Stock</span>
                )}
              </div>
              <p>{product.description}</p>

              <div className="product-options">
                <label>
                  Size{" "}
                  <select className="input-select">
                    {product.options.sizes.map((size, id) => (
                      <option key={id} value={id}>
                        {size}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Color{" "}
                  <select className="input-select">
                    {product.options.colors.map((color, id) => (
                      <option key={id} value={id}>
                        {color}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="add-to-cart">
                <div className="qty-label">
                  Qty{" "}
                  <div className="input-number">
                    <input type="number" />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                </div>
                <button className="add-to-cart-btn">
                  <i className="fa fa-shopping-cart"></i> add to cart
                </button>
              </div>

              <ul className="product-btns">
                <li>
                  <a href="#">
                    <i className="fa fa-heart-o"></i> add to wishlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-exchange"></i> add to compare
                  </a>
                </li>
              </ul>

              <ul className="product-links">
                <li>Category:</li>
                {product.categories.map((category, id) => (
                  <li key={id}>
                    <a href="#">{category}</a>
                  </li>
                ))}
              </ul>

              <ul className="product-links">
                <li>Share:</li>
                {[
                  "fa fa-facebook",
                  "fa fa-twitter",
                  "fa fa-google-plus",
                  "fa fa-envelope",
                ].map((icon, id) => {
                  return (
                    <li key={id}>
                      <a href="#">
                        <i className={icon}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* <!-- /Product details --> */}

          {/* <!-- Product tab --> */}
          <div className="col-md-12">
            <div id="product-tab">
              {/* <!-- product tab nav --> */}
              <ul className="tab-nav">
                <li className="active">
                  <a data-toggle="tab" href="#tab1">
                    Description
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab2">
                    Details
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab3">
                    Reviews ({product.reviews.length})
                  </a>
                </li>
              </ul>
              {/* <!-- /product tab nav --> */}

              {/* <!-- product tab content --> */}
              <div className="tab-content">
                {/* <!-- tab1  --> */}
                <div id="tab1" className="tab-pane fade in">
                  <div className="row">
                    <div className="col-md-12">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- /tab1  --> */}

                {/* <!-- tab2  --> */}
                <div id="tab2" className="tab-pane fade in">
                  <div className="row">
                    <div className="col-md-12">
                      <p>{product.detail}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- /tab2  --> */}

                {/* <!-- tab3  --> */}
                <div id="tab3" className="tab-pane fade in active">
                  <div className="row">
                    {/* <!-- Rating --> */}
                    <div className="col-md-3">
                      <div id="rating">
                        <div className="rating-avg">
                          <span>{ratingAvg}</span>
                          <div className="rating-stars">
                            {Array(Math.floor(ratingAvg))
                              .fill(0)
                              .map((_, id) => (
                                <i key={id} className="fa fa-star"></i>
                              ))}
                            {Array(5 - Math.floor(ratingAvg))
                              .fill(0)
                              .map((_, id) => (
                                <i
                                  key={Math.floor(ratingAvg) + id}
                                  className="fa fa-star-o"
                                ></i>
                              ))}
                          </div>
                        </div>
                        <ul className="rating">
                          {[5, 4, 3, 2, 1].map((ratingNum, id) => {
                            const ratingTotal = product.ratings.filter(
                              (rating) => rating === ratingNum
                            ).length;
                            const ratingProgress = `${
                              (100 * ratingTotal) / ratingNum
                            }%`;
                            return (
                              <li key={id}>
                                <div className="rating-stars">
                                  {Array(ratingNum)
                                    .fill(0)
                                    .map((_, id) => (
                                      <i key={id} className="fa fa-star"></i>
                                    ))}
                                  {Array(5 - ratingNum)
                                    .fill(0)
                                    .map((_, id) => (
                                      <i
                                        key={5 - id}
                                        className="fa fa-star-o"
                                      ></i>
                                    ))}
                                </div>
                                <div className="rating-progress">
                                  <div style={{ width: ratingProgress }}></div>
                                </div>
                                <span className="sum">{ratingTotal}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* <!-- /Rating --> */}

                    {/* <!-- Reviews --> */}
                    <div className="col-md-6">
                      <div id="reviews">
                        <ul className="reviews">
                          {product.reviews.map((review, id) => (
                            <li key={id}>
                              <div className="review-heading">
                                <h5 className="name">{review.name}</h5>
                                <p className="date">{review.date}</p>
                                <div className="review-rating">
                                  {Array(review.rating)
                                    .fill(0)
                                    .map((_, id) => (
                                      <i key={id} className="fa fa-star"></i>
                                    ))}
                                  {Array(5 - review.rating)
                                    .fill(0)
                                    .map((_, id) => (
                                      <i
                                        key={review.rating + id}
                                        className="fa fa-star-o empty"
                                      ></i>
                                    ))}
                                </div>
                              </div>
                              <div className="review-body">
                                <p>{review.body}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <ul className="reviews-pagination">
                          <li className="active">1</li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">4</a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- /Reviews --> */}

                    {/* <!-- Review Form --> */}
                    <div className="col-md-3">
                      <div id="review-form">
                        <form className="review-form">
                          <input
                            className="input"
                            type="text"
                            placeholder="Your Name"
                          />
                          <input
                            className="input"
                            type="email"
                            placeholder="Your Email"
                          />
                          <textarea
                            className="input"
                            placeholder="Your Review"
                          ></textarea>
                          <div className="input-rating">
                            <span>Your Rating: </span>
                            <div className="stars">
                              <input
                                id="star5"
                                name="rating"
                                value="5"
                                type="radio"
                              />
                              <label html-for="star5"></label>
                              <input
                                id="star4"
                                name="rating"
                                value="4"
                                type="radio"
                              />
                              <label html-for="star4"></label>
                              <input
                                id="star3"
                                name="rating"
                                value="3"
                                type="radio"
                              />
                              <label html-for="star3"></label>
                              <input
                                id="star2"
                                name="rating"
                                value="2"
                                type="radio"
                              />
                              <label html-for="star2"></label>
                              <input
                                id="star1"
                                name="rating"
                                value="1"
                                type="radio"
                              />
                              <label html-for="star1"></label>
                            </div>
                          </div>
                          <button className="primary-btn">Submit</button>
                        </form>
                      </div>
                    </div>
                    {/* <!-- /Review Form --> */}
                  </div>
                </div>
                {/* <!-- /tab3  --> */}
              </div>
              {/* <!-- /product tab content  --> */}
            </div>
          </div>
          {/* <!-- /product tab --> */}
        </div>
        {/* <!-- /row --> */}
      </div>
      {/* <!-- /container --> */}
    </div>
  );
};

const RelatedProduct = () => {
  const products = [
    {
      id: 0,
      isNew: false,
      isSale: true,
      productImg: "./img/product01.png",
      productName: "product name goes here",
      productCatecory: "Category",
      productPrice: "$980.00",
      productOldPrice: "$990.00",
      productRating: 0,
    },
    {
      id: 1,
      isNew: true,
      isSale: false,
      productImg: "./img/product02.png",
      productName: "product name goes here",
      productCatecory: "Category",
      productPrice: "$980.00",
      productOldPrice: "$990.00",
      productRating: 5,
    },
    {
      id: 2,
      isNew: false,
      isSale: false,
      productImg: "./img/product03.png",
      productName: "product name goes here",
      productCatecory: "Category",
      productPrice: "$980.00",
      productOldPrice: "$990.00",
      productRating: 4,
    },
    {
      id: 3,
      isNew: false,
      isSale: false,
      productImg: "./img/product04.png",
      productName: "product name goes here",
      productCatecory: "Category",
      productPrice: "$980.00",
      productOldPrice: "$990.00",
      productRating: 0,
    },
  ];

  return (
    <div className="section">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h3 className="title">Related Products</h3>
            </div>
          </div>

          {products.map((product) => {
            return (
              <div key={product.id} className="col-md-3 col-xs-6">
                <div className="product">
                  <div className="product-img">
                    <img src={product.productImg} alt="" />
                    {
                      <div className="product-label">
                        {product.isSale && <span className="sale">-30%</span>}
                        {product.isNew && <span className="new">NEW</span>}
                      </div>
                    }
                  </div>
                  <div className="product-body">
                    <p className="product-category">
                      {product.productCatecory}
                    </p>
                    <h3 className="product-name">
                      <a href="#">{product.productName}</a>
                    </h3>
                    <h4 className="product-price">
                      {product.productPrice}{" "}
                      <del className="product-old-price">
                        {product.productOldPrice}
                      </del>
                    </h4>
                    <div className="product-rating">
                      {Array(product.productRating)
                        .fill(0)
                        .map((_, id) => (
                          <i key={id} className="fa fa-star"></i>
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
              </div>
            );
          })}
        </div>
        {/* <!-- /row --> */}
      </div>
      {/* <!-- /container --> */}
    </div>
  );
};

export const Product = () => {
  return (
    <>
      <ProductDetail />
      <RelatedProduct />
    </>
  );
};
