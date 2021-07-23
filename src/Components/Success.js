import React from 'react'

function Success(props) {
    const { orders } = props

    return (
        <div>
    { orders.map((order) => {
          return <div key={order.id}> 
          <p>Customer Name: {order.firstName}</p>
          <p>Size: {order.size}</p>
          <p>Toppings:</p>
          {order.chicken && <p>Chicken</p>}
          {order.bacon && <p>Bacon</p>}
          {order.cheese && <p>Cheese</p>}
          {order.pepperoni && <p>Pepperoni</p>}
          <p>{order.special}</p>
          </div>
        })
    }
        </div>
    )
}

export default Success
