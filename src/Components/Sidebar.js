import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav className="navigation scroll-bar">
            <div className="container ps-0 pe-0">
                <div className="nav-content">
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        
                        <ul className="mb-1 top-content">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><a href="default.html" className="nav-content-bttn open-font" ><i className="feather-user btn-round-md bg-blue-gradiant me-3"></i><span>Amis</span></a></li>
                            <li><a href="default-badge.html" className="nav-content-bttn open-font" ><i className="feather-users btn-round-md bg-red-gradiant me-3"></i><span>Communautés</span></a></li>
                            <li><a href="default-storie.html" className="nav-content-bttn open-font" ><i className="feather-book btn-round-md bg-gold-gradiant me-3"></i><span>Ressources</span></a></li>
                            <li><a href="default-group.html" className="nav-content-bttn open-font" ><i className="feather-bookmark btn-round-md bg-mini-gradiant me-3"></i><span>Bibliothèques</span></a></li>
                            <li><NavLink  exact="true" to="/user-profil" className="nav-content-bttn open-font"><i className="feather-user btn-round-md bg-primary-gradiant me-3"></i><span>Mon Profil </span></NavLink></li>                        
                        </ul>
                    </div>

                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                        <ul className="mb-3">
                            <li><a href="default-live-stream.html" className="nav-content-bttn open-font"><i className="font-xl text-current feather-youtube me-3"></i><span>Direct</span></a></li>                        
                        </ul>
                    </div>
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span>Compte</div>
                        <ul className="mb-1">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><a href="default-settings.html" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-settings me-3 text-grey-500"></i><span>Paramètres</span></a></li>
                            <li><a href="default-message.html" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-log-out me-3 text-grey-500"></i><span>Se déconnecter</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}
