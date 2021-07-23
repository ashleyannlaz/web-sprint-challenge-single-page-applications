import * as yup from  'yup'

const formSchema = yup.object().shape({
    firstName: 
    yup.string()
    .trim()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),
    size: 
    yup.string()
    .required('Required'),
    pepperoni: 
    yup.boolean(),
    chicken: 
    yup.boolean(),
    cheese: 
    yup.boolean(),
    bacon: 
    yup.boolean(),
    special: 
    yup.string()
    .trim()

})

export default formSchema