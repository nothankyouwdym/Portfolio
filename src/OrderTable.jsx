

const OrderTable = (props) =>{
  return(
    <table>
      <THead />
      <TBody props={props}/>
    </table>
  )
}

const TBody = (props) =>{
  return(
    <tbody>
    {props.props.state.map((row) =>{
      return(
        <tr>
          <th>{row}</th>
        </tr>,
        <tr>
          <th>{if()}</th>
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
        <th>Price</th>
      </tr>
    </thead>
  )
}

export default OrderTable