
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SlideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliry';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SlideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SlideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div>       
                <Logo height="11%"/>
                <nav>
                    <NavigationItems/>
                </nav>
                </div>
            </div>
        </Aux>
       
    )
}

export default sideDrawer;