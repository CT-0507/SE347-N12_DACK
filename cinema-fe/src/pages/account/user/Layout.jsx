import React from "react";
import "./user.scss";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState, useRef, memo } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { useSignUpMutation } from "../authApiSlice";
import { Outlet } from "react-router-dom";

const Layout = memo(() => {
    return (
        <div className="layout-container">
            <div className="col-left">
                <div className="title">TÀI KHOẢN CGV</div>
                <Nav defaultActiveKey="#" className="flex-column">
                    <Nav.Link as={Link} to="/user">
                        THÔNG TIN CHUNG
                    </Nav.Link>
                    <Nav.Link as={Link} to="edit">
                        CHI TIẾT TÀI KHOẢN
                    </Nav.Link>
                    <Nav.Link as={Link} to="card">
                        THẺ THÀNH VIÊN
                    </Nav.Link>
                    <Nav.Link as={Link} to="point">
                        ĐIỂM THƯỞNG
                    </Nav.Link>
                    <Nav.Link as={Link} to="gift">
                        THẺ QUÀ TẶNG
                    </Nav.Link>
                    <Nav.Link as={Link} to="voucher">
                        VOUCHER
                    </Nav.Link>
                    <Nav.Link as={Link} to="coupon">
                        COUPON
                    </Nav.Link>
                    <Nav.Link eventKey="link-6">LỊCH SỬ GIAO DỊCH</Nav.Link>
                </Nav>
            </div>
            <div className="col-right">
                <div className="heading">TÀI KHOẢN CGV</div>
                <div className="main">
                    <Outlet />
                </div>
            </div>
        </div>
    );
});

export default Layout;
