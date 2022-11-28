import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { CustomMenu, CustomToggle } from "./Dropdown";

const TopHeader = () => {
  return (
    <div id="top-header">
      <div className="container">
        <ul className="header-links pull-left">
          <li>
            <a href="#">
              <i className="fa fa-phone"></i> +021-95-51-84
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-envelope-o"></i> email@email.com
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker"></i> 1734 Stonecoal Road
            </a>
          </li>
        </ul>
        <ul className="header-links pull-right">
          <li>
            <a href="#">
              <i className="fa fa-dollar"></i> USD
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-user-o"></i> My Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div id="header">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          {/* <!-- LOGO --> */}
          <div className="col-md-3">
            <div className="header-logo">
              <Link to={"/"} className="logo">
                <img src="./img/logo.png" alt="" />
              </Link>
            </div>
          </div>
          {/* <!-- /LOGO --> */}

          {/* <!-- SEARCH BAR --> */}
          <div className="col-md-6">
            <div className="header-search">
              <form>
                <select className="input-select">
                  <option value="0">All Categories</option>
                  <option value="1">Category 01</option>
                  <option value="1">Category 02</option>
                </select>
                <input className="input" placeholder="Search here" />
                <button className="search-btn">Search</button>
              </form>
            </div>
          </div>
          {/* <!-- /SEARCH BAR --> */}

          {/* <!-- ACCOUNT --> */}
          <div className="col-md-3 clearfix">
            <div className="header-ctn">
              {/* <!-- Wishlist --> */}
              <div>
                <a href="#">
                  <i className="fa fa-heart-o"></i>
                  <span>Your Wishlist</span>
                  <div className="qty">2</div>
                </a>
              </div>
              {/* <!-- /Wishlist --> */}

              {/* <!-- Cart --> */}
              <Dropdown id="dropdown-custom-1" componentClass={"div"}>
                <CustomToggle bsRole="toggle" />
                <CustomMenu bsRole="menu" />
              </Dropdown>

              {/* <!-- /Cart --> */}

              {/* <!-- Menu Toogle --> */}
              <div className="menu-toggle">
                <a href="#">
                  <i className="fa fa-bars"></i>
                  <span>Menu</span>
                </a>
              </div>
              {/* <!-- /Menu Toogle --> */}
            </div>
          </div>
          {/* <!-- /ACCOUNT --> */}
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- container --> */}
    </div>
  );
};

export const AppHeader = () => {
  return (
    <header>
      <TopHeader />
      <MainHeader />
    </header>
  );
};
