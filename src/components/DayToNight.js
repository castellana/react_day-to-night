import React, { Component } from 'react';

class DatToNight extends Component {
    state = {  
        isDay: true
    }
    handleDayNight = () => {
        this.setState({ isDay: !this.state.isDay });
    }
    render() { 
        return ( 
            <div className={this.state.isDay ? "day" : "night"}>
                <h1>{this.state.isDay ? "Day" : "Night"}</h1>
                <button onClick={this.handleDayNight}>Change to {!this.state.isDay ? "Day" : "Night"}</button>
            </div>


            // otra forma con inline style:
            // <div style={this.state.isDay ? {background: '#fff', color: '#000'} : { background: '#000', color:  '#fff' }}>
            //     <h1>{this.state.isDay ? "Day" : "Night"}</h1>
            //     <button onClick={this.handleDayNight}>Change to {!this.state.isDay ? "Day" : "Night"}</button>
            // </div>

            
 

         );
    }
}
 
export default DatToNight;