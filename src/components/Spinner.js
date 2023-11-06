import React, {Component} from "react";
import loading from "./ring.gif";

export class Spinner extends Component{
    render(){
        return(
            <div className="text-center">
                <img src={loading} alt="loading" style={{ width: '100px', height: '100px' }} />
            </div>
        );
    }
}

export default Spinner;