const Menu = () =>{
  return(
    <section>
      <table>
        <THead />
        <TBody />
      </table>
    </section>
  )
}

const THead = () =>{
  return(
    <thead>
      <tr>
        <th>Food</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Servings</th>
      </tr>
    </thead>
  )
}


const TBody = () =>{
  return(
    <tbody>
      <tr>
        <th>Chicken Nuggets</th>
        <th>$10.00</th>
        <th>20</th>
        <th>10</th>
      </tr>
      <tr>
        <th>Chicken Tenders</th>
        <th>$5.99</th>
        <th>6</th>
        <th>4</th>
      </tr>
      <tr>
        <th>Pizza</th>
        <th>$9.95</th>
        <th>10</th>
        <th>5</th>
      </tr>
      <tr>
        <th>Fries</th>
        <th>9.99</th>
        <th>20</th>
        <th>3</th>
      </tr>
    </tbody>
  )
}

export default Menu