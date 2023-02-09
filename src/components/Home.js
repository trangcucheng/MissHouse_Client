import { NavLink } from "react-router-dom";
import first from "../static/images/slider_1_image.jpg";
import second from "../static/images/slider_2_image.jpg";
import third from "../static/images/slider_4_image.jpg";
import fourth from "../static/images/slider_5_image.jpg";
import blog1 from "../static/images/blog_1.jpg";
import blog2 from "../static/images/blog_2.jpg";
import blog3 from "../static/images/blog_3.jpg";
import React, { useState, useEffect } from "react";
const fakeData = [
  {
      "id": "1",
      "name": "Áo Croptop",
      "price": "500",
      "discount": "10",
      "brand": "IVY moda",
      "image": "aocroptop-1.jpg",
      "view": "2000"
  },
  {
      "id": "2",
      "name": "Áo Khoác Len",
      "price": "400",
      "discount": "15",
      "brand": "IVY moda",
      "image": "aokhoaclen-1.jpg",
      "view": "1500"
  },
  {
      "id": "3",
      "name": "Áo Phao",
      "price": "250",
      "discount": "5",
      "brand": "Zara",
      "image": "aophao-1.jpg",
      "view": "300"
  },
  {
      "id": "4",
      "name": "Áo Sơ Mi",
      "price": "200",
      "discount": "10",
      "brand": "Zara",
      "image": "aosomi-1.jpg",
      "view": "1000"
  },
  {
      "id": "5",
      "name": "Áo Thun",
      "price": "190",
      "discount": "20",
      "brand": "H&M",
      "image": "aothun-1.jpg",
      "view": "500"
  },
  {
      "id": "6",
      "name": "Áo Vest",
      "price": "280",
      "discount": "15",
      "brand": "H&M",
      "image": "aovest-1.jpg",
      "view": "1450"
  },
  {
      "id": "7",
      "name": "Chân Váy",
      "price": "300",
      "discount": "5",
      "brand": "Hermès",
      "image": "chanvay-1.jpg",
      "view": "850"
  },
  {
      "id": "8",
      "name": "Đầm",
      "price": "600",
      "discount": "10",
      "brand": "Hermès",
      "image": "dam-1.jpg",
      "view": "900"
  },
  {
      "id": "9",
      "name": "Quần Dài",
      "price": "200",
      "discount": "5",
      "brand": "Burberry",
      "image": "quandai-1.jpg",
      "view": "1780"
  },
  {
      "id": "10",
      "name": "Quần Jeans",
      "price": "350",
      "discount": "10",
      "brand": "Burberry",
      "image": "quanjean-1.jpg",
      "view": "1460"
  },
  {
      "id": "11",
      "name": "Quần Sooc",
      "price": "450",
      "discount": "10",
      "brand": "H&M",
      "image": "quansooc-1.jpg",
      "view": "1220"
  },
  {
      "id": "12",
      "name": "Giày Cao Gót",
      "price": "520",
      "discount": "20",
      "brand": "Gucci",
      "image": "giaycaogot-1.jpg",
      "view": "870"
  }
]
const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState({});
  const [active, setActive] = useState(true);

  var rows = new Array(total).fill(0).map((zero, index) => (
    <li
      className={page === index + 1 ? "page-item active" : "page-item"}
      key={index}
    >
      <button
        className="page-link"
        style={{ borderRadius: 50 }}
        onClick={() => onChangePage(index + 1)}
      >
        {index + 1}
      </button>
    </li>
  ));

  useEffect(() => {
   
    props.changeHeaderHandler(1);
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      {/* Carousel */}
      <div id="slides" className="carousel slide  mb-5" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to={0} className="active" />
          <li data-target="#slides" data-slide-to={1} />
          <li data-target="#slides" data-slide-to={2} />
          <li data-target="#slides" data-slide-to={3} />
        </ul>
        <div className="carousel-inner mini-card">
          <div className="carousel-item active">
            <img src={second} alt="" style={{width: "100%"}}/>
          </div>
          <div className="carousel-item">
            <img src={first} alt="" style={{width: "100%"}} />
          </div>
          <div className="carousel-item">
            <img src={third} alt="" style={{width: "100%"}}/>
          </div>
          <div className="carousel-item">
            <img src={fourth} alt="" style={{width: "100%"}}/>
          </div>
        </div>
      </div>
      <div className="container-fluid padding">
      <h2 className="title text-primary text-center mb-5" >Mới nhất</h2>
      </div>
      <div className="col-11 container-fluid card">
        <div className="row padding d-flex">
          {fakeData &&
            fakeData.map((item, index) => (
              <div className="col-lg-3 col-md-4 mb-3 col-sm-6 col-xs-12" key={index}>
                <div className="card h-100 mini-pro" style={{textAlign: "center"}}>
                  <div className="d-flex justify-content-between position-absolute w-100">
                    <div className="label-new">
                      <span className="text-white bg-success small d-flex align-items-center px-2 py-1">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span className="ml-1">New</span>
                      </span>
                    </div>
                  </div>
                  <NavLink to={``}>
                    <img
                      src={require(`../static/images/${item.image}`)}
                      style={{ objectFit: "cover", width: "100%", height: "auto" }}
                      alt="Product"
                      className="mini-card"
                    />
                  </NavLink>
                  <div className="card-body px-2 pb-2 pt-1">
                    <div className="d-flex justify-content-between">
                      <div style={{margin: "auto"}}>
                        <p className="h4 text-primary">
                          {(
                            (item.price * (100 - item.discount)) /
                            100
                          ).toLocaleString()}{" "}
                          VNĐ
                        </p>
                      </div>
                    </div>
                    <p className="text-warning d-flex align-items-center mb-2" style={{textAlign: "center", justifyContent: "center"}}>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                    <p className="mb-0">
                      <strong>
                        <NavLink
                          to={`/product-detail/${item.id}`}
                          className=" "
                        >
                          {item.name} {item.brand}
                        </NavLink>
                      </strong>
                    </p>
                    {/* <p className="mb-1">
                      <small>
                        <NavLink to="#" className="text-secondary ">
                          {item.brand}
                        </NavLink>
                      </small>
                    </p> */}
                    <div className="d-flex mb-3 justify-content-between">
                      <div style={{margin: "auto"}}>
                        <p className="mb-0 small text-secondary">
                          <b>Yêu thích: </b> {item.view} lượt
                        </p>
                        <p className="mb-0 small text-secondary">
                          <b>Giá gốc: {item.price.toLocaleString()} đ</b>
                        </p>
                        <p className="mb-0 small text-danger">
                          <span className="font-weight-bold">Tiết kiệm: </span>{" "}
                          {(
                            (item.price * item.discount) /
                            100
                          ).toLocaleString()}{" "}
                          đ ({item.discount}%)
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="col px-0 ">
                        <NavLink
                          to={``}
                          exact
                          className="btn btn-outline-primary btn-block addCart"
                          style={{backgroundColor: "#fff", color: "#007bff"}}
                        >
                          Thêm vào giỏ
                          <i
                          style={{paddingLeft: "2px"}}
                            className="fa fa-shopping-basket"
                            aria-hidden="true"
                          ></i>
                        </NavLink>
                      </div>
                      <div className="ml-2">
                        <NavLink
                          to="#"
                          className="btn btn-success"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Yêu thích"
                        >
                          <i className="fa fa-heart" aria-hidden="true"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* <nav aria-label="Page navigation">
        <ul className="pagination offset-5 mt-3">
          <li className={page === 1 ? "page-item disabled" : "page-item"}>
            <button
              className="page-link"
              style={{ borderRadius: 50 }}
              onClick={() => onChangePage(1)}
            >
              {`<<`}
            </button>
          </li>
          {rows}
          <li className={page === total ? "page-item disabled" : "page-item"}>
            <button
              className="page-link"
              style={{ borderRadius: 50 }}
              onClick={() => onChangePage(total)}
            >
              {`>>`}
            </button>
          </li>
        </ul>
      </nav> */}
      {/* <div className="container-fluid padding mt-5">
        <div className="row welcome">
          <div className="text-danger">
            <h4 className="title">Xem nhiều nhất</h4>
          </div>
        </div>
      </div>
      <div className="container padding">
        <div className="row padding d-flex">
        {products &&
            products.map((item, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card h-100">
                  <div className="d-flex justify-content-between position-absolute w-100">
                    <div className="label-new">
                      <span className="text-white bg-success small d-flex align-items-center px-2 py-1">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span className="ml-1">New</span>
                      </span>
                    </div>
                    <div className="label-sale">
                      <span className="text-white bg-primary small d-flex align-items-center px-2 py-1">
                        <i className="fa fa-tag" aria-hidden="true"></i>
                        <span className="ml-1">Sale</span>
                      </span>
                    </div>
                  </div>
                  <NavLink to={`/product-detail/${item.id}`}>
                    <img
                      src={require(`../static/images/${item.imageLink}`)}
                      style={{ width: 150, height: 150 }}
                      alt="Product"
                    />
                  </NavLink>
                  <div className="card-body px-2 pb-2 pt-1">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="h4 text-primary">
                          {item.price.toLocaleString()} Đ
                        </p>
                      </div>
                    </div>
                    <p className="text-warning d-flex align-items-center mb-2">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                    <p className="mb-0">
                      <strong>
                        <NavLink to={`/product-detail/${item.id}`} className="text-secondary">
                          {item.name}
                        </NavLink>
                      </strong>
                    </p>
                    <p className="mb-1">
                      <small>
                        <NavLink to="#" className="text-secondary">
                          {item.brand}
                        </NavLink>
                      </small>
                    </p>
                    <div className="d-flex mb-3 justify-content-between">
                      <div>
                        <p className="mb-0 small">
                          <b>Yêu thích: </b> {item.view} lượt
                        </p>
                        <p className="mb-0 small">
                          <b>Giá gốc: </b> {item.price.toLocaleString()} Đ
                        </p>
                        <p className="mb-0 small text-danger">
                          <span className="font-weight-bold">Tiết kiệm: </span> 0 đ (0%)
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="col px-0">
                        <NavLink
                          to={`/product-detail/${item.id}`}
                          exact
                          className="btn btn-outline-primary btn-block"
                        >
                          Thêm vào giỏ
                          <i
                            className="fa fa-shopping-basket"
                            aria-hidden="true"
                          ></i>
                        </NavLink>
                      </div>
                      <div className="ml-2">
                        <NavLink
                          to="#"
                          className="btn btn-outline-success"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Wishlist"
                        >
                          <i className="fa fa-heart" aria-hidden="true"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div> */}
      <div className="blogs">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="section_title">
						<h2>Xu hướng</h2>
					</div>
				</div>
			</div>
			<div className="row blogs_container" style={{gridGap: '10px', justifyContent: "center"}}>
				<div className="col-lg-3 blog_item_col">
					<div className="blog_item">
						<div className="blog_background" style={{backgroundImage: `url(${blog1})`}}></div>
						<div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
							<h4 className="blog_title">Xu hướng thời trang mùa hè năm nay</h4>
							{/* <span className="blog_meta">by admin | dec 01, 2017</span> */}
							<a className="blog_more" href="#">Đọc thêm</a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 blog_item_col">
					<div className="blog_item">
						<div className="blog_background" style={{backgroundImage: `url(${blog2})`}}></div>
						<div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
							<h4 className="blog_title">Hướng dẫn chọn màu váy cho phù hợp</h4>
							<a className="blog_more" href="#">Đọc thêm</a>
						</div>
					</div>
				</div>
				<div className="col-lg-3 blog_item_col">
					<div className="blog_item">
						<div className="blog_background" style={{backgroundImage: `url(${blog3})`}}></div>
						<div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
							<h4 className="blog_title">Phong cách ăn mặc sang trọng</h4>
							<a className="blog_more" href="#">Đọc thêm</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  );
};

export default Home;
