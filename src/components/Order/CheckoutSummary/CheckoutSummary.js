
import Burger from './../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>Stay with us</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
               <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                clicked
                btnType="Danger"/>
            <Button 
                clicked
                btnType="Success"/>
        </div>
    );
}

export default CheckoutSummary;