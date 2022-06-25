import {Link} from "react-router-dom"

const cn = "Chicken Nuggets"
const ct  = "Chicken Tenders"
const p = "Pizza"
const f = "Fries"
const mss = "Mariama Secret Special"
const hd = "Hot Dogs"
const osf = "Oumar Special Food"



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
          <td>{getPrices(row)}</td>
          <td>{getTotalPrice(rows)}</td>
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
        <th>Price</th>
        <th>Full Prices</th>
      </tr>
    </thead>
  )
}

const getPrices = (row) =>{
  switch(row){
    case cn:
      return 10.00
      break
      case ct:
        return 5.99
        break
        case p:
          return 9.95
          break
          case f:
            return 9.99
            break
            case mss:
              return 10.00
              break
              case hd:
                return 8.25
                break
                case osf:
                  return 15.99
                  break  
  }
}

const getTotalPrice = (rows) =>{
  return rows[1]
}


export default OrderTable