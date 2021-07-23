import React from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'

function Form(props) {
    const { values, change, submit, disabled, errors } = props
    const history = useHistory();
    const routeSuccess = () => {
        history.push('/pizza/success')
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div>
            Form goes here
            <form id='pizza-form'
            onChange={onChange}
            >
{/* NAME INPUT
 */}
        <label> Name:&nbsp;
            <input 
            id='name-input'
            type='text'
            onChange={onChange}
            name='firstName'
            value={values.firstName}
            />
        </label>
{/* SIZE - DROP DOWN
 */}
        <label> Size:&nbsp;
            <select 
            id='size-dropdown'
            onChange={onChange}
            name='size'
            value={values.size}
            >
                <option value=''>
                    --Select Size--
                </option>
                <option value='small'>
                    Small
                </option>
                <option value='medium'>
                    Medium
                </option>
                <option value='large'>
                    Large
                </option>
                <option value='xlarge'>
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
                onChange={onChange}
                checked={values.pepperoni}
            /> Pepperoni
        </label>
        <label>
            <input 
                type='checkbox'
                name='chicken'
                onChange={onChange}
                checked={values.chicken}
            /> Chicken
        </label>
        <label>
            <input 
                type='checkbox'
                name='cheese'
                onChange={onChange}
                checked={values.bacon}
            /> Cheese
        </label>
        <label>
            <input 
                type='checkbox'
                name='bacon'
                onChange={onChange}
                checked={values.cheese}
            /> Bacon
        </label>
{/* SPECIAL INSTRUCTIONS TEXT BOX
 */}
        <label>Special Instructions<br />
            <textarea
                id='special-text'
                rows={5}
                onChange={onChange}
                name='special'
                value={values.special}
            >
            </textarea>
        </label>
        <button id='order-button'
                onClick={routeSuccess}>
        Add to Order
        </button>
        </form>
        </div>
    )
}

export default Form
