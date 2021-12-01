import React from 'react';

const Register = () => {
    return (
        <>

                <form>
                    
                    <div className="row">
                        <div className="col">
                            <div className="form-group icon-input mb-3">
                                <input type="text" 
                                    className="style2-input ps-5 form-control text-danger-900 font-xsss fw-600" 
                                    placeholder="Nom de famille" 
                                />                        
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group icon-input mb-4">
                                <input type="text" 
                                    className="style2-input ps-5 form-control text-danger-900 font-xss ls-3" 
                                    placeholder="Prénom" 
                                />
                            </div>
                        </div>
                    </div>
                
                    <div className="form-group icon-input mb-3">
                        <i className="font-sm ti-email text-primary pe-0"></i>
                        <input type="text" 
                            className="style2-input ps-5 form-control text-danger-900 font-xsss fw-600" 
                            placeholder="Adresse email ou Numéro de téléphone" 
                        />                        
                    </div>
                    <div className="form-group icon-input mb-4">
                        <input type="Password" 
                            className="style2-input ps-5 form-control text-danger-900 font-xss ls-3" 
                            placeholder=" Nouveau mot de passe" 
                        />
                        <i className="font-sm ti-lock text-danger-500 pe-0"></i>
                    </div>

                    <span className="fw-600  mb-3 text-dark">
                        Genre ?
                    </span>

                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" 
                                    type="radio" value="" 
                                    aria-label="Checkbox for following text input" 
                                />
                                </div>
                                <input type="text" className="style2-input ps-5 form-control text-danger-900 font-xsss fw-600" 
                                    aria-label="Text input with checkbox" disabled placeholder="Homme"
                                />
                            </div>
                            
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" 
                                    type="radio" value="" 
                                    aria-label="Checkbox for following text input" 
                                />
                                </div>
                                <input type="text" className="style2-input ps-5 form-control text-danger-900 font-xsss fw-600" 
                                    aria-label="Text input with checkbox" disabled placeholder="Femme"
                                />
                            </div>
                        </div>
                    </div>
                
                    <span className="fw-600  mb-3 text-dark">
                        Data de naissance ?
                    </span>
                   
                        <div className="col">
                            <div className="form-group icon-input mb-4">
                                <input type="date" 
                                    className="style2-input ps-5 form-control text-danger-900 font-xss ls-3" 
                                    
                                    placeholder=" Nouveau mot de passe" 
                                />
                            </div>
                            
                        </div>
                    
                    <div className="form-group mb-3">
                        <a  className="btn btn-block btn-lg  text-center style2-input text-white fw-600 bg-current border-0 p-0 ">
                            S'inscrire
                        </a>
                    </div>
                    
                </form>
                
                
        </>
    );
};

export default Register;