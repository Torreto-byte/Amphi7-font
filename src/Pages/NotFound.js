import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import ChatRight from '../Components/ChatRight';
import ModalChat from '../Components/ModalChat';

class Notfound extends Component {
	render() {
		return (
			<div>
				<div className="main-wrapper">
					<Navbar/>
					<ChatRight/>
					<div className="main-content pt-0 bg-white ps-0 pe-0">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-6 col-md-8 text-center default-page vh-100 align-items-center d-flex">
									<div className="card border-0 text-center d-block p-0">
										<img src="assets/images/bg-43.png" alt="icon" className="w200 mb-4 ms-auto me-auto pt-md-5"/>
										<h1 className="fw-700 text-grey-900 display3-size display4-md-size">Oups! On dirait que tu es perdu.</h1>
										<p className="text-grey-500 font-xsss">La page que vous recherchez n'est pas disponible. Essayez de rechercher à nouveau ou utilisez le bouton Aller à.</p>
										<a href="index-2.html" className="p-3 w175 bg-current text-white d-inline-block text-center fw-600 font-xssss rounded-3 text-uppercase ls-3">Page d'accueil</a>
									</div>
								</div>
							</div>
						</div> 
					</div>
				</div>
				<ModalChat/>
			</div>
		);
	}
}

export default Notfound;
