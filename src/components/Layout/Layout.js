import React from 'react';
import Aux from '../../hoc/Auxilary';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.childern}
        </main>
    </Aux>
);

export default layout;