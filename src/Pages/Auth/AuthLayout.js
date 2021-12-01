import React, {useState, useEffect} from 'react';
import './styles.css';

//import logo from '../../assets/images/logo_amphi7.png';

import Login from './Login';
import Register from './Register';
import ForgetPassword from './ForgetPassword';
import Loading from '../../Components/Loading';


const AuthLayout = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setIsLoading(false);
        }, 1000);
    })



    const [LoginContent, setLoginContent] = useState(true);
    const [RegisterContent, setRegisterContent] = useState(false);
    const [ForgetPasswordContent, setForgetPasswordContent] = useState(false);
    const [DisplayButton, setDisplayButton] = useState(false);


    const rotateContent = (e) => {
        if (e.target.id === "register"){
            setLoginContent(false);
            setForgetPasswordContent(false);
            setRegisterContent(true);
            setDisplayButton(true);
        }else if (e.target.id === "forgetPassword"){
            setLoginContent(false);
            setForgetPasswordContent(true);
            setRegisterContent(false);
            setDisplayButton(true);
        }else if (e.target.id === "backbutton"){
            console.log();
            setLoginContent(true);
            setForgetPasswordContent(false);
            setRegisterContent(false);
            setDisplayButton(false);
        }
        
    }

    const backButton = (e) => {
        if (e.target.id === "backbutton"){
            
            setLoginContent(true);
            setForgetPasswordContent(false);
            setRegisterContent(false);
            setDisplayButton(false);
        }
    }

    

    return (
        <>
            {isLoading==true?
                <Loading/>:
                <div className="main-wrap">
                
                <div className="row">
                    <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat">
                    
                    </div>

                    <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                        <div className="card  border-0 ms-auto me-auto login-card">
                            <div className="card-header bg-none">
                                <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                                    Amphi7. 
                                    
                                </span>
                                <button  onClick={backButton} id="backbutton" 
                                    className=
                                        {
                                            !DisplayButton ? " d-none " 
                                            : " btn btn-default float-right  fw-700 font-xsss text-default-700"
                                        }
                                        
                                    >
                                    <i id="backbutton" className="font-sm ti-arrow-right fs-2  fw-700 font-xxl text-default-700  text-primary pe-0"></i>
                                </button>
                                <br />
                                <h2 className="fw-600 fs-1  mb-3 text-dark"> 
                                    Désormais nous sommes unis
                                </h2>
                            </div>
                            <div className="card-body rounded-0 text-center ">

                                {LoginContent && <Login />} 

                                {RegisterContent && <Register />} 

                                {ForgetPasswordContent && <ForgetPassword />} 
                                
                                <div className="col-sm-12 p-0 text-left">
                    
                                    <div className="form-check text-center mb-3">
                                        <a  onClick={rotateContent} id="forgetPassword" 
                                            className=
                                                {
                                                    !DisplayButton ? "btn btn-block btn-lg fw-700 font-xsss text-default-700 mt-1" 
                                                    : "d-none"
                                                }
                                                
                                            >
                                            Mot de passe oublié?
                                        </a>
                                    </div>

                                    <div className="form-group mb-3">
                                        <a type="button" onClick={rotateContent} id="register" 
                                            className= 
                                            {
                                                !DisplayButton ? " btn btn-block btn-lg  text-center style2-input text-white fw-600 btn-danger border-0 p-0" 
                                                : "d-none"
                                            } 
                                        >
                                            Créer nouveau compte
                                        </a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            }
            
        </>
    );
};

export default AuthLayout;