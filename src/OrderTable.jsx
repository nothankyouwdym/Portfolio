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
    const rows = props.props.state.map((row,index) =>{
      return(
        <tr key={index}>
          <td>{row}</td>
          
        </tr>
      )
    })
  return <tbody>{rows}</tbody>
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

const Deselect = (rows,index) =>{
  return(
    rows.filter((element,i) =>{
      return element[i] !== index
    })
  )
}

export default OrderTable