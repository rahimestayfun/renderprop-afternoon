import React from 'react';

class CurrencyConverter extends React.Component{
    state={
        currencyChosen:false,
        selectedCurrency:'Select Currency',
        amount:0
    }
    handleIncrease=()=>{
        this.setState((prevState)=>{
            return{
                amount: prevState.amount+1
            }
        })
    }
    handleDecrease=()=>{
        return(

            this.state.amount > 0 &&
            this.setState((prevState)=>{
                return{
                    amount: prevState.amount-1
                }
            })
            )
    }
    handleCurrencyChange=(e)=>{
        const userValue= e.target.value
        this.setState({selectedCurrency:userValue, currencyChosen: userValue === 'Select Currency'? false : true})
    }
    render(){
        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]
        const mappedCurrency= currencyData.map((el,i)=>{
            return <option key={el.id} value={i}>{el.name}</option>
        })
        return(
            <>
            <select value={this.state.selectedCurrency} onChange={this.handleCurrencyChange}>
                <option value="Select Currency">Select Currency</option>
                {mappedCurrency}
            </select>
            <button className="add" onClick={this.handleIncrease} disabled={!this.state.currencyChosen}>+</button>
            <button className="minus" onClick={this.handleDecrease} disabled={!this.state.currencyChosen}>-</button>
            
            {this.state.currencyChosen?
            this.props.render(currencyData[this.state.selectedCurrency],this.state.amount)
            : 
            <p>Please select currency</p>
        }
            </>

        )

    }
}
export default CurrencyConverter;