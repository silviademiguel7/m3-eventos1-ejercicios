import React from 'react';

const alerta = (event)=>{
  
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.includes('cebolla')) {
        alert('ODIO LA CEBOLLA');
    }
}
class OnionHater extends React.Component {

    
    render() {
        
        return (
            <form>
                <label htmlFor="textArea">Escribe aqui tu comentario</label>
                <textarea name="textArea" id="textArea" cols="30" rows="10" onChange={alerta}></textarea>
            </form>
        )
    }
}
export default OnionHater;