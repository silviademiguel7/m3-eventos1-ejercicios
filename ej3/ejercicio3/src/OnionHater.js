import React from 'react';
import './index.css';


class OnionHater extends React.Component {
   
   
    
    render() {
        
        return (
            <form>
                <label htmlFor="textArea">Escribe aqui tu comentario</label>
                <textarea  className = {this.props.isHating === true ? "red": ""}  name="textArea" id="textArea" cols="30" rows="10"  onChange = {this.props.handleCebolla}></textarea>
            </form>
        )
    }
}


export default OnionHater;