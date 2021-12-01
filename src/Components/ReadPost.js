import React, { Component } from 'react'

export default class ReadPost extends Component {
    render() {
        return (
            <div>
                <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
                    <div className="card-body p-0 d-flex">
                        <figure className="avatar me-3"><img src="assets/images/user-8.png" alt="" className="shadow-sm rounded-circle w45"/></figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-1">Anthony Daugloi <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">2 min</span></h4>
                        <a href="#" className="ms-auto" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
                        <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu2">
                            <div className="card-body p-0 d-flex">
                                <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span></h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow Group <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                            </div>
                        </div>
                    </div>

                    <div className="card-body p-0 me-lg-5">
                        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus <a href="#" className="fw-600 text-primary ms-2">Voir plus</a></p>
                    </div>
                    <div className="card-body d-block p-0 mb-3">
                        <div className="row ps-2 pe-2">
                            <div className="col-xs-6 col-sm-6 p-1"><a href="assets/images/t-36.jpg" data-lightbox="roadtri"><img src="assets/images/t-21.jpg" className="rounded-3 w-100" alt=""/></a></div>
                            <div className="col-xs-6 col-sm-6 p-1"><a href="assets/images/t-32.jpg" data-lightbox="roadtri"><img src="assets/images/t-22.jpg" className="rounded-3 w-100" alt=""/></a></div>
                        </div>
                        <div className="row ps-2 pe-2">
                            <div className="col-xs-4 col-sm-4 p-1"><a href="assets/images/t-33.jpg" data-lightbox="roadtri"><img src="assets/images/t-23.jpg" className="rounded-3 w-100" alt=""/></a></div>
                            <div className="col-xs-4 col-sm-4 p-1"><a href="assets/images/t-34.jpg" data-lightbox="roadtri"><img src="assets/images/t-24.jpg" className="rounded-3 w-100" alt=""/></a></div>
                            <div className="col-xs-4 col-sm-4 p-1"><a href="assets/images/t-35.jpg" data-lightbox="roadtri" className="position-relative d-block"><img src="assets/images/t-25.jpg" className="rounded-3 w-100" alt=""/><span className="img-count font-sm text-white ls-3 fw-600"><b>+2</b></span></a></div>
                        </div>
                    </div>
                    <div className="card-body d-flex p-0">
                        <a href="#" className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"><i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K J'aime</a>
                        <div className="emoji-wrap">
                            <ul className="emojis list-inline mb-0">
                                <li className="emoji list-inline-item"><i className="em em---1"></i> </li>
                                <li className="emoji list-inline-item"><i className="em em-angry"></i></li>
                                <li className="emoji list-inline-item"><i className="em em-anguished"></i> </li>
                                <li className="emoji list-inline-item"><i className="em em-astonished"></i> </li>
                                <li className="emoji list-inline-item"><i className="em em-blush"></i></li>
                                <li className="emoji list-inline-item"><i className="em em-clap"></i></li>
                                <li className="emoji list-inline-item"><i className="em em-cry"></i></li>
                                <li className="emoji list-inline-item"><i className="em em-full_moon_with_face"></i></li>
                            </ul>
                        </div>
                        <a href="#" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i><span className="d-none-xss">22 Commentaires</span></a>
                        <a href="#" id="dropdownMenu21" data-bs-toggle="dropdown" aria-expanded="false" className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span className="d-none-xs">Partager</span></a>
                        <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu21">
                            <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">Share <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2"></i></h4>
                            <div className="card-body p-0 d-flex">
                                <ul className="d-flex align-items-center justify-content-between mt-2">
                                    <li className="me-1"><a href="#" className="btn-round-lg bg-facebook"><i className="font-xs ti-facebook text-white"></i></a></li>
                                    <li className="me-1"><a href="#" className="btn-round-lg bg-twiiter"><i className="font-xs ti-twitter-alt text-white"></i></a></li>
                                    <li className="me-1"><a href="#" className="btn-round-lg bg-linkedin"><i className="font-xs ti-linkedin text-white"></i></a></li>
                                    <li className="me-1"><a href="#" className="btn-round-lg bg-instagram"><i className="font-xs ti-instagram text-white"></i></a></li>
                                    <li><a href="#" className="btn-round-lg bg-pinterest"><i className="font-xs ti-pinterest text-white"></i></a></li>
                                </ul>
                            </div>
                            <div className="card-body p-0 d-flex">
                                <ul className="d-flex align-items-center justify-content-between mt-2">
                                    <li className="me-1"><a href="#" className="btn-round-lg bg-tumblr"><i className="font-xs ti-tumblr text-white"></i></a></li>
                                    <li className="me-1"><a href="#" className="btn-round-lg bg-youtube"><i className="font-xs ti-youtube text-white"></i></a></li>
                                    <li className="me-1"><a href="#" className="btn-round-lg bg-flicker"><i className="font-xs ti-flickr text-white"></i></a></li>
                                    <li className="me-1"><a href="#" className="btn-round-lg bg-black"><i className="font-xs ti-vimeo-alt text-white"></i></a></li>
                                    <li><a href="#" className="btn-round-lg bg-whatsup"><i className="font-xs feather-phone text-white"></i></a></li>
                                </ul>
                            </div>
                            <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">Copy Link</h4>
                            <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500"></i>
                            <input type="text" className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
