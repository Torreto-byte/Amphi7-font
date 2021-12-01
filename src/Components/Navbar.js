import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo_amphi7.png';




export default class Navbar extends Component {
  render() {
    return (
      	<div className="nav-header bg-white shadow-xs border-0">
			<div className="nav-top">
				<NavLink exact="true" to="/home"><img src={logo} alt="user" className="feather-zap w50 text-success display1-size me-2 ms-0"/><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Amphi7</span> </NavLink>
				<a href="/#" className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
				<a href="/default-video.html" className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
				<a href="/#" className="me-2 menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></a>
				<button className="nav-menu me-0 ms-2"></button>
			</div>

			<div style={{ marginLeft: 'auto' }}>
				<NavLink exact="true" to="/home" title="Accueil" className="p-2 text-center ms-3 menu-icon center-menu-icon"><i className="feather-home font-lg alert-primary btn-round-lg theme-dark-bg text-current "></i></NavLink>
				<a href="default-storie.html" title="Ressources" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-book font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></a>
				<a href="default-video.html" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></a>
				<a href="default-group.html" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></a>
				<a href="shop-2.html" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></a>
			</div>

            <a href="#" className="p-2 text-center ms-auto menu-icon" id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false"><span className="dot-count bg-warning"></span><i className="feather-bell font-xl text-current"></i></a>
			<div className="dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg" aria-labelledby="dropdownMenu3">
                
                <h4 className="fw-700 font-xss mb-4">Notification</h4>
                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img src="assets/images/user-8.png" alt="user" className="w40 position-absolute left-0"/>
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Hendrix Stamp <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">There are many variations of pass..</h6>
                </div>
                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img src="assets/images/user-4.png" alt="user" className="w40 position-absolute left-0"/>
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Goria Coast <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                </div>

                <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                    <img src="assets/images/user-7.png" alt="user" className="w40 position-absolute left-0"/>
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Surfiya Zakir <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                </div>
                <div className="card bg-transparent-card w-100 border-0 ps-5">
                    <img src="assets/images/user-6.png" alt="user" className="w40 position-absolute left-0"/>
                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Victor Exrixon <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">Mobile Apps UI Designer is require..</h6>
                </div>
            </div>

            <a href="#" className="p-2 text-center ms-3 menu-icon chat-active-btn"><span className="dot-count bg-warning"></span><i className="feather-message-square font-xl text-current"></i></a>
            <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon menu-icon cursor-pointer">
                <i className="feather-settings animation-spin d-inline-block font-xl text-current"></i>
                <div className="dropdown-menu-settings switchcolor-wrap">
                    <h4 className="fw-700 font-sm mb-4">Settings</h4>
                    <h6 className="font-xssss text-grey-500 fw-700 mb-3 d-block">Choose Color Theme</h6>
                    <ul>
                        <li>
                            <label className="item-radio item-content">
                                <input type="radio" name="color-radio"/><i className="ti-check"></i>
                                <span className="circle-color bg-red" style={{ backgroundColor: '#ff3b30' }}></span>
                            </label>
                        </li>
                        <li>
                            <label className="item-radio item-content">
                                <input type="radio" name="color-radio" /><i className="ti-check"></i>
                                <span className="circle-color bg-green" style={{ backgroundColor: '#4cd964' }}></span>
                            </label>
                        </li>
                        <li>
                            <label className="item-radio item-content">
                                <input type="radio" name="color-radio" /><i className="ti-check"></i>
                                <span className="circle-color bg-blue" style={{ backgroundColor: '#132977' }}></span>
                            </label>
                        </li>
                        <li>
                            <label className="item-radio item-content">
                                <input type="radio" name="color-radio" /><i className="ti-check"></i>
                                <span className="circle-color bg-pink" style={{ backgroundColor: '#ff2d55' }}></span>
                            </label>
                        </li>
                        <li>
                            <label className="item-radio item-content">
                                <input type="radio" name="color-radio" /><i className="ti-check"></i>
                                <span className="circle-color bg-yellow" style={{ backgroundColor: '#ffcc00' }}></span>
                            </label>
                        </li>
                        <li>
                            <label className="item-radio item-content">
                                <input type="radio" name="color-radio" /><i className="ti-check"></i>
                                <span className="circle-color bg-orange" style={{backgroundColor: '#ff9500'}}></span>
                            </label>
                        </li>
                        <li>
                            <label className="item-radio item-content">
                                <input type="radio" name="color-radio" /><i className="ti-check"></i>
                                <span className="circle-color bg-gray" style={{ backgroundColor: '#8e8e93' }}></span>
                            </label>
                        </li>
                    </ul>
                    
                    <div className="card bg-transparent-card border-0 d-block mt-3">
                        <h4 className="d-inline font-xssss mont-font fw-700">Header Background</h4>
                        <div className="d-inline float-right mt-1">
                            <label className="toggle toggle-menu-color"><input type="checkbox"/><span className="toggle-icon"></span></label>
                        </div>
                    </div>
                    <div className="card bg-transparent-card border-0 d-block mt-3">
                        <h4 className="d-inline font-xssss mont-font fw-700">Menu Position</h4>
                        <div className="d-inline float-right mt-1">
                            <label className="toggle toggle-menu"><input type="checkbox"/><span className="toggle-icon"></span></label>
                        </div>
                    </div>
                    <div className="card bg-transparent-card border-0 d-block mt-3">
                        <h4 className="d-inline font-xssss mont-font fw-700">Dark Mode</h4>
                        <div className="d-inline float-right mt-1">
                            <label className="toggle toggle-dark"><input type="checkbox"/><span className="toggle-icon"></span></label>
                        </div>
                    </div>
                    
                </div>
            </div>

            <a href="#" className="ms-3" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"><img src="./assets/images/user-8.png" alt="user" className="w50 mt--1"/></a>
            <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu2">
                <div className="card-body p-1 d-flex">
                    <i className="feather-user text-grey-500 me-3 font-lg"></i>
                    <NavLink exact="true" to="/user-profil"><h4 className="fw-600 text-grey-900 font-xssssss mt-0 me-4">Anthony Daugloi <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-600">Voir mon profil</span></h4></NavLink>
                </div>
                <div className="card-body p-1 d-flex mt-2">
                    <i className="feather-settings text-grey-500 me-3 font-lg"></i>
                    <a href="#"><h4 className="fw-600 text-grey-600 font-xsss mt-1 me-4">Paramètres et confidentialité</h4> </a>
                </div>
                <div className="card-body p-1 d-flex mt-3">
                    <i className="feather-log-out text-grey-500 me-3 font-lg"></i>
                    <a href="#"> <h4 className="fw-600 mb-0 text-grey-600 font-xsss mt-1 me-4">Se déconnecter </h4> </a>
                </div>
            </div>
			
      	</div>
    );
  }
}
