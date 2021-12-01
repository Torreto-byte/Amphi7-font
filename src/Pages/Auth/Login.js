import React from 'react';
import './styles.css';


const Login = () => {
    return (
        <>

            <form>
                
                <div className="form-group icon-input mb-3">
                    <i className="font-sm ti-email text-primary pe-0"></i>
                    <input type="text" 
                        className="style2-input ps-5 form-control text-danger-900 font-xsss fw-600" 
                        placeholder="Adresse email ou Numéro de téléphone" />                        
                </div>
                <div className="form-group icon-input mb-4">
                    <input type="Password" className="style2-input ps-5 form-control text-danger-900 font-xss ls-3" placeholder="Mot de passe" />
                    <i className="font-sm ti-lock text-danger-500 pe-0"></i>
                </div>
                <div className="form-group mb-3">
                    <a className="btn btn-block btn-lg  text-center style2-input text-white fw-600 bg-current border-0 p-0 ">
                        Se connecter
                    </a>
                </div>
            </form>
                
        </>
    );
};

export default Login;