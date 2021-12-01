import React, { Component } from 'react'

export default class HeaderProfile extends Component {
    render() {
        return (
            <div>
                <div className="col-xl-12">
                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                        <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3"><img src="assets/images/u-bg.jpg" alt="image"/></div>
                        <div className="card-body d-block pt-4 text-center position-relative">
                            <figure className="avatar mt--6 position-relative w75 z-index-1 w100 z-index-1 ms-auto me-auto"><img src="assets/images/user-8.png" alt="image" className="p-1 bg-white rounded-xl w-100"/></figure>

                            <h4 className="font-xs ls-1 fw-700 text-grey-900">Anthony Daugloi <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">@surfiyazakir22</span></h4>
                            <div className="d-flex align-items-center pt-0 position-absolute left-15 top-10 mt-4 ms-2">
                                <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2"><b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">456 </b> Posts</h4>
                                <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2"><b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">2.1k </b> Followers</h4>
                                <h4 className="font-xsssss text-center d-none d-lg-block text-grey-500 fw-600 ms-2 me-2"><b className="text-grey-900 mb-1 font-sm fw-700 d-inline-block ls-3 text-dark">32k </b> Follow</h4>
                            </div>
                            <div className="d-flex align-items-center justify-content-center position-absolute right-15 top-10 mt-2 me-2">
                                <a href="#" className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3">Add Friend</a>
                                <a href="#" className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"><i className="feather-mail font-md"></i></a>
                                <a href="#" id="dropdownMenu8" className="d-none d-lg-block btn-round-lg ms-2 rounded-3 text-grey-700 bg-greylight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-more font-md"></i></a>
                                <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu8">
                                    <div className="card-body p-0 d-flex">
                                        <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                        <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">Save Link <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span></h4>
                                    </div>
                                    <div className="card-body p-0 d-flex mt-2">
                                        <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                        <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">Hide Post <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                    </div>
                                    <div className="card-body p-0 d-flex mt-2">
                                        <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                        <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">Hide all from Group <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                    </div>
                                    <div className="card-body p-0 d-flex mt-2">
                                        <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                        <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-0">Unfollow Group <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
                            <ul className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-5" id="pills-tab" role="tablist">
                                <li className="list-inline-item me-5"><a className="fw-700 font-xsss text-grey-600 pt-3 pb-3 ls-1 d-inline-block active" data=".navtabs1">Publications</a></li>
                                <li className="list-inline-item  me-5"><a className="fw-700 font-xsss text-grey-600 pt-3 pb-3 ls-1 d-inline-block" data=".navtabs2">A propos</a></li>
                                <li className="list-inline-item me-5"><a className="fw-700 font-xsss text-grey-600 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data="tab">Amis</a></li>
                                <li className="list-inline-item me-5"><a className="fw-700 font-xsss text-grey-600 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs4" data="tab">Bibliothèques</a></li>
                                <li className="list-inline-item me-5"><a className="fw-700 font-xsss text-grey-600 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs5" data="tab"><i className="feather-edit font-xsss"></i> Modifier mon profil</a></li>
                                <li className="list-inline-item me-5"><a className="fw-700 font-xsss text-grey-600 pt-3 pb-3 ls-1 d-inline-block" href="#navtabs6" data="tab"><i className="feather-more-vertical font-xsss"></i> Plus</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
