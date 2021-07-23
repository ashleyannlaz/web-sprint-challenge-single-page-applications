import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema.js'

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
  firstName: '',
  size: '',
  pepperoni: false,
  chicken: false,
  cheese: false,
  bacon: false,
  special: '',
}
const initialOrders = []
const inDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState(initialOrders)

// HANDLE CHANGE
  const changeForm = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})    
  }

  const validate = (name, value) => {
    yup
    .reach (schema,name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: "" ,}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]
      // catch errors and set Form errors to post
    })
    )};

    useEffect(() => {
      schema.isValid(formValues)
      .then(valid => {
        // inDisabled(!valid);
      }); //enables button that is disabled by default
    }, [formValues]);

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
              errors={formErrors}
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
