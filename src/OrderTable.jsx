import {Link} from "react-router-dom"
import {useEffect} from "react"

const cn = "Chicken Nuggets"
const ct  = "Chicken Tenders"
const p = "Pizza"
const f = "Fries"
const mss = "Mariama Secret Special"
const hd = "Hot Dogs"
const osf = "Oumar Special Food"
const price
const total



const OrderTable = (props) =>{
  useEffect(() =>{
    total += price
  },price)


  return(
    <section>
      <table>
        <THead />
        <TBody props={props}/>
      </table>
      <button><Link to="/Ordered" id="link">Order</Link></button>
      <div>{total}</div>
    </section>  
  )
}

const TBody = (props) =>{
     const rows = props.props.state.map((row,index) =>{
      return(
        <tr key={index}>
          <td>{row}</td>
          <td>{price = getPrices(row)}</td>
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
      </tr>
    </thead>
  )
}

const getPrices = (row) =>{
  switch(row){
    case cn:
      return 10.25
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
              return 15.99
              break
              case hd:
                return 8.25
                break
                case osf:
                  return 15.99
                  break  
  }
}


export default OrderTable