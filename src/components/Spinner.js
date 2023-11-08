import React from "react";
import loading from "./ring.gif";

// export class Spinner extends Component{
const Spinner = () => {
    // render(){
    return(
        <div className="text-center">
            <img className="my-3" src={loading} alt="loading" style={{ width: '100px', height: '100px' }} />
        </div>
    );
    // }
}

export default Spinner;