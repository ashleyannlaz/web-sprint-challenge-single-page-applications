import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory();
    const routePizzaForm = () => {
        history.push('/pizza')
    }
    

    return (
        <div>
            Home is where the heart is
            <button id='order-pizza' onClick={routePizzaForm}>Pizza?</button>
            <div>
                <h2>Other food choices</h2>
             </div>
        </div>
    )
}

export default Home
