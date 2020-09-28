import React from 'react';
import { Progress, Nav } from 'reactstrap';

function Header(props) {

    const score = props.score
    const percentage = parseInt((score / 120) * 100)
    const colour = (percentage) => {
        if (percentage <= 33) {
            return "danger"
        } else if (percentage <= 66) {
            return "warning"
        } else if (percentage > 66) {
            return "success"
        }
    }

    return ( <
        div className = "fluid-container mb-4" >
        <
        Nav dark className = "text-light bg-info p-4" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-4" > Assessment Progress: { percentage } % < /div>  <
        Progress bar animated className = "col-8"
        color = { colour(percentage) }
        value = { percentage }
        min = "0"
        max = "100" / >

        <
        /div> < /
        div > <
        /Nav> < /
        div >

    )
}

export default Header;