import React from 'react'
import '../static/css/style.css'
import des from '../static/images/title-des.jpg'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className="container-fluid padding mt-5 mb-5">
          <div className="row padding">
            <div className="col-lg-6 mx-auto d-block">
              <img src={des} className="img-fluid" alt=''/>
            </div>
          </div>
          <hr className="my-4" />
        </div>       
        <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#79aba8"}}
          >
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row" style={{textAlign: "left"}}>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Giới thiệu
            </h6>
            <p>
              <a href='#'>Về MissHouse</a>
            </p>
            <p>
              <a href='#'>Tuyển dụng</a>
            </p>
            <p>
              <a href='#'>Hệ thống cửa hàng</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Chính sách</h6>
            <p>
              <a href='#'>Chính sách bảo mật</a>
            </p>
            <p>
              <a href='#'>Quy chế hoạt động</a>
            </p>
            <p>
              <a href='#'>Chính sách vận chuyển</a>
            </p>
            <p>
              <a href='#'>Chính sách trả hàng và hoàn tiền</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Liên hệ</h6>
            <p><i className="fas fa-home mr-3"></i> 236 Hoàng Quốc Việt, Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội</p>
            <p><i className="fas fa-envelope mr-3"></i> misshouse@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i>0385013252</p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Theo dõi MissHouse</h6>

            <a
               className="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i className="fab fa-facebook-f"></i
              ></a>

            <a
               className="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i className="fab fa-twitter"></i
              ></a>

            <a
               className="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i className="fab fa-google"></i
              ></a>

            <a
               className="btn btn-primary btn-floating m-1"
               href="#!"
               style={{backgroundColor: "#ac2bac"}}
               role="button"
               ><i className="fab fa-instagram"></i
              ></a> 
          </div>
        </div>
      </section>
    </div>
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      Copyright 2023 © MissHouse

    </div>
  </footer>
    </div>
  )
}

export default Footer