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
        <label htmlFor="nah">Add items to your cart. Refresh to remove all items and restart.(Deselecting won't be an option due to how much is in each pack and that you would probably not need that much food. Also it's just clicking.)</label>

        <select id="nah" onClick={this.handleChange} multiple>
          <option value="Chicken Nuggets">Chicken Nuggets</option>
          <option value="Chicken Tenders">Chicken Tenders</option>
          <option vale="Pizza">Pizza</option>
          <option value="Fries">Fries</option>
          <option value="Mariama Secret Special">Mariama Secret Special</option>
          <option value="Hot Dogs">Hot Dogs</option>
          <option value="Oumar Special Food">Oumar Special Food</option>
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