import React from 'react';
function CurrentDisplay(props){
    return(
        <p>
              US Dollar ${props.amount.toFixed(2)} = {props.currencyData.name}{" "}
              {props.currencyData.symbol}
              {(props.amount * props.currencyData.rate).toFixed(2)}
        </p>
    )
}
export default CurrentDisplay;