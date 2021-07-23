import React from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'

function Home() {
    const history = useHistory();
    const routePizzaForm = () => {
        history.push('/pizza')
    }
    

    return (
        <div>
        <div className='pizzaHome'>
            <div className='pizzaText'>
            <p>Your favorite food, delivered while coding!</p>
            <button id='order-pizza' onClick={routePizzaForm}>Pizza?</button>
            </div>
        </div>
            <div>
                <h2>Other food choices</h2>
             </div>
        </div>
        
    )
}

export default Home
