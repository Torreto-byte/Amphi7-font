import React, { Component } from 'react'

export default class ProfilSidebar extends Component {
    render() {
        return (
            <div>
                <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                        <h4 className="fw-700 mb-3 font-xsss text-grey-900">About</h4>
                        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                    </div>
                    <div className="card-body border-top-xs d-flex">
                        <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-0">Private <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">What's up, how are you?</span></h4>
                    </div>

                    <div className="card-body d-flex pt-0">
                        <i className="feather-eye text-grey-500 me-3 font-lg"></i>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-0">Visble <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">Anyone can find you</span></h4>
                    </div>
                    <div className="card-body d-flex pt-0">
                        <i className="feather-map-pin text-grey-500 me-3 font-lg"></i>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-1">Flodia, Austia </h4>
                    </div>
                    <div className="card-body d-flex pt-0">
                        <i className="feather-users text-grey-500 me-3 font-lg"></i>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-1">Genarel Group</h4>
                    </div>
                </div>
                <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-flex align-items-center  p-4">
                        <h4 className="fw-700 mb-0 font-xssss text-grey-900">Photos</h4>
                        <a href="#" className="fw-600 ms-auto font-xssss text-primary">See all</a>
                    </div>
                    <div className="card-body d-block pt-0 pb-2">
                        <div className="row">
                            <div className="col-6 mb-2 pe-1"><a href="images/e-2.jpg" data-lightbox="roadtrip"><img src="assets/images/e-2.jpg" alt="image" className="img-fluid rounded-3 w-100"/></a></div>
                            <div className="col-6 mb-2 ps-1"><a href="images/e-3.jpg" data-lightbox="roadtrip"><img src="assets/images/e-3.jpg" alt="image" className="img-fluid rounded-3 w-100"/></a></div>
                            <div className="col-6 mb-2 pe-1"><a href="images/e-4.jpg" data-lightbox="roadtrip"><img src="assets/images/e-4.jpg" alt="image" className="img-fluid rounded-3 w-100"/></a></div>
                            <div className="col-6 mb-2 ps-1"><a href="images/e-5.jpg" data-lightbox="roadtrip"><img src="assets/images/e-5.jpg" alt="image" className="img-fluid rounded-3 w-100"/></a></div>
                            <div className="col-6 mb-2 pe-1"><a href="images/e-2.jpg" data-lightbox="roadtrip"><img src="assets/images/e-2.jpg" alt="image" className="img-fluid rounded-3 w-100"/></a></div>
                            <div className="col-6 mb-2 ps-1"><a href="images/e-1.jpg" data-lightbox="roadtrip"><img src="assets/images/e-1.jpg" alt="image" className="img-fluid rounded-3 w-100"/></a></div>
                        </div>
                    </div>
                    <div className="card-body d-block w-100 pt-0">
                        <a href="#" className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i className="feather-external-link font-xss me-2"></i> More</a>
                    </div>
                </div>
                
                <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-flex align-items-center  p-4">
                        <h4 className="fw-700 mb-0 font-xssss text-grey-900">Event</h4>
                        <a href="#" className="fw-600 ms-auto font-xssss text-primary">See all</a>
                    </div>
                    <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                        <div className="bg-success me-2 p-3 rounded-xxl"><h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span className="ls-1 d-block font-xsss text-white fw-600">FEB</span>22</h4></div>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-2">Meeting with clients <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
                    </div>

                    <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                        <div className="bg-warning me-2 p-3 rounded-xxl"><h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span className="ls-1 d-block font-xsss text-white fw-600">APR</span>30</h4></div>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-2">Developer Programe <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
                    </div>

                    <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                        <div className="bg-primary me-2 p-3 rounded-xxl"><h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0"><span className="ls-1 d-block font-xsss text-white fw-600">APR</span>23</h4></div>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-2">Aniversary Event <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">41 madison ave, floor 24 new work, NY 10010</span> </h4>
                    </div>
                        
                </div>
            </div>
        )
    }
}
