import React from 'react'

function Form() {
    return (
        <div>
            Form goes here
            <form id='pizza-form'>
{/* NAME INPUT
 */}
                <label> Name:
                    <input 
                    id='name-input'
                    />
                </label>
{/* SIZE - DROP DOWN
 */}
                <label> Size:
                    <select id='size-dropdown'>
                        <option>
                            --Select Size--
                        </option>
                        <option>
                            Small
                        </option>
                        <option>
                            Medium
                        </option>
                        <option>
                            Large
                        </option>
                        <option>
                            X-Large
                        </option>
                    </select>
                </label>
{/*  TOPPINGS - CHECKBOXES
 */}
                Select your toppings:
                <label>
                    <input 
                        type='checkbox'
                        name='pepperoni'
                    /> Pepperoni
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='chicken'
                    /> Chicken
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='cheese'
                    /> Cheese
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='bacon'
                    /> Bacon
                </label>
{/* SPECIAL INSTRUCTIONS TEXT BOX
 */}
                <label>Special Instructions
                    <input 
                        type='textarea'
                        id='special-text'
                    />
                </label>
                <button id='order-button'>
                    Add to Order
                </button>

            </form>
            

        </div>
    )
}

export default Form
