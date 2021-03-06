import React from 'react';
import imgIcon1 from '../../assets/images/icon-1.png';
import imgIcon3 from '../../assets/images/icon-3.png';

const Loginwith = () => {
    return (
        <div>
            <div className="col-sm-12 p-0 text-center mt-2">
                    
                <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">Or, Sign in with your social account </h6>
                <div className="form-group mb-1">
                    <a href="/#" className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2">
                        <img src={imgIcon1} alt="icon" className="ms-2 w40 mb-1 me-5" /> 
                        Sign in with Google
                    </a>
                </div>
                <div className="form-group mb-1">
                    <a href="/#" className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 ">
                        <img src={imgIcon3} alt="icon" className="ms-2 w40 mb-1 me-5" /> 
                        Sign in with Facebook
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Loginwith;