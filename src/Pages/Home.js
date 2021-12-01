import React from 'react';
import Sidebar from '../Components/Sidebar';
import ModalChat from '../Components/ModalChat';
import ChatRight from '../Components/ChatRight';
import Navbar from '../Components/Navbar';
import Stories from '../Components/Stories';
import PreloaderStories from '../Components/PreloaderStories';
import WritePost from '../Components/WritePost';
import ReadPost from '../Components/ReadPost';
import ModalStories from '../Components/ModalStories';
import FriendRequest from '../Components/FriendRequest';
import GroupsSuggest from '../Components/GroupsSuggest';


const Home = () => {
	
		return (
			<div>
				
				<div className="main-wrapper">
				<Navbar/>
				<Sidebar/>
				
				<div className="main-content right-chat-active">
					<div className="middle-sidebar-bottom">
						<div className="middle-sidebar-left">
							<PreloaderStories/>
							<div className="row feed-body">
								<div className="col-xl-8 col-xxl-9 col-lg-8">
									<Stories/>
									<WritePost/>
									<div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
										<div className="owl-carousel category-card owl-theme overflow-hidden nav-none">
											<div className="item">
												<div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
													<div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
														<figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src="assets/images/user-11.png" alt="" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"/></figure>
														<div className="clearfix"></div>
														<h4 className="fw-700 font-xssss mt-3 mb-1">Richard Bowers  </h4>
														<p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
														<a href="#" className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-dark font-xsssss fw-700 ls-lg text-white">SUIVRE</a>
													</div>
												</div>
											</div>
											<div className="item">
												<div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
													<div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
														<figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src="assets/images/user-9.png" alt="" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"/></figure>
														<div className="clearfix"></div>
														<h4 className="fw-700 font-xssss mt-3 mb-1">David Goria </h4>
														<p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
														<a href="#" className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-dark font-xsssss fw-700 ls-lg text-white">SUIVRE</a>
													</div>
												</div>
											</div>
											<div className="item">
												<div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
													<div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
														<figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src="assets/images/user-12.png" alt="" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"/></figure>
														<div className="clearfix"></div>
														<h4 className="fw-700 font-xssss mt-3 mb-1">Vincent Parks  </h4>
														<p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
														<a href="#" className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-dark font-xsssss fw-700 ls-lg text-white">SUIVRE</a>
													</div>
												</div>
											</div>
											<div className="item">
												<div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
													<div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
														<figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src="assets/images/user-8.png" alt="" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"/></figure>
														<div className="clearfix"></div>
														<h4 className="fw-700 font-xssss mt-3 mb-1">Studio Express </h4>
														<p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
														<a href="#" className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-dark font-xsssss fw-700 ls-lg text-white">SUIVRE</a>
													</div>
												</div>
											</div>
											<div className="item">
												<div className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-2 mt-3">
													<div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
														<figure className="avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src="assets/images/user-7.png" alt="" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"/></figure>
														<div className="clearfix"></div>
														<h4 className="fw-700 font-xssss mt-3 mb-1">Aliqa Macale </h4>
														<p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">@macale343</p>
														<a href="#" className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-dark font-xsssss fw-700 ls-lg text-white">SUIVRE</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<ReadPost/>

									<div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
										<div className="snippet mt-2 ms-auto me-auto" data-title=".dot-typing">
											<div className="stage">
												<div className="dot-typing"></div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
									
									<FriendRequest/>

									<GroupsSuggest/>
								</div>
								
								
							</div>
						</div>
					</div>
				</div>
				<ChatRight/>
				</div>
					
				<ModalStories/>

				<ModalChat/>
			</div>
		);
	
}

export default Home;
