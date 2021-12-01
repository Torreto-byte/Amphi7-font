import React, { Component } from 'react'
import HeaderProfile from '../Components/HeaderProfile'
import Navbar from '../Components/Navbar'
import ProfilSidebar from '../Components/ProfilSidebar'
import Sidebar from '../Components/Sidebar'
import WritePost from '../Components/WritePost'
import ReadPost from '../Components/ReadPost'


export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <div className="main-wrapper">
                    <Navbar/>
                    <Sidebar/>
                    <div className="main-content right-chat-active">
                        <div className="middle-sidebar-bottom">
                            <div className="middle-sidebar-left">
                                <div className="content">
                                    <HeaderProfile/>

                                    <div className="row tabs navtabs1" id="navtabs">
                                        <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                                            <ProfilSidebar/>
                                        </div>

                                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                                            <WritePost/>

                                            <ReadPost/>
                                        </div>
                                    </div>
                                    <div className="row col-xl-12 col-xxl-12 col-lg-12 pe-0 tabs navtabs2" id="navtabs">
                                        <h1>User page profile !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h1>
                                    </div>
            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
