import { Component } from "react"
import OrderTable from "./OrderTable"

class Order extends Component{
  state={
    item: []
  }
  render(){
    return(
      <section>
      <h1>Order</h1>

      <form>
        <label htmlFor="nah">Add items to your cart</label>

        <select id="nah" onClick={this.handleChange} multiple>
          <option value="Chicken Nuggets">Chicken Nuggets</option>
          <option value="Chicken Tenders">Chicken Tenders</option>
          <option vale="Pizza">Pizza</option>
          <option value="Fries">Fries</option>
        </select>
      </form>
      <OrderTable state={this.state.item}/>
    </section>
    )
  }

  handleChange = (e) =>{
    this.setState({item: [...this.state.item,e.target.value]})
  }
}

export default Order