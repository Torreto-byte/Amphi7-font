import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Loading = () => {
    return (
        <div style={style}>
            <Loader
                type="Oval"
                color="#162a4e"
                height={100}
                width={100}
                timeout={1000} //3 secs
            />
        </div>
    );
};

const style = { 
    position: "fixed", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)" 
}

export default Loading;