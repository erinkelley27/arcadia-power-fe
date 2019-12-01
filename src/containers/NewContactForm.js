import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm'

const wrapperFunction = connect()
const NewContactForm = wrapperFunction(ContactForm)

export default NewContactForm