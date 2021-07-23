import React, { useState, useEffect, useHistory } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Home from './Components/Home'
import Form from './Components/Form'
import Success from './Components/Success'


const initialFormValues = {
  firstName: '',
  size: '',
  pepperoni: false,
  chicken: false,
  cheese: false,
  bacon: false,
  special: '',
}

const initialFormErrors = {

}
const initialOrders = []
const inDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [orders, setOrders] = useState([])

// HANDLE CHANGE
  const changeForm = (name, value) => {
    // validate(name, value) 
    // for validation later on
    setFormValues({...formValues, [name]: value})    
  }

// HANDLE SUBMIT
  const formSubmit = (evt) => {
    // takes in values from the form 
    //   and removes white space using .trim()
    
    
    const newOrder = {
      firstName: formValues.firstName.trim(),
      size: formValues.size,
      // sauce: formValues.sauce.trim(),
     pepperoni: formValues.pepperoni,
     chicken: formValues.chicken,
     cheese: formValues.cheese,
     bacon: formValues.bacon,
     special: formValues.special,
    // toppings: ['pepperoni','chicken','bacon','cheese'].filter(topping => formValues[topping]),
    }
    postNewOrder(newOrder)
  }

// POST REQUEST
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrders([...orders, res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    
    <div>
      <div>
        <h2>Header Div</h2>
      <Link to=''>Home</Link>
      </div>

      <div> <h2>Content Div</h2>
        <Switch>
          <Route path='/pizza/success'>
      {/* Route to Success Page */}
            <Success 
              change={changeForm} 
              values={formValues} 
              submit={formSubmit}
              orders={orders}
            
            />
          </Route>
          <Route path='/pizza' >
      {/* Route to Form Page */}
            <Form 
              change={changeForm} 
              values={formValues} 
              submit={formSubmit}
            />
          </Route>
          <Route path='/'>
      {/* Route to Home Page */}
            <Home />
          </Route>
        </Switch>
      </div>

    </div>
  )
}

export default App
