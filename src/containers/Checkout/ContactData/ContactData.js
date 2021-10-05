import { Component } from "react";
import classes from './ContactData.module.css';
import Button from './../../../components/UI/Button/Button';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Shiliya Samon',
                address: {
                    street: 'Testtest',
                    zipcode: '2345',
                    email: 'samon@gmail.com'

                },
                delivaryMethod: 'fastest'
            }
        }
       axios.post('/orders.json', order)
       .then(response => {
           console.log(response);
           this.setState({loading: false});
           this.props.history.push('/');
       })
       .catch(err => {
            this.setState({loading: false});
            console.log(err);
       })
     
    }

    render() {
        let form = (
            <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Your email" />
                    <input type="text" name="street" placeholder="Street name" />
                    <input type="text" name="postal" placeholder="Postal Code" />

                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );

        if (this.state.loading) {
            form = <Spinner/>;
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;