import React from "react";
import './popup.css'

class Popup extends React.Component {
    render(){ 
        let {onClose} = this.props
    
        return (this.props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => onClose()}>OKAY!</button>
                    {this.props.children}
                </div>
            </div>
        ) : "";
    }
}

export default Popup
