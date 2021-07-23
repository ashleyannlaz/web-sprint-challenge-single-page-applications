import React from 'react'
import { useHistory } from 'react-router-dom'
import '../App.css'

function Form(props) {
    const { values, change, submit, disabled, errors } = props
    const history = useHistory();
 

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

   const onSubmit = (evt) => {
    history.push('/pizza/success');
    evt.preventDefault();
    submit();
   }
   

// RETURN
    return (
            <div className='orderForm'>
            <form id='pizza-form'
            onChange={onChange}
            onSubmit={onSubmit}
            >
{/* NAME INPUT
 */}
        <label> <div className='err'>{errors.firstName}</div>
            Name:&nbsp;
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
        <label> 
        <div className='err'>{errors.size}</div>
            Size:&nbsp;
            <select 
            id='size-dropdown'
            onChange={onChange}
            name='size'
            value={values.size}
            >
                <option value=''>
                    --Select Size--
                </option>
                <option value='Small'>
                    Small
                </option>
                <option value='Medium'>
                    Medium
                </option>
                <option value='Large'>
                    Large
                </option>
                <option value='X-Large'>
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
                checked={values.cheese}
            /> Cheese
        </label>
        <label>
            <input 
                type='checkbox'
                name='bacon'
                onChange={onChange}
                checked={values.bacon}
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
        <button disabled={disabled} id='order-button'
                >
        Add to Order
        </button>
        </form>
        </div>
    )
}

export default Form
