import React from 'react';

const destinyChange = (event)=>{
    const destino =  event.currentTarget.value;
    alert('Tu destino es viajar a '+ destino);

} 

class Destiny extends React.Component {

    render() {
        return (
            <form>
            <label htmlFor="destino">Destino:</label>
            <select id="destino" name="destino" onChange={destinyChange}>
                <option value="Buenos Aires" >Buenos Aires</option>
                <option value="Sydney">Sydney</option>
                <option value="Praga" >Praga</option>
                <option value="Boston">Boston</option>
                <option value="Tokio">Tokio</option>
            </select>
            </form>
        );
    }
}
export default Destiny;