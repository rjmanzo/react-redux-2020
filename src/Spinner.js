import './Spinner.css';
import React from 'react';

const Spinner = (props) =>{

    return (
            <div class="ui active inverted dimmer">
                <div class="ui text loader">{props.message}</div>
            </div>
    );

}

//Default values when props are null
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;