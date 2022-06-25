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
    const rows =  props.props.state.map((row,index) =>{
      return(
        <tr key={index}>
          <th>{row}</th>
          <th><button onClick={Deselect(rows,index)}>Delete</button></th>
        </tr>
      )
    })
    
    return <tbody>rows</tbody>
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
    rows.filter((element,index) =>{
      return element !== index
    })
  )
}

export default OrderTable