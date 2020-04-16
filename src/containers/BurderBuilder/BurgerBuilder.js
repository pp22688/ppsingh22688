import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<Aux>
    <div>Burger</div>
    <div>Burger Controls</div>
</Aux>

         );
    }
}
 
export default BurgerBuilder;