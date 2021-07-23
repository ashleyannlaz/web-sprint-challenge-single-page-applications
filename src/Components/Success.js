import React from 'react'
import '../App.css'


function Success(props) {
    const { orders } = props

    return (
        <div className='orderForm'>
            <h2>Order details:</h2>
    { orders.map((order) => {
          return <div key={order.id}> 
          <p>Customer Name: {order.firstName}</p>
          <p>Pizza Size: {order.size}</p>
          <p>Toppings Desired:</p>
          {order.chicken && <p>- Chicken</p>}
          {order.bacon && <p>- Bacon</p>}
          {order.cheese && <p>- Cheese</p>}
          {order.pepperoni && <p>- Pepperoni</p>}
          <p>{order.special}</p>
          </div>
        })
    }
        </div>
    )
}

export default Success
