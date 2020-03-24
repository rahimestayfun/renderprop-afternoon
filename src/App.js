import React, { Component } from "react";
import "./App.css";
import CurrencyConverter from "./Components/CurrencyConverter";
import CurrencyDisplay from './Components/CurrencyDisplay';
class App extends Component {
  render() {
    return (
      <div>
        <h2>Render Prop Example</h2>
        <CurrencyConverter
          //we can name this prop anything, but common convention is to call render
          render={(currencyData, amount) => (
            <CurrencyDisplay amount={amount} currencyData={currencyData}/>
            
          )}
        />
      </div>
    );
  }
}

export default App;
