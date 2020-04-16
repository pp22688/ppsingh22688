import React from 'react';
import classes from './burgerIngredient'
const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div classes={classes.BreadBototm}></div>;
            break;
        case ('bread-top'):
            ingredient = (<div classes={classes.BreadTop}>
                <div classes={classes.Seeds1}></div>
                {/* <div classes={classes.Seeds2}></div> */}
            </div>)
            break;
            case ('meat'):
                ingredient = <div classes={classes.Meat}></div>;
                break;
    }
}

export default burgerIngredient;