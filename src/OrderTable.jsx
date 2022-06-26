import {Link} from "react-router-dom"
import {useEffect, useState} from "react"

const cn = "Chicken Nuggets"
const ct  = "Chicken Tenders"
const p = "Pizza"
const f = "Fries"
const mss = "Mariama Secret Special"
const hd = "Hot Dogs"
const osf = "Oumar Special Food"
let price = 0.00


const OrderTable = (props) =>{
  const [totalPrice,setTotalPrice] = useState(0.00)

  useEffect(() =>{
    setTotalPrice(price)
  },[price])


  return(
    <section>
      <table>
        <THead />
        <TBody props={props} setTotalPrice={setTotalPrice}/>
      </table>
      <button><Link to="/Ordered" id="link">Order</Link></button>
      <h1>{totalPrice}</h1>
    </section>  
  )
}

const TBody = (props,setTotalPrice) =>{
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
        return 5.54
        break
        case p:
          return 9.82
          break
          case f:
            return 9.99
            break
            case mss:
              return 15.99
              break
              case hd:
                return 8.46
                break
                case osf:
                  return 15.99
                  break  
  }
}


export default OrderTable