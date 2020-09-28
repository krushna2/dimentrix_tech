
import React from 'react';
import {Progress, Navbar} from 'reactstrap';

function Header(props){

    const score= props.score
    const percentage=parseInt((score/120)*100)
    const colour=(percentage)=>{
        if(percentage <= 33){
            return "danger"
        }else if( percentage <= 66){
            return "warning"
        }else if(percentage > 66){
            return "success"
        }
    }

    return(
       
            <div className="fluid-container ">
            <Navbar dark className="text-light bg-info m-3 p-5">
                <span>Assessment Progress :{percentage} %</span>  
                
                <Progress bar animated color={colour(percentage)} value={percentage} min="0" max="100" ></Progress>
              
            </Navbar>
            
            </div> 
        
    )
}

export default Header;