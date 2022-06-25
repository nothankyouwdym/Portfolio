import {Link} from "react-router-dom"

const OrderTable = (props) =>{
  return(
    <section>
      <table>
        <THead />
        <TBody props={props}/>
      </table>

      <button><Link to="/Ordered" id="link">Order</Link></button>
    </section>  
  )
}

const TBody = (props) =>{
  return(
    <tbody>
    {props.props.state.map((row,index) =>{
      return(
        <tr key={index}>
          <td>{row}</td>
          <td>{index}</td>
        </tr>
      )
    })}
  </tbody>
  )  
}

const THead = () =>{
  return(
      <thead>
      <tr>
        <th>Food</th>
        <th>Delete</th>
      </tr>
    </thead>
  )
}

export default OrderTable